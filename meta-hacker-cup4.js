const fs = require('fs');

const inputFile = 'input.txt';
const outputFile = 'output.txt';

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading ${inputFile}: ${err}`);
        return;
    }

    // Split the input data into lines
    const lines = data.trim().split('\n');

    // Parse the first line to get the number of test cases (T)
    const T = parseInt(lines.shift());
    let counter = 1;
    const outputData = [];

    while (lines.length > 0) {
        let n = lines.shift();
        let arr = lines.shift().split(' ').map(Number);
        let result = twoApples(n, arr);
        outputData.push(`Case #${counter}: ${result}`);
        counter++;
    }

    // Write the results to the output file
    fs.writeFile(outputFile, outputData.join('\n'), 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to ${outputFile}: ${err}`);
        } else {
            console.log(`Results have been written to ${outputFile}`);
        }
    });
});


function twoApples(n, arr) {
    arr.sort((x, y) => x - y);
    let diff = [];
    for(let i=1; i < arr.length; i++) {
        let change = a[i] - a[i-1];
        diff.push(change);
    }
    // from 2n-1 elements this gives 2n elements;
    let prefix = [];
    let current = "";
    for(let i=0; i < diff.length; i++) {
        current += diff[i];
        prefix.push(current);
    };
    let suffix = [];
    current = "";
    for(let i=diff.length-1; i >=0; i--) {
        current += diff[i];
        suffix.unshift(current);
    };
    let left = 0, right = diff.length-1;
    let added = 0;
    while(left < right) {
        if(diff[left] === diff[right]) {
            left++;
            right--;
        } else {
            if(added) return -1;

        }
    };
};


// 1 2 3 (4) 5 6 = 4
// 1 1 2 1

// 1 9 1 1 4
// 1 1 1 4 9
//   0 0 3 5

// 1000000000 2 10 4 999999994
// 2 4 10 999999994 1000000000
//   2 6  999999984 6 
