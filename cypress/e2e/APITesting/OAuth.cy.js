//create an application from client resource
//generate clientId and Client Secret.

// Using clienId and client secret generate a auth code from third party vendor Auth Server using
// POST request " https://github.com/login/oauth/access_token"
describe('API Testing', () => {
    let access_token=null;
    it('POST Query Parameters and return access token Testing', () => {
        cy.request({
            method: 'POST',
            url:'https://github.com/login/oauth/access_token',
            qs:{
                'client_id':'2b500b86387466d2a67e',
                'client_secret':'10bbbac0ce43ce812ce34503a98564b08f6854d0',
                'code':'9859a6d17b50e7650423'
            }
        }).then((response)=>{
            //access_token=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&scope=&token_type=bearer
            cy.log("======>"+response.body)
            const param = response.body.split('&');
            
            access_token = param[0].split("=")[1];
            cy.log("======>"+access_token)
        })
    });

    it('GET response by passing access_token', () => {
        cy.request({
            method:'GET',
            url:"https://api.github.com/user/repos",
            headers:{'Authorization': "Bearer "+access_token}
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body[1].id).to.eq(117410844);
            expect(response.body[7].name).to.eq('WebdriverIO_Project1');
        })
    });
});