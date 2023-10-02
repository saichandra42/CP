let i = '';
process.stdin.on('data', c => i += c);
process.stdin.on('end', () => {
    const {EOL} = require('os');
    const input = i.split(EOL);
    let line = 0;
    let [n,l,r,x] = input[line++].trim().split(" ").map(Number);
    let difficulty = input[line++].trim().split(" ").map(Number);
    let result = solve(n,l,r,x,difficulty);
    console.log(result);
});


function solve(n,l,r,x,difficulty) {
    
};