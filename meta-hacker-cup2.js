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
        const [S, D, K] = lines[i].split(' ').map(Number);

        // Perform some operation with S, D, and K (for example, calculate a result)
        const result = chesseburger(S, D, K)

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


function chesseburger(a,b,c) {
    
};



