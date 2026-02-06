const fs = require('fs');
const path = require('path');

// Assuming we are in a CJS environment and pdf-parse is installed.
// The previous errors suggest require('pdf-parse') returns a Module namespace object with named exports but no default function.
// However, the standard `pdf-parse` package exports a function.
// This implies we might have installed a weird version or the environment is treating CJS as ESM.
// Let's try to find the actual library file and require it directly.

const filePath = process.argv[2];
if (!filePath) process.exit(1);

async function main() {
    try {
        // Try importing the raw index.js from node_modules if possible
        const pdfParsePath = require.resolve('pdf-parse');
        // console.log('Resolved pdf-parse:', pdfParsePath);
        
        // Force require
        const pdf = require(pdfParsePath);
        
        if (typeof pdf !== 'function') {
            // console.error('Still not a function:', typeof pdf, Object.keys(pdf));
            // Let's look for a default export
            if (pdf.default && typeof pdf.default === 'function') {
                run(pdf.default);
            } else {
               throw new Error('pdf-parse broken');
            }
        } else {
            run(pdf);
        }
        
    } catch(e) {
        console.error(e);
    }
}

async function run(pdfFunc) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfFunc(dataBuffer);
    console.log(data.text);
}

main();
