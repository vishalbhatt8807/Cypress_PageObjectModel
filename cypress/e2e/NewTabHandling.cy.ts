describe('Handle New tab option', () => {
    
    it('Use Invoke method', () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click();
        cy.url().should("eq","https://the-internet.herokuapp.com/windows/new");
    });

    it('Use prop method', () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").then((te)=>{
           const url = te.prop('href');
           cy.visit(url)
        });
        cy.url().should("contains","/windows/new");
    });
});