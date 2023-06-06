import cssLocators from "../pageobjects/cssLocators.cy";
describe('CSSLocators', () => {
    beforeEach(()=>{
        cy.visit("https://www.google.com/");
    })

    it('Get Search Results on Google', () => {
        const cssLoc = new cssLocators();
        cssLoc.getSearchBox.type("T-Shirts{enter}");
        cy.wait(4000);
        let header3 = cssLoc.getSearchResults;
        //each loop to get all text coming after search T-Shirts on Google.
        header3.each(($ele,index,$list)=>{
            cy.log("==========="+$ele.text()+"============")
        })
    });
});