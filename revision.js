console.log('Revision here!');

function matrixInArrayFormat(n) {
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
console.log(matrixInArrayFormat(4));

function matrixElementMultiplication(matrix = matrixInArrayFormat(4)) {
  // console.log(matrix);
  let output = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(i * j);
    }
    output.push(row);
  }
  // console.log(output);
  return output;
}
matrixElementMultiplication();

function matrixElementAddition(matrix = matrixInArrayFormat(4)) {
  // console.log(matrix);
  let output = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(i + j);
    }
    output.push(row);
  }
  // console.log(output);
  return output;
}
matrixElementAddition();

function matrixInStringFormat1(mat) {
  mat = matrixInArrayFormat(4);
  console.log(mat);
  let output = [];
  for (let i = 0; i < mat.length; i++) {
    let row = [];
    for (let j = 0; j < mat.length; j++) {
      row += mat[i][j].join('') + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log('Array Output:\n', matrixInStringFormat1());

function matrixInStringFormat2(mat) {
  console.log(mat);

  let output = [];
  for (let i = 0; i < mat.length; i++) {
    let row = [];
    for (let j = 0; j < mat.length; j++) {
      row += mat[i][j] + ' ';
      // row += mat[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(
  'element multiplication:\n' +
    matrixInStringFormat2(matrixElementMultiplication())
);

console.log(
  'element addition:\n' + matrixInStringFormat2(matrixElementAddition())
);

function double(n) {
  return 2 * n;
}
console.log(double(4));

let a = Math.random();
console.log(a, double(a));
let b = Math.random();
console.log(b, double(b));

function resultantMatrix(n) {
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
console.log(resultantMatrix(5));

let x = 6;
console.log(resultantMatrix(x));
let y = 10;
console.log(resultantMatrix(y));

let str = 'abc';
console.log(str, str.length);

function squareRoot(arr) {
  let n = Math.sqrt(arr.length);

  return n;
}
console.log(['priy'], squareRoot('priy'));
console.log(['vishalooo'], squareRoot('vishalooo'));

// let m = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [6, 7, 8],
// ];
// console.log(m.length);

function matrixLength(
  mat = [
    [1, 2, 3, 4],
    [3, 4, 5, 6],
    [6, 7, 8, 9],
  ]
) {
  let m = mat.length;
  let n = mat[0].length;

  console.log('size of array element m:' + m);
  console.log('size of array element of element n:' + n);
  return `size of n:` + n;
}
matrixLength();
// console.log(matrixLength());

let A = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(A);
function stringConversion(mat = A) {
  let output = [];
  for (let i = 0; i < mat.length; i++) {
    let row = [];
    for (let j = 0; j < mat.length; j++) {
      row += mat[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(stringConversion(A));
console.log(matrixLength(A));
let B = [
  [1, 2, 3, 4],
  [3, 4, 5, 6],
  [6, 7, 8, 9],
  [10, 11, 12, 13],
];
console.log(stringConversion(B));
console.log(matrixLength(B));

let C = [
  [1, 2],
  [3, 4],
];
console.log(stringConversion(C));
console.log(matrixLength(C));
