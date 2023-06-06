class loginPage{
    elements = {
        usernameInput :() =>
            cy.get("input[name='userName']"),
        passwordInput: ()=>
            cy.get("input[name='password']"),
        loginBtn: ()=>
            cy.get("input[name='submit']"),
        successTxt: ()=>
            cy.get('h3'),
        errorTxt : () =>
            cy.get('span')
    }

    // enterUserName(userName: any){
    //     this.elements.usernameInput().clear();
    //     this.elements.usernameInput().type(userName);
    // }

    
    // enterPassword(password: any){
    //     this.elements.passwordInput().clear();
    //     this.elements.passwordInput().type(password);
    // }

    // clickSubmit(){
    //     this.elements.loginBtn().click();
    // }

    get enterUserName(){
        this.elements.usernameInput().clear();
        return this.elements.usernameInput();
    }

    
    get enterPassword(){
        this.elements.passwordInput().clear();
      return  this.elements.passwordInput();
    }

    get clickSubmit(){
       return this.elements.loginBtn();
    }
    
}
export default loginPage;