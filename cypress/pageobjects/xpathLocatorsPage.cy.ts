class xpathLocators{
    elements = {
        userNameInput:() =>
        cy.xpath("//input[@placeholder='Username']"),
        passwordInput:() =>
        cy.xpath("//input[@placeholder='Password']"),
        submitBtn:()=>
        cy.xpath("//button[normalize-space()='Login']"),
        getUsname:()=>
        cy.xpath("//p[@class='oxd-userdropdown-name']")
    }

    get username(){
        return this.elements.userNameInput();
    }
    
    get password(){
        return this.elements.passwordInput();
    }

    get submitBtn(){
        return this.elements.submitBtn();
    }

    get checkUserName(){
        return this.elements.getUsname();
    }

}
export default xpathLocators;