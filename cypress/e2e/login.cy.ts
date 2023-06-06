import loginPage from "../pageobjects/loginPage.cy";
describe('template spec', () => {
  beforeEach( ()=>{
    cy.visit('https://demo.guru99.com/test/newtours/');
  }) 
  it('Verify Login Successful', () => {
     const loginObj = new loginPage();
    // loginObj.enterUserName('selenium@qa');
    // loginObj.enterPassword('qa@12345');
    // loginObj.clickSubmit();
    loginObj.enterUserName.type('selenium@qa');
    loginObj.enterPassword.type('qa@12345');
    loginObj.clickSubmit.click();
    loginObj.elements.successTxt().should('have.text','Login Successfully');
  })

  it('Verify Login unsuccessful for invalid username/password', () => {
    const loginObj = new loginPage();
    // loginObj.enterUserName('selenium');
    // loginObj.enterPassword('qa@123');
    // loginObj.clickSubmit();
    loginObj.enterUserName.type('selenium');
    loginObj.enterPassword.type('qa@123');
    loginObj.clickSubmit.click();
    
    loginObj.elements.errorTxt().should('contain','Enter your userName and password correct');
  })
})