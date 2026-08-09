const fs = require('fs');
let p = fs.readFileSync('src/app/page.tsx', 'utf8');

p = p.replace(/<span id="spend-value">.*?<\/span>/, '<span>{amount.toLocaleString("en-IN")}</span>');
p = p.replace(/<input type="range" id="spend-slider" min="5000" max="100000" step="1000" value="10000" \/>/, '<input type="range" id="spend-slider" min="5000" max="100000" step="1000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />');
p = p.replace(/<span id="savings-value">.*?<\/span>/, '<span>{savings.toLocaleString("en-IN")}</span>');

// Also update the anchor tags to use Link, but for now we won't do full AST, let's just do a simple replacement for href inside <a>
p = p.replace(/<a href/g, '<Link href');
p = p.replace(/<\/a>/g, '<\/Link>');

fs.writeFileSync('src/app/page.tsx', p);
console.log('Fixed page.tsx');
