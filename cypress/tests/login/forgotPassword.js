import "../../support/commands";
import LoginPage from "../../pageObjects/loginPage";
import ForgotPasswordPage from "../../pageObjects/forgotPasswordPage";
import ChangePasswordPage from "../../pageObjects/changePasswordPage";
import { faker } from "@faker-js/faker";

describe("Forgot password tests", () => {
  let resetLink;
  let newPassword;

  before(function () {
    cy.fixture("userDetails").then((user) => {
      globalThis.user = user;
    });

    cy.fixture("data").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.navigateToLoginPage();
  });

  it("should open forgot password page", () => {
    LoginPage.forgotPassword.click();
    cy.url().should("eq", data.forgotPasswordUrl);
  });

  it("shouldn't reset password with non existing account ", () => {
    LoginPage.forgotPassword.click();
    ForgotPasswordPage.emailAddressInput.click();
    ForgotPasswordPage.emailAddressInput.type(user.nonExistingEmail);
    ForgotPasswordPage.resetPassword.click();
    ForgotPasswordPage.nonExistingEmail.should(
      "have.text",
      data.emailDoesntExist
    );
  });

  it("should show alert after user clicks on a password reset button", () => {
    LoginPage.forgotPassword.click();
    ForgotPasswordPage.emailAddressInput.click();
    ForgotPasswordPage.emailAddressInput.type(user.email);
    ForgotPasswordPage.resetPassword.click();
    ForgotPasswordPage.resetPasswordWasSent.should(
      "have.text",
      data.resetPasswordEmailSent
    );
  });
  it("should reset password", () => {
    cy.intercept(
      "POST",
      "https://legacy-api.foxstone.co/api/forgotten-password?lang=en"
    ).as("forgotPasswordLink");

    LoginPage.forgotPassword.click();
    ForgotPasswordPage.emailAddressInput.click();
    ForgotPasswordPage.emailAddressInput.type(user.email);
    ForgotPasswordPage.resetPassword.click();

    cy.wait("@forgotPasswordLink").then(({ request, response }) => {
      resetLink = response.body.link;
      newPassword = faker.internet.password({
        length: 10,
        pattern: /\w/,
      });

      expect(response.body).to.have.property("link", resetLink);
      expect(response.body).to.have.property("linkTtlSeconds", 1800);

      cy.visit(resetLink);
      ChangePasswordPage.newPasswordInput.click();
      ChangePasswordPage.newPasswordInput.type(newPassword);
      ChangePasswordPage.changePasswordButton.click();
      LoginPage.head.should("be.visible");
      LoginPage.head.should("have.text", "Login");
    });
  });

  it("should successfully login with the new password", () => {
    cy.login(user.email, newPassword);
    cy.url().should("eq", data.offeringsUrl);
  });
});
