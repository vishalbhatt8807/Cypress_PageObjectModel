import 'cypress-iframe';

describe('Handling iframes', () => {
    it.skip('Enter value inside iframe', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        let iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("Welcome Cypress tutorial {selectAll}");
        cy.get("button[title='Bold'] span[class='tox-icon tox-tbtn__icon-wrap']").click();
    });

    it('Enter value inside iframe by using custom command', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.getIframe("#mce_0_ifr").clear().type("Welcome Cypress tutorial {selectAll}");
        cy.get("button[title='Bold'] span[class='tox-icon tox-tbtn__icon-wrap']").click();
    });

    it('Enter value inside iframe plugin', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        //npm install -D cypress-iframe
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').clear().type("Welcome Cypress tutorial {selectAll}");
        
        cy.get("button[title='Bold'] span[class='tox-icon tox-tbtn__icon-wrap']").click();
    });

})
;