function twoDimensionalTo1D(mat) {
    let output = [];
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat.length; j++) {
        output.push(mat[i][j]);
      }
    }
    return output;
  }
  console.log(
    twoDimensionalTo1D([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  );