const fs = require('fs');
const path = require('path');

// List of files to fix
const files = [
  'src/components/Contact.tsx',
  'src/components/Experience.tsx', 
  'src/components/Projects.tsx'
];

files.forEach(filePath => {
  console.log(`Fixing ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace theme references
  content = content.replace(/\$\{theme\./g, '${({ theme }) => theme.');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${filePath}`);
});

console.log('All theme references fixed!');
