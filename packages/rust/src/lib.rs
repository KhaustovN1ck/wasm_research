use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[wasm_bindgen]
pub fn multiply_matrices(a: &[f64], a_rows: usize, a_cols: usize, b: &[f64], b_rows: usize, b_cols: usize) -> Vec<f64> {
    if a_cols != b_rows {
        panic!("Number of columns of matrix A must equal number of rows of matrix B.");
    }

    let mut result = vec![0.0; a_rows * b_cols];

    for i in 0..a_rows {
        for j in 0..b_cols {
            for k in 0..a_cols {
                result[i * b_cols + j] += a[i * a_cols + k] * b[k * b_cols + j];
            }
        }
    }

    result
}