class Dropdown{
    elements={
        selectDropDownBox:()=> cy.get("#zcf_address_country"),
        
    }
    get selectDropdown(){
      return  this.elements.selectDropDownBox();
    }
}
export default Dropdown;