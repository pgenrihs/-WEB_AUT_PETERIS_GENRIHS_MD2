export class BasePage {
    static get url() {
        return "";
    }

    static visit() {
        cy.visit(`https://katalon-demo-cura.herokuapp.com/`);
    }
}