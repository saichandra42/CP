let i = '';
process.stdin.on('data', c => i += c);
process.stdin.on('end', () => {
    const {EOL} = require('os');
    const input = i.split(EOL);
    let line = 0;
    const test_cases = Number(input[line++]);

    for (let i = 0; i < test_cases; i++) {
        let n = Number(input[line++].trim());
        let nums = input[line++].trim().split(" ").map(Number);
        let res = solve(nums);
        console.log(res);
    }
});


function solve(nums) {
  let current = 0;
  for(let num of nums) {
    current++;
    if(current === num) current++;
  };
  return current;
};

