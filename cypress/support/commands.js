import LoginPage from "../pageObjects/loginPage";

Cypress.Commands.add("navigateToLoginPage", () => {
  cy.visit("/");
});

Cypress.Commands.add("login", (user, password) => {
  cy.visit("/");
  LoginPage.emailAdressInput.click();
  LoginPage.emailAdressInput.type(user);
  LoginPage.passwordInput.click();
  LoginPage.passwordInput.type(password);
  LoginPage.loginButton.click();
});
