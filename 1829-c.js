let i = '';
process.stdin.on('data', c => i += c);
process.stdin.on('end', () => {
    const {EOL} = require('os');
    const input = i.split(EOL);
    let line = 0;
    let t = Number(input[line++]);

    for (let i = 0; i < t; i++) {
        let n = Number(input[line++].trim());
        let data = [];
        for(let j=0; j < n; j++) {
            let [minutes,skills = '00'] = input[line++].trim().split(' ');
            data.push([minutes,skills]);
        };
        let result = solve(data);
        console.log(result);
    }
});

function solve(data) {
    let info = {
        '00': Infinity,
        '11': Infinity,
        '10': Infinity,
        '01': Infinity
    };
    for(let [minutes,skills] of data) {
        info[skills] = Math.min(info[skills],minutes);
    };
    let min_time =  Math.min(info['11'], info['01'] + info['10']);
    return min_time === Infinity ? -1 : min_time;
}