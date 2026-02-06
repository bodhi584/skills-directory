# Office Wizard Skill

This skill allows the agent to read content from office documents and PDFs.

## Tools

### read_document
Read text content from PDF, DOCX, XLSX, and PPTX files.

**Parameters:**
- `file_path`: Path to the document file (relative to workspace).

**Implementation:**
run:
  engine: node
  path: ../../tools/office-wizard/process.js
  args:
    - "{{file_path}}"
