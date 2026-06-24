const fs = require('fs');
let html = fs.readFileSync('agent.html', 'utf8');

const regex = /\$\{([\s\S]*?\.map\([\s\S]*?\.join\(''\))\}/g;

html = html.replace(regex, (match, code) => {
    try {
        console.log("Evaluating block...");
        return eval(code);
    } catch(e) {
        console.log("Error evaluating:", e);
        return match;
    }
});

fs.writeFileSync('agent.html', html);
console.log("Done");
