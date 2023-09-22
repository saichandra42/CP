let i = '';
process.stdin.on('data', c => i += c);
process.stdin.on('end', () => {
    const {EOL} = require('os');
    const input = i.split(EOL);
    const test_cases = Number(input[0]);
    let line = 1;
    for (let i = 0; i < test_cases; i++) {
        const [n, x] = input[line++].trim().split(' ').map(Number);
        const a = input[line++].trim().split(' ').map(Number);
        const res = solve(n, x, a);
        console.log(res);
    }
});


function solve() {

}