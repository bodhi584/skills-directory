const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const xlsx = require('xlsx');
const officeParser = require('office-text-extractor');

// Force use of pdf-parse 1.1.1 (the simple function export version)
// The nested office-text-extractor has 2.4.5 which has a different API
const pdf = require('./node_modules/pdf-parse/lib/pdf-parse.js');

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: node process.js <file_path>");
  process.exit(1);
}

const ext = path.extname(filePath).toLowerCase();

async function processFile() {
  try {
    if (ext === '.pdf') {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdf(dataBuffer);
      console.log(data.text);
    } else if (ext === '.docx') {
      const result = await mammoth.extractRawText({ path: filePath });
      console.log(result.value);
    } else if (ext === '.xlsx' || ext === '.xls') {
      const workbook = xlsx.readFile(filePath);
      let output = "";
      workbook.SheetNames.forEach(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        output += `--- Sheet: ${sheetName} ---\n`;
        output += xlsx.utils.sheet_to_csv(sheet);
        output += "\n\n";
      });
      console.log(output);
    } else if (ext === '.pptx') {
      const text = await officeParser.getText(filePath);
      console.log(text);
    } else {
      console.error(`Unsupported extension: ${ext}`);
      process.exit(1);
    }
  } catch (error) {
    console.error("Error processing file:", error);
    process.exit(1);
  }
}

processFile();
