let i = '';
process.stdin.on('data', c => i += c);
process.stdin.on('end', () => {
    const {EOL} = require('os');
    const input = i.split(EOL); 
    const tc = +input[0];
    let line = 1;
    for(i=0; i<tc; i++) {
        const n = Number(input[line++]);
        const arr = input[line++].trim().split(' ').map(Number);
        const [l, r] = replaceWithProduct(n, arr);
        console.log(l, r);
    }
});


function replaceWithProduct(n,arr) {

};