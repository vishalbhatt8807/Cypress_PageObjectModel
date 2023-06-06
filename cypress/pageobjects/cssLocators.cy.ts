class cssLocators{
    elements= {
        searchBox:() =>
        cy.get("#APjFqb"),
        searchResult:() =>
        cy.get("h3")
    }

    get getSearchBox(){
     this.elements.searchBox().clear();
     return this.elements.searchBox();
    }

    get getSearchResults(){
        return this.elements.searchResult();
       }
}
export default cssLocators;