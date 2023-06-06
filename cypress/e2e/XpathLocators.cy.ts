import 'cypress-xpath';
import xpathLocators from '../pageobjects/xpathLocatorsPage.cy';

describe('Xpath Locators', () => {
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
    });

    it('Perform Login operation and validate Title of Home Page', () => {
        cy.wait(3000);
        const xpathObj = new xpathLocators();
        xpathObj.username.type("Admin");
        xpathObj.password.type("admin123");
        xpathObj.submitBtn.click();
        cy.wait(3000);
        xpathObj.checkUserName.should('be.visible');
        cy.title().should('eq',"OrangeHRM")
    });
});