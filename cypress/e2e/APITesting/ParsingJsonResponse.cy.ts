describe('API Testing', () => {
    it('Perform Json Parsing Response', () => {
        cy.request({
            method: "GET",
            url:"https://fakestoreapi.com/products"
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(20);
            expect(response.body[0]).property('id').to.eq(1);
            expect(response.body[0]).property('title').to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
            expect(response.body[0]).property('price').to.eq(109.95);
            expect(response.body[0]).property('category').to.eq("men's clothing");
            expect(response.body[0]).property('image').to.eq("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");
            expect(response.body[0].rating.rate).to.eq(3.9);

            expect(response.body[19]).property('id').to.eq(20);
            expect(response.body[19]).property('title').to.eq("DANVOUY Womens T Shirt Casual Cotton Short");
            expect(response.body[19]).property('price').to.eq(12.99);
            expect(response.body[19]).property('category').to.eq("women's clothing");
            expect(response.body[19]).property('image').to.eq("https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg");
            expect(response.body[19].rating.rate).to.eq(3.6);
        
            
        })
        
    });
    it('Perform complex Json Parsing Response', () => {
        let totalPrice =0;
        cy.request({
            method: "GET",
            url:"https://fakestoreapi.com/products",
            qs:{limit:5}
        }).then((response)=>{
            expect(response.status).to.eq(200);
            response.body.forEach((element: any) => {
                totalPrice = totalPrice+element.price 
            });
            expect(totalPrice).to.eq(899.23);
        })
    })
});