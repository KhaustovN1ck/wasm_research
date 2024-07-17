// multiply_matrices.cpp
#include <emscripten.h>

extern "C" {
  EMSCRIPTEN_KEEPALIVE
  void multiply_matrices(const double* a, int a_rows, int a_cols, const double* b, int b_rows, int b_cols, double* result) {
    if (a_cols != b_rows) {
      return; // Number of columns of matrix A must equal number of rows of matrix B.
    }

    for (int i = 0; i < a_rows; ++i) {
      for (int j = 0; j < b_cols; ++j) {
        result[i * b_cols + j] = 0.0;
        for (int k = 0; k < a_cols; ++k) {
          result[i * b_cols + j] += a[i * a_cols + k] * b[k * b_cols + j];
        }
      }
    }
  }
}