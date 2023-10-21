class LoginPage {

    get contentImage() {
        return cy.get('.col.col-lg-4.d-none.d-lg-block');
    }

    get laguageBar() {
        return cy.get('.languages.ng-star-inserted');
    }

    get englishLanguage(){
        return cy.get('div.languages.ng-star-inserted a:nth-child(1)');
    }

    get franchLanguage(){
        return cy.get('div.languages.ng-star-inserted a:nth-child(2)');
    }

    get germanLanguage(){
        return cy.get('div.languages.ng-star-inserted a:nth-child(3)');
    }

    get logo(){
        return cy.get('.logo');
    }

    get latestImage(){
        return cy.get('.roadwork-tape.ng-star-inserted');
    }

    get head(){
        return cy.get('.head');
    }

    get loginForm(){
        return cy.get('#sso-login-form');
    }

    get emailAdressInput() {
        return cy.get('#input1');
    }

    get passwordInput(){
        return cy.get('#input2');
    }

    get loginButton() {
        return cy.get('[type="submit"]');
    }

    get forgotPassword() {
        return cy.get('.forgot-pass');
    }

    get signUpNowLink() {
        return cy.get('.sign-up-now');
    }
}

export default new LoginPage();