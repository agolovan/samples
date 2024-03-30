// Given a two-dimensional array, if any element within is zero, make its whole row and column zero. Consider the matrix below.
export const setColumnsAndRows = (matrix: number[][]) => {
    const rows: Set<number> = new Set();
    const cols: Set<number> = new Set();
  
    // Find rows and columns containing zeroes
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
        if (matrix[row][column] === 0) {
          rows.add(row);
          cols.add(column);
        }
      }
    }
  
    // Set rows to zero
    for (let row of rows) {
      for (let column = 0; column < matrix[row].length; column++) {
        matrix[row][column] = 0;
      }
    }
  
    // Set columns to zero
    for (let col of cols) {
      for (let row = 0; row < matrix.length; row++) {
        matrix[row][col] = 0;
      }
    }

    return matrix;
  }
