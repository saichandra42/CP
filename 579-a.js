const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = []
 
rl.on('line', (input) => {
    lines.push(input);
});
 
 
rl.on('close', () => {
    for(let line of lines) {
        let result = bacteria(line);
        console.log(result);
    };
})


function bacteria(num) {
    let count = 0;
    while(num > 0) {
        let lsb = num && 1;
        count += lsb;
        num >>= 1;
    };
    return count;
};
