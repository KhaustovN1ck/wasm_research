const fs = require('fs');
const path = require('path');
const { fibonacci: fibonacciRust } = require('../packages/rust/pkg');
const { fibonacci: fibonacciJS } = require('../packages/js/fibonacci');
const Module = require('../packages/cpp/wasm_cpp.js');

// Needed only for the C/C++ implementation - initialize wasm, load the module and provide the binary.
// Rust implementation is already initialized and loaded, just this way:
// const { fibonacci: fibonacciRust } = require('../packages/rust/pkg');
// console.log(fibonacciRust(10));

(async () => {
    // Initialize the Emscripten module
    const wasmModule = await Module({
        wasmBinary: fs.readFileSync(path.resolve(__dirname, '../packages/cpp/wasm_cpp.wasm'))
    });

    const { _fibonacci } = wasmModule;

    const NUMBER_OF_EXPERIMENTS = 5;
    const NUMBERS_OF_RECORDS = [10, 20, 40];

    NUMBERS_OF_RECORDS.forEach((numberOfRecords) => {
        for (let i = 0; i < NUMBER_OF_EXPERIMENTS; i++) {
            const experimentNumber = i + 1;
            console.log('\n\nStarting test #' + experimentNumber + ' JS Fibonacci implementation...\n\n');

            console.time(`[JS | Fibonacci | ${numberOfRecords} records]`);
            console.log(fibonacciJS(numberOfRecords));
            console.timeEnd(`[JS | Fibonacci | ${numberOfRecords} records]`);

            console.log('\n\nStarting test #' + experimentNumber + ' for Rust Fibonacci implementation...\n\n');
            console.time(`[Rust | Fibonacci | ${numberOfRecords} records]`);
            console.log(fibonacciRust(numberOfRecords));
            console.timeEnd(`[Rust | Fibonacci | ${numberOfRecords} records]`);

            console.log('\n\nStarting test #' + experimentNumber + ' for C/C++ Fibonacci implementation...\n\n');
            console.time(`[C/C++ | Fibonacci | ${numberOfRecords} records]`);
            console.log(_fibonacci(numberOfRecords));  // Use _fibonacci from the Emscripten module
            console.timeEnd(`[C/C++ | Fibonacci | ${numberOfRecords} records]`);
        }
    });
})();