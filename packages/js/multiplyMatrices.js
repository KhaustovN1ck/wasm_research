function multiplyMatrices(a, b) {
    const aRows = a.length;
    const aCols = a[0].length;
    const bRows = b.length;
    const bCols = b[0].length;

    if (aCols !== bRows) {
        throw new Error('Number of columns of matrix A must equal number of rows of matrix B.');
    }

    const result = Array.from({ length: aRows }, () => Array(bCols).fill(0));

    for (let i = 0; i < aRows; i++) {
        for (let j = 0; j < bCols; j++) {
            for (let k = 0; k < aCols; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}

module.exports = {
    multiplyMatrices
}