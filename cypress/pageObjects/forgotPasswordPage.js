class ForgotPasswordPage {
  get head() {
    return cy.get(".head");
  }

  get pageContent() {
    return cy.get(".excerpt");
  }

  get emailAddressInput() {
    return cy.get("#myinput4");
  }

  get resetPassword() {
    return cy.get('[type="submit"]');
  }

  get resetPasswordWasSent() {
    return cy.get(".alert.alert-success.ng-star-inserted");
  }

  get nonExistingEmail() {
    return cy.get(".invalid-feedback.ng-star-inserted");
  }
}

export default new ForgotPasswordPage();
