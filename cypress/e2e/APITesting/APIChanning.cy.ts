import { random } from "cypress/types/lodash";

describe('API Testing', () => {
    const access_token = '60f75a0b0941d1c2ae572846896b8c1705dd27df80860186e6f9c6d891d89389';
    let getId = 0; 
    it('Perform Create, Update, Delete and Get operation in GoRest API', () => {
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'Authorization': 'Bearer '+access_token
            },
            body:{
                "name": "Aslesha Panicker",
                "email": Math.random().toString(5).substring(2)+"@emard.test",
                "gender": "male",
                "status": "active"
            }
        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq("Aslesha Panicker");
            getId = response.body.id;
            cy.request({
                method:'PUT',
                url:'https://gorest.co.in/public/v2/users/'+getId,
                headers:{
                    'Authorization': 'Bearer '+access_token
                },body:{
                    "name": "Vishal Bhatt"
                }  
            }).then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq("Vishal Bhatt");
                cy.request({
                    method:'GET',
                    url:'https://gorest.co.in/public/v2/users/'+getId,
                    headers:{
                        'Authorization': 'Bearer '+access_token
                    }
                }).then((response)=>{
                    expect(response.status).to.eq(200);
                    expect(response.body.name).to.eq("Vishal Bhatt");
                    cy.request({
                        method:'DELETE',
                        url:'https://gorest.co.in/public/v2/users/'+getId,
                        headers:{
                            'Authorization': 'Bearer '+access_token
                        }
                    }).then((response)=>{
                        expect(response.status).to.eq(204);
                    })
                })
            })
        })
    });
});