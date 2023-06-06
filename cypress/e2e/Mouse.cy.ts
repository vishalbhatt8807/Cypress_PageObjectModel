import 'cypress-iframe'
import '@4tw/cypress-drag-drop'

describe('Mouse Operations', () => {
    it("Mouse Hovers",()=>{
        cy.visit("https://demo.opencart.com/");
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").click();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')
       
    })
    it('Perform Right Click', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
       //approach1
       // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
       // cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span")
      //  .should('be.visible');

        //Approach2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span")
        .should('be.visible');
    });

    it('Double click',()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded("#iframeResult");
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick");
        cy.wait(4000);
        cy.get("#field2").should('have.text',"Hello World!");
    })

    it('Perform Drag and Drop Operation',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        //npm install --save-dev @4tw/cypress-drag-drop

        cy.get("#box6").drag("#box102",{force: true})
        cy.get("#box102").should('be.visible');
    })

    it.only('Perform Scrolling Operation',()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
      //  cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(43) > td:nth-child(1)").scrollIntoView().should('be.visible');
      cy.get(':nth-child(112) > :nth-child(1) > img').scrollTo('bottom',{ensureScrollable: false}).should('be.visible');
    })
});