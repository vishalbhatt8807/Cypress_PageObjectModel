import Dropdown from '../pageobjects/DropDown.cy'
describe('Dropdown List', () => {
    it('Perform dropdown list with select option', () => {
        const dd = new Dropdown();
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        dd.selectDropdown.select("Algeria")
        .should('have.value',"Algeria")

    });

    it('Perform dropdown list without select option', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type("Japan{enter}");
        cy.get("#select2-billing_state-container").click();
        cy.get("body > span > span > span.select2-search.select2-search--dropdown > input").type("Akita{enter}");
        cy.get("#select2-billing_country-container").should('have.text',"Japan")
    });

    it.only('Perform auto suggest drop down', () => {
        cy.visit("https://www.wikipedia.org/");
        cy.get("#searchInput").type("Delhi");
        cy.wait(2000);
        cy.get(".suggestion-title").each(($ele)=>{
            if($ele.text()==="Delhi University"){
                cy.wrap($ele).click();
                return false;
            }
        });
    });
});