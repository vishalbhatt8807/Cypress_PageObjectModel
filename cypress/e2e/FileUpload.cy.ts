import 'cypress-file-upload'

describe('File Upload operation', () => {
    
    it('Single file upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("example.json");
        cy.get("#file-submit").click();
        cy.get('h3').should('have.text','File Uploaded!')
    });

    it('Single file upload- Rename file name', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath: "example.json",fileName: "vishal.json"});
        cy.get("#file-submit").click();
        cy.get('h3').should('have.text','File Uploaded!')
    });

    it('Drag and drop file', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload").attachFile("example.json",{subjectType:'drag-n-drop'});
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('have.text','example.json')
        
    });

    it('Upload Multiple Files', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(["example.json","Test.png","Test.xlsx"]);
        cy.get('#fileList').contains("example.json")
    });

    it.only('Upload- shadow dom', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile("example.json");
        cy.wait(4000);
        cy.get(".smart-item-name",{includeShadowDom:true}).contains("example.json")
    });
});