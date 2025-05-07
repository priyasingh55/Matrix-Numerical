function transpose(mat) {
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  return mat;
}
console.log(
  transpose([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

function rotate90Deg(mat) {
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  for (let i = 0; i < mat.length; i++) {
    mat[i].reverse();
  }
  return mat;
}

let A = rotate90Deg([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
console.log('90 degree rotate of a matrix:\n');
console.log(A);

function rotate180Deg(mat) {
  mat = rotate90Deg([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]);

  let n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    mat[i].reverse();
  }
  return mat;
}
console.log('180 degree rotate of a matrix');
console.log(rotate180Deg());

//rotate matrix by k times
function rotateMatrixKTimes(mat, k) {
  let n = mat.length;
  k = k % 4;
  while (k) {
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      }
    }
    for (let i = 0; i < n; i++) {
      mat[i].reverse();
    }
    k--;
  }

  return mat;
}

console.log(
  rotateMatrixKTimes(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    2
  )
);

console.log(
  rotateMatrixKTimes(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    7
  )
);
console.log(
  rotateMatrixKTimes(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    3
  )
);

//row flip
function rowFlip(mat) {
  let output = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  for (let i = 0; i < mat.length; i++) {
    mat[i].reverse();
  }
  return mat;
}
console.log('Row flip');
console.log(
  rowFlip([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

//flip column
function columnFlip(mat) {
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      [mat[j][i], mat[i][j]] = [mat[i][j], mat[j][i]];
    }
  }
  for (let i = mat.length - 1; i >= 0; i--) {
    mat[i].reverse();
  }
  return mat;
}
console.log('column flip');
console.log(
  columnFlip([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

//zig zig
function zigZig(mat) {
  let output = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      output += mat[i][j] + ' ';
    }
    output += '\n';
  }
  return output;
}
console.log(
  zigZig([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

//zag zag
function zagZag(mat) {
  let output = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = mat.length - 1; j >= 0; j--) {
      output += mat[i][j] + ' ';
    }
    output += '\n';
  }
  return output;
}
console.log(
  zagZag([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
