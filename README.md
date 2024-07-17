# Web Assembly performance test

## Overview
This is a simple test to compare the performance of Web Assembly and JavaScript. The test is based on the following tasks:

* Task 1: Fibonacci Sequence Calculation. Research may be found [here](./task1/RESULTS.md)
* Task 2: Matrix Multiplication. WIP.

## Rust and C++ Installation

### Rust
1. Install Rust & Cargo locally (https://doc.rust-lang.org/cargo/getting-started/installation.html)
2. Open  `./packages/rust` and run `wasm-pack build --target nodejs`
3. Rust package is good to go! Import it from JS and have fun!

### C++
1. Install Emscripten (https://emscripten.org/docs/getting_started/downloads.html)
2. Open `./packges/cpp` and run: `emcc -O3 -s WASM=1 -s MODULARIZE=1 -s 'EXPORT_NAME="createModule"' -s EXPORTED_FUNCTIONS="['_fibonacci', '_multiply_matrices']" -o wasm_cpp.js fibonacci.cpp multiply_matrices.cpp`
3. C++ package is good to go! Import it from JS and have fun!

