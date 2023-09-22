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
    const T = parseInt(lines[0]);

    // Process each test case
    const outputData = [];
    for (let i = 1; i <= T; i++) {
        const [r,c,a,b] = lines[i].split(' ').map(Number);

        // Perform some operation with S, D, and K (for example, calculate a result)
        const result = dimSumDelivery(r,c,a,b)

        // Store the result for this test case in the outputData array
        outputData.push(`Case #${i}: ${result}`);
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

// r = rows labelled from 1 to r
// c = columns labelled from 1 to c
// alice = 1 to a units down
// bob = 1 to b units right

// alice pushes first
// does alice have a winning strategy ? Yes/No

function dimSumDelivery(r,c,a,b) {
    return r > c ? "YES" : "NO";
};


