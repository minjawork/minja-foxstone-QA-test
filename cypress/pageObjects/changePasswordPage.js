class ChangePassswordPage {
  get newPasswordInput() {
    return cy.get("#input1");
  }

  get changePasswordButton() {
    return cy.get('[type="submit"]');
  }
}

export default new ChangePassswordPage();
