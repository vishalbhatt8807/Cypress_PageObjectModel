describe('Fixture Demo', () => {
    let userData: any;
    before(() => {
        cy.fixture("test").then((data)=>{
            userData = data;
        })
    });
    it('Upload data using fixture files', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
            cy.get("input[placeholder='Username']").type(userData.username)
            cy.get("input[placeholder='Password']").type(userData.password)
            cy.get("button[type='submit']").click();
            cy.wait(3000);
            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)")
            .should('have.text',userData.expected )
     
    });
    it.only('Upload multiple data using fixture files', () => {
        let  userData1: any;
      
        cy.fixture("test_data").then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/");
                 data.forEach((element: { username: string; password: string; expected: any; }) => {
                    
                cy.get("input[placeholder='Username']").type(element.username)
                cy.get("input[placeholder='Password']").type(element.password)
                cy.get("button[type='submit']").click();
                cy.wait(3000);
                if(element.password=='admin121'){
                    cy.get('.oxd-alert-content > .oxd-text')
                    .should('have.text',element.expected )
                  
                }else if(element.password==''){
                    cy.get(".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message")
                    .should('have.text',element.expected )
                    cy.go('back');
                }else if(element.password=='admin123'){
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)")
                    .should('have.text',element.expected )
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                    cy.wait(3000)
                }
                
               
                
            })
        })
        
           
    });
});