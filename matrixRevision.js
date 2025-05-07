console.log('Matrix Revision Here!');
//matrix in array format
function arrayMatrix(n) {
  let output = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push([i, j]);
    }
    output.push(row);
  }
  return output;
}
console.log(arrayMatrix(5));

//matris in string format
function stringMatrix(mat = arrayMatrix(5)) {
  console.log(mat);
  let output = '';
  for (let i = 0; i < mat.length; i++) {
    let row = '';
    for (let j = 0; j < mat.length; j++) {
      row += mat[i][j].join('') + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(stringMatrix());

//string matrix for single value
function stringMatrix2(mat = arrayMatrix(5)) {
  console.log(mat);
  let output = '';
  for (let i = 0; i < mat.length; i++) {
    let row = '';
    for (let j = 0; j < mat.length; j++) {
      row += mat[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(stringMatrix2());
//matrix element-index multiplication
function indexMultiplication(mat = arrayMatrix(5)) {
  console.log(mat);
  let output = [];
  for (let i = 0; i < mat.length; i++) {
    let row = [];
    for (let j = 0; j < mat.length; j++) {
      row.push(i * j);
    }
    output.push(row);
  }
  return output;
}
console.log(indexMultiplication());
console.log(
  'index multiplication output here:\n',
  stringMatrix2(indexMultiplication())
);

//matrix element-index addition
function indexAddition(mat = arrayMatrix(5)) {
  console.log(mat);
  let output = [];
  for (let i = 0; i < mat.length; i++) {
    let row = [];
    for (let j = 0; j < mat.length; j++) {
      row.push(i + j);
    }
    output.push(row);
  }
  return output;
}
console.log(indexAddition());
console.log('index addition output here:\n', stringMatrix2(indexAddition()));

//double
function double(n) {
  return 2 * n;
}
console.log('it gives double of the input value:', double(5));
let a = Math.random();
console.log(a, double(a));

let b = Math.random();
console.log(b, double(b));

//matrix for generating any size matrix by giving input
function inputMatrix(n) {
  let output = '';
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row += i + '' + j + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(inputMatrix(5));
console.log(inputMatrix(8));
console.log(inputMatrix(10));

//string
let x = 'abc';
console.log(x, x.length);
//for string
function strLengthSqrt(str) {
  let n = Math.sqrt(str.length);
  return n;
}
console.log(strLengthSqrt('priy'));
console.log('vishal', strLengthSqrt('vishal'));
console.log('abcdefghi', strLengthSqrt('abcdefghi'));

//for array
function arrayLengthSqrt(arr) {
  let n = Math.sqrt(arr.length);
  return n;
}
console.log(arrayLengthSqrt('priy'));
console.log(['vishal'], arrayLengthSqrt('vishal'));
console.log(['abcdefghi'], arrayLengthSqrt('abcdefghi'));

//matrix size
// let m = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(m.length);

//size of matrix

function matrixLength(
  mat = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7],
    [6, 7, 8, 9, 10],
  ]
) {
  let m = mat[0].length;
  let n = mat.length;
  return `size of n==>row is: ${n} and size of m==>column is: ${m}`;
}
console.log(matrixLength());

//matrix that is used to convert array matrix into string

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
let p = [
  [1, 2, 3, 4],
  [4, 5, 6, 6],
  [7, 8, 9, 8],
];
console.log(arrayMatrixIntoString(p));
console.log(matrixLength(p));

let C = [
  [1, 2, 3, 6],
  [4, 5, 6, 8],
  [7, 8, 9, 10],
];

console.log(arrayMatrixIntoString(C));
console.log(matrixLength(C));

let M3 = [
  [1, 2],
  [4, 5],
  [7, 8],
];

console.log(arrayMatrixIntoString(M3));
console.log(matrixLength(M3));

let B = [
  [1, 2, 3, 4],
  [3, 4, 5, 6],
  [6, 7, 8, 9],
  [10, 11, 12, 13],
];
console.log(arrayMatrixIntoString(B));
console.log(matrixLength(B));

let M2 = [
  [1, 2, 3, 0, 20, -1],
  [4, 5, 6, 0, 30, -2],
  [7, 8, 9, 0, 10, -3],
  [1, 0, 1, 0, 21, -4],
];

console.log(arrayMatrixIntoString(M2));
console.log(matrixLength(M2));
