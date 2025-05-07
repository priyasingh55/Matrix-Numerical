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

//======Matrix Creation=========

//1.Create a function that generates an n x n identity matrix (1s on diagonal, 0s elsewhere)
function identityMatrix(n) {
  let output = '';
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      if (i == j) {
        row += '1' + ' ';
      } else {
        row += '0' + ' ';
      }
    }
    output += row + '\n';
  }

  return output;
}

console.log(identityMatrix(6));

//2.Create a function that generates an m x n matrix filled with random numbers

function generateRandomNumberMatrix(n) {
  let output = '';
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      row += Math.random() + '  ';
    }
    output += row + '\n';
  }

  return output;
}
console.log(generateRandomNumberMatrix(2));

// ======= Basic operations===========
// 1.Write a function to add two matrices

function add2Matrix(matrix1, matrix2) {
  let output = [];
  for (let i = 0; i < matrix1.length; i++) {
    output[i] = [];
    for (let j = 0; j < matrix2.length; j++) {
      output[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return output;
}
let m1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let m2 = [
  [3, 2, 1],
  [7, 6, 5],
  [4, 8, 9],
];
const sum = add2Matrix(m1, m2);
console.log(sum);

//2.Write a function to multiply a matrix by a scalar value
function scalarMultiplication(n) {
  let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let output = '';
  for (let i = 0; i < mat.length; i++) {
    let row = '';
    for (let j = 0; j < mat.length; j++) {
      row += mat[i][j] * n + ' ';
    }
    output += row + '\n';
  }
  return output;
}

console.log(scalarMultiplication(5));
console.log(scalarMultiplication(10));

//3.Write a function to check if two matrices are equal
function matricesEqual(matrix1, matrix2) {
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      if (matrix1[i][j] !== matrix2[i][j]) {
        return `Both matrix are not equal`;
      }
    }
  }

  return `Both matrix are equal`;
}
console.log(
  matricesEqual(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [1, 5],
      [3, 4],
    ]
  )
);
console.log(
  matricesEqual(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [1, 2],
      [3, 4],
    ]
  )
);

//=========== Simple Traversals============

// 1.Find the sum of all elements in a matrix

function sumOfAllElementInMatrix(mat) {
  console.log(mat);

  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      sum += mat[i][j];
    }
  }

  return sum;
}

console.log(
  sumOfAllElementInMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// 2.Find the maximum value in a matrix
function findMaxValue(mat) {
  let n = mat.length;

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] > max) {
        max = mat[i][j];
      }
    }
  }
  return max;
}
console.log(
  findMaxValue([
    [1, 2, 3],
    [6, 5, 4],
    [9, 8, 6],
  ])
);

// 3.Count how many even numbers are in a matrix
function countEven(mat) {
  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (mat[i][j] % 2 == 0) {
        count++;
      }
    }
  }
  return count;
}
console.log(
  countEven([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// 4.Create a function that returns the sum of a specific row or column

//=========Intermediate Level================
// ======Matrix Operations==============
// Write a function to multiply two matrices
function multiply2Matrix(matrix1, matrix2) {
  let output = [];
  for (let i = 0; i < matrix1.length; i++) {
    output[i] = [];
    for (let j = 0; j < matrix2.length; j++) {
      output[i][j] = matrix1[i][j] * matrix2[i][j];
    }
  }
  return output;
}
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let b = [
  [3, 2, 1],
  [7, 6, 5],
  [4, 8, 9],
];
const multiply = multiply2Matrix(a, b);
console.log(multiply);

function arrayMatrixIntoString(A) {
  let output = '';
  for (let i = 0; i < A.length; i++) {
    let row = '';
    for (let j = 0; j < A[i].length; j++) {
      row += A[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(
  'multiplication of two matrix:\n' +
    arrayMatrixIntoString(multiply2Matrix(a, b))
);
console.log(
  'addition of two matrix:\n' + arrayMatrixIntoString(add2Matrix(m1, m2))
);

//2. Implement matrix transposition
function matrixTransposition(mat) {
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  return mat;
}

console.log(
  'Matrix for Transpose+\n',
  arrayMatrixIntoString(
    matrixTransposition([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  )
);
console.log(
  'transpose of  matrix:\n' +
    arrayMatrixIntoString(
      matrixTransposition([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    )
);

// 3.Write a function to check if a matrix is symmetric
function symmetricMatrix(mat) {
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == mat[j][i]) {
        return true + `, This is a symmetric matrix`;
      }
    }
  }
  return false + `, This is not a symmetric matrix`;
}

console.log(
  symmetricMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  symmetricMatrix([
    [1, 2, 3],
    [2, 5, 8],
    [3, 8, 9],
  ])
);

// 4.Implement a function to calculate the trace of a matrix (sum of diagonal elements)
function findTrace(mat) {
  let n = mat.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
  }
  return sum;
}
console.log(
  findTrace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// ====Transformations=========
//1.Rotate a matrix 90 degrees clockwise
function matrix90Clockwise(mat) {
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

console.log(
  'Matrix for 90deg clockwise rotate :\n' +
    arrayMatrixIntoString([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
);
console.log(
  '90deg clockwise rotate of  matrix:\n' +
    arrayMatrixIntoString(
      matrix90Clockwise([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    )
);

// 3.Rotate a matrix 180 degrees
function matrix180Clockwise(mat) {
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

console.log(
  'Matrix for 180 deg clockwise rotate :\n' +
    arrayMatrixIntoString([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
);
console.log(
  '180 deg clockwise rotate of  matrix:\n' +
    arrayMatrixIntoString(
      matrix180Clockwise([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    )
);

// 4.Flip a matrix horizontally or vertically
function flipHorizontal(mat) {
  let n = mat.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    mat[i].reverse();
  }
  return mat;
}
console.log(
  flipHorizontal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  'flip horizontally of  matrix:\n' +
    arrayMatrixIntoString(
      flipHorizontal([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    )
);

// 5.Write a function to zero out the entire row and column if an element is 0
function zeroMatrix(n) {
  let output = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      output += 0 + ' ';
    }
    output += '\n';
  }
  return output;
}
console.log(zeroMatrix(5));

// =====Traversal Patterns=============
// 1.Print a matrix in spiral order

// 2.Print a matrix in diagonal zig-zag pattern

// 3.Print all elements in wave form (alternating up-down rows)

//4. Find all elements that are larger than all their adjacent neighbors
console.log('priya');

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
    for (let i = 0; i < mat.length; i++) {
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

// 1.Print a matrix in spiral order
// input [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ],
// output==> 1 2 3 6 9 8 7 4 5
//let top=0;
//let bottom=n-1;
//let left=0;
// let right=n-1
//for(let left=0;left<right;left++){

// }

// 3.Print all elements in wave form (alternating up-down rows)
// function waveForm(mat){

// }

function rowFlip(mat) {
  console.log(mat);
}
console.log(
  rowFlip([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
