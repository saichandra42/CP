const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const lines = []
 
rl.on('line', (input) => {
    lines.push(input);
});
 
 
rl.on('close', () => {
    let l = 0;
    let t = +lines[l++];
    for (let i = 0; i < t; i++) {
        const s = lines[l++].trim()
        let output = solve(s);
        console.log(output);
    }
})
 
function solve(s) {
  let values = s.split("B").map(a => a.length);
  return values.reduce((acc,current) => acc+current,0) - (Math.min(...values));
};