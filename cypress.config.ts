import { defineConfig } from "cypress";
import * as XLSX from 'xlsx';

export default defineConfig({
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on("task",{
      //   convertXlsxToJson(filePath){
      //     const workbook = XLSX.readFile(filePath);
      //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      //     const jsonData = XLSX.utils.sheet_to_json(worksheet);
      //     //return jsonData;

      //     //const fileName = path.basename(filePath,'.xlsx');
      //   }
      // })
     // require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});

