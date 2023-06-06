describe('Javascript Alert', () => {
    it('Perform JS alert operation', () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.include("I am a JS Alert");
        });
        cy.get("#result").should("have.text","You successfully clicked an alert");
    });

    it('Perform JS confirm Alert operation and click OK button', () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.include("I am a JS Confirm");
            return true;
        });
        cy.get("#result").should("have.text","You clicked: Ok");
    });

    it('Perform JS confirm Alert operation and click OK button', () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.include("I am a JS Confirm");
            return false;
        });
        cy.get("#result").should("have.text","You clicked: Cancel");
    });

    it.only('Perform JS Prompt Alert operation and click OK button', () => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Welcome")
        })
        cy.get("button[onclick='jsPrompt()']").click();
        // cy.on('window:confirm',(t)=>{
        //     cy.wrap(t).click();
        //     return true;
        // })
        cy.get("#result").should("have.text","You entered: Welcome");
    });
});