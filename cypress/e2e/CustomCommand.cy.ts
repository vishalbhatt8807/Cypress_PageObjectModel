describe('Custom Commands Example', () => {
    
    it("Create Click Link Custom Command",()=>{
        cy.visit("https://demo.nopcommerce.com/");
        cy.clickLink("Build your own computer");

    })
});