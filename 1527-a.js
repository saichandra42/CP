let i = '';
process.stdin.on('data', c => i += c);
process.stdin.on('end', () => {
    const {EOL} = require('os');
    const input = i.split(EOL);
    const test_cases = Number(input[0]);
    let line = 1;
    for (let i = 0; i < test_cases; i++) {
        let n = Number(input[line++]);
        let res = solve(n);
        console.log(res);
    }
});

function solve(n) {
    let mask = 1;
    while(n != 1) {
        mask <<= 1 | 1;
        n >>= 1;
    };
    return mask-1;
};


// 2 -> 1
// 5 -> 3
// 17 -> 15

// 1XXXXXXX
// 01111111