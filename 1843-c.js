let i = '';
process.stdin.on('data', c => i += c);
process.stdin.on('end', () => {
    const {EOL} = require('os');
    const input = i.split(EOL);
    let line = 0;
    let t = Number(input[line++]);
    for (let i = 0; i < t; i++) {
        let n = BigInt(input[line++].trim());
        let result = solve(n);
        console.log(result);
    }
});

function solve(n) {
    let result = 0n;
    while(n > 0) {
        result += n;
        n >>= 1n;
    };
    return result.toString();
}
