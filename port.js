const fs = require('fs');

let html = fs.readFileSync('public_html/index.html', 'utf8');

// Extract the <main> block
const mainStart = html.indexOf('<main>');
const mainEnd = html.indexOf('</main>') + 7;
let mainContent = html.substring(mainStart, mainEnd);

// Convert to JSX
mainContent = mainContent.replace(/class=/g, 'className=');
mainContent = mainContent.replace(/stroke-width=/g, 'strokeWidth=');
mainContent = mainContent.replace(/stroke-linecap=/g, 'strokeLinecap=');
mainContent = mainContent.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
mainContent = mainContent.replace(/for=/g, 'htmlFor=');

// Close img tags
mainContent = mainContent.replace(/<img(.*?)>/g, (match, p1) => {
    if (match.endsWith('/>')) return match;
    return `<img${p1} />`;
});

// Close input tags
mainContent = mainContent.replace(/<input(.*?)>/g, (match, p1) => {
    if (match.endsWith('/>')) return match;
    return `<input${p1} />`;
});

// Close br tags
mainContent = mainContent.replace(/<br>/g, '<br />');

// Close hr tags
mainContent = mainContent.replace(/<hr>/g, '<hr />');

// Convert style strings to objects (simplistic, assumes style="prop: val; prop2: val2;")
mainContent = mainContent.replace(/style="([^"]+)"/g, (match, p1) => {
    let rules = p1.split(';').filter(s => s.trim().length > 0);
    let objStr = rules.map(rule => {
        let [key, val] = rule.split(':');
        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        val = val.trim();
        return `${key}: '${val}'`;
    }).join(', ');
    return `style={{ ${objStr} }}`;
});

// Write to src/app/page.tsx
const pageTsx = `
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const [amount, setAmount] = useState(10000);
    const savings = amount * 0.35;

    return (
        <>
            ${mainContent}
        </>
    );
}
`;

fs.writeFileSync('src/app/page.tsx', pageTsx);
console.log('Done!');
