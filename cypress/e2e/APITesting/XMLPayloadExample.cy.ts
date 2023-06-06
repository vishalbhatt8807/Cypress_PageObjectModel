import { error } from 'cypress/types/jquery';
import xml2js from 'xml2js';
const parser = new xml2js.Parser({explicitArray:false})
describe('API testing using Cypress', () => {
   const xmlPayload ='<?xml version="1.0" encoding="UTF-8"?> <Pet> 	<id>0</id> 	<Category> 		<id>0</id> 		<name>string</name> 	</Category> 	<name>doggie</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>'
   let petId: 0 ; 
   before("Pass XML payload",()=>{
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: xmlPayload,
            headers:{'Content-Type':'application/xml', 'accept':'application/xml'}
        }).then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(error: Error | null, result: any)=>{
                petId = result.Pet.id;
                
               cy.log(String(petId))
            });
            
        })
    })
    it('GET Pet Details', () => {
        cy.request({
            method:'GET',
            url:'https://petstore.swagger.io/v2/pet/'+petId,
           
        }).then((response)=>{
            expect(response.status).to.eq(200);
            cy.log(response.body)
            parser.parseString(response.body,(error: Error | null, result: any)=>{
                const t = response.body;
                expect(t).property('id').to.eq(Number(petId));
                expect(t).property('name').to.eq('doggie');
               cy.log(String(t))
            }); 
           
        })
    });
});