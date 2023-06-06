describe('Radio Button and Check Button Demo', () => {
    before(() => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    });

    it('Validate Radio button operation', () => {
        cy.get("#female").click().should("be.checked");
        cy.wait(3000);
        cy.get("#male").click().should("be.checked");
        cy.wait(3000);
        cy.get("#female").should("not.be.checked");
    });

    it('Validate Check button operation', () => {
        cy.wait(3000);
        cy.get("#monday").click().should("be.checked");
        cy.wait(3000);
        cy.get("#monday").click().should("not.be.checked");
        cy.wait(3000);
        cy.get("#tuesday").click().should("be.checked");
        cy.wait(3000);
        cy.get("#tuesday").click().should("not.be.checked");
        cy.wait(3000);
        cy.get("#wednesday").click().should("be.checked");
        cy.wait(3000);
        cy.get("#wednesday").click().should("not.be.checked");
        cy.wait(3000);
        cy.get("#thursday").click().should("be.checked");
        cy.wait(3000);
        cy.get("#thursday").click().should("not.be.checked");      
        cy.wait(3000);
        cy.get("#friday").click().should("be.checked");
        cy.wait(3000);
        cy.get("#friday").click().should("not.be.checked");
        cy.wait(3000);
        cy.get("#saturday").click().should("be.checked");
        cy.wait(3000);
        cy.get("#saturday").click().should("not.be.checked");
        cy.wait(3000);
        cy.get("#sunday").click().should("be.checked");
        cy.wait(3000);
        cy.get("#sunday").click().should("not.be.checked");
    });

    it.only('perform dropdown operation',()=>{
        let te = cy.get(".custom-select");
        te.find("option").each(($el,index,$list)=>{
            let text = $el.text()
            cy.log("=======>"+$el.text())
            if(text==="Italy"){
                cy.log("=======>"+index);
                cy.get(".custom-select").select(index)
                .should('have.value',6);
                return false;
            }
        });
    });
});