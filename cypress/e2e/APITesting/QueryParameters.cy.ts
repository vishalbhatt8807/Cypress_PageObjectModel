describe('API Testing using Query Parameters', () => {
    it('Passing Query Parameters - First Approach', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/',
            qs: {page:2}
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.status).equal(200);
            expect(response.body.page).to.eql(2);
            expect(response.body.data).have.length(6);
            expect(response.body.data[0]).has.property('id',7);
            expect(response.body.data[0]).has.property('first_name',"Michael");
        })

    });

    it('Passing Query Parameters - Second Approach', () => {
        const queryPara = {page:2};
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/',
            qs: queryPara
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.status).equal(200);
            expect(response.body.page).to.eql(2);
            expect(response.body.data).to.have.lengthOf(6);
            expect(response.body.data[0]).has.property('id',7);
            expect(response.body.data[0]).has.property('first_name',"Michael");
        })

    });

});