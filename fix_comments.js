const fs = require('fs');
let p = fs.readFileSync('src/app/page.tsx', 'utf8');

// Convert HTML comments <!-- comment --> to JSX comments {/* comment */}
p = p.replace(/<!--(.*?)-->/g, '{/*$1*/}');

fs.writeFileSync('src/app/page.tsx', p);
console.log('Fixed JSX comments');
