describe('API Testing', () => {
    let authToken: string | null = null; 
    before("Creating an Access token",()=>{
        cy.request(
            {
                method: "POST",
                url:"https://simple-books-api.glitch.me/api-clients/",
                headers:{
                        'Content-Type':'application/json'
                        },
                body: {
                        'clientName':"Test",
                        'clientEmail':"Test"+Math.random().toString(5).substring(2)+"@gmail.com"
                      }
            }).then((response)=>{
                authToken = response.body.accessToken;
            });
    });
    let orderId: null = null;
    it('Creating new orders', () => {
        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/orders",
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body:{
                "bookId" : 1,
                "customerName":"VishalBhattQWERTY"
            }   
            
        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.created).to.be.true;
            orderId = response.body.orderId;
        })
    });

    it('fetch new order', () => {
        cy.request({
            method: 'GET',
            url:"https://simple-books-api.glitch.me/books/",
            qs :{'orderId':orderId}
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body[0]).property('id').to.eq(1);
        })
    }); 
});