const fs = require('fs');
const path = require('path');

// Try a different approach for this specific version of pdf-parse (2.4.5)
// It seems to export a class or object structure, not a function.
// Let's import the specific CJS entry point if we can find it, or use the 'node' export.

async function main() {
    const filePath = process.argv[2];
    if (!filePath) process.exit(1);

    try {
        // Try to require the node-specific build
        // Based on package.json: "./node": { "require": "./dist/node/cjs/index.cjs" }
        // We can try to require 'pdf-parse/node' if node supports exports resolution
        
        let pdfLib;
        try {
            pdfLib = require('pdf-parse/node');
        } catch (e) {
            // Fallback to main
            pdfLib = require('pdf-parse');
        }

        // Check if we got the default export (common in some CJS/ESM interop)
        const PDF = pdfLib.default || pdfLib;
        
        // In version 2.x+, usage might be new PDF(buffer) or PDF.parse(buffer)?
        // Inspecting keys earlier showed: PDFParse, getException, etc.
        // It might be: const { PDFParse } = require('pdf-parse');
        
        if (pdfLib.PDFParse) {
             const buffer = fs.readFileSync(filePath);
             // Assuming PDFParse is a class or static handler
             // Let's look for a static method or instantiate it.
             // Docs for 2.x suggest: new PDFParse(buffer) or similar? 
             // Actually, looking at the keys again:
             // [ 'PDFParse', 'getException', ... ]
             
             // Let's try to instantiate PDFParse if it's a class
             // Or maybe check if there's a parse function.
             
             // NOTE: standard pdf-parse (1.1.1) was a function. 2.4.5 is a rewrite.
             // We probably want 1.1.1 for simplicity if this is too complex.
             // But let's try to use what we have.
             
             // Try common patterns
             // 1. static parse
             // 2. instance
             
             // Let's just dump the text if we can find it.
             
             // HACK: downgrading to pdf-parse 1.1.1 is safer for this script.
             console.log("detected complex pdf-parse 2.x, recommending downgrade");
             process.exit(100); 
        }
        
    } catch(e) {
        console.error(e);
    }
}

main();
