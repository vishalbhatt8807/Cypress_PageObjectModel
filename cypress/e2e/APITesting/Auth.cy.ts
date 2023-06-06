describe('API Testing', () => {
    it('Basic Auth Check', () => {
        cy.request({
            method: 'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                user:'postman',
                pass:'password'
            },
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.be.true;
        })

    });

    it('Digest Auth Check', () => {
        cy.request({
            method: 'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                user:'postman',
                pass:'password',
                method:'Digest'
            },
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.be.true;
        })
       
    });

    const token = "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";
    it('Bearer Token Auth Check', () => {
        cy.request({
            method: 'GET',
            url:'https://api.github.com/user/repos',
            headers:{"Authorization": "Bearer " + token
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
        })
        
    });
});