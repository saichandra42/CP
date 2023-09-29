let i = '';
process.stdin.on('data', c => i += c);
process.stdin.on('end', () => {
    const {EOL} = require('os');
    const input = i.split(EOL);
    let line = 0;
    const test_cases = Number(input[line++]);
    for (let i = 0; i < test_cases; i++) {
        let [n,m] = input[line++].trim().split(' ');
        let a = input[line++].trim().split(' ').map(Number);
        let b = input[line++].trim().split(' ').map(Number);
        let [min,max] = solve(n,m,a,b);
        console.log(`${min} ${max}`);
    }
});


function solve(n,m,a,b) {
    let xor = a.reduce((acc,current) => acc ^ current,0);
    let or = b.reduce((acc,current) => acc | current,0);
    let all = a.reduce((acc,current) => acc ^ (current | or),0);
    return (n & 1) ? [xor, all]: [all,xor]; 
};

