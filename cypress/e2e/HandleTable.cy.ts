describe('Handle tables operation', () => {
    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get('#input-username').type("Demo");
        cy.get('#input-password').type("demo");
        cy.get('.btn').click();
        cy.wait(3000);
        cy.get(".btn-close").click();
        cy.get(".parent[href='#collapse-5']").click();
        cy.wait(3000);
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();
    });

    it.skip('Validate Rows and columns', () => {
        cy.get("table[class ='table table-bordered table-hover'] > tbody > tr").should('have.length',10)        
        cy.get("table[class ='table table-bordered table-hover'] > thead > tr > td").should('have.length',7)        
    
    });

    
    it('Validate particular cell data of row & column', () => {
        cy.get("tbody tr:nth-child(2) td:nth-child(3)").should('have.text',"olaola@das.com")
        cy.get("tbody tr:nth-child(2) td:nth-child(3)").should('contain',"olaola@das.com")        
    });
    it('Read whole table contents', () => {
        cy.get("table[class ='table table-bordered table-hover'] > tbody > tr")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($cell,index,$cells)=>{
                    cy.log($cell.text());
                })
            })
            
        })
    });

    it.only('Pagination', () => {
        let totalPage=0;
        cy.get(".col-sm-6.text-end").then((e)=>{
            let getText = e.text();
            //parsing string to number.
            totalPage = Number(getText.substring(getText.indexOf("(")+1,getText.indexOf("Pages")-1));
            cy.log("=====>"+totalPage);
        })
        totalPage=5;
        for(let p =1;p<=totalPage;p++){
            if(totalPage>1){
                cy.get(".pagination > li:nth-child("+p+")").click();
                cy.get("table[class ='table table-bordered table-hover'] > tbody > tr")
                .each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td").each(($cell,index,$cells)=>{
                            cy.log($cell.text());
                        })
                    })
                    
                })
            }
        }
    });
})