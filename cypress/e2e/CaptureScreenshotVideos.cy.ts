describe('Sceenshot and videos ', () => {
    it('Get Sceenshot', () => {
        cy.visit("https://demo.nopcommerce.com/");
      //  cy.screenshot("loginPage");
       // cy.get("img[alt='nopCommerce demo store']").screenshot("logo");
    
        //Automatically capture screenshot and videos when run through CLI.

        cy.get("body > div:nth-child(7) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)").click();
        cy.get("body > div:nth-child(7) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(3) > li:nth-child(1) > a:nth-child(1)").should('have.text',"Desktops");
    });

});