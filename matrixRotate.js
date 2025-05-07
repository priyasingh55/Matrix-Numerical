console.log('File for matrix rotation 90deg, 180deg, 270deg,360deg');
//90 degree
function rotate90deg(mat) {
  let n = mat.length;
  let output = '';
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = n - 1; j >= 0; j--) {
      row += mat[j][i] + ' ';
      console.log(row);
    }
    output += row + '\n';
  }
  return output;
}
console.log(
  '90 degree rotated matrix:\n',
  rotate90deg([
    [2, 7, 2],
    [6, 9, 5],
    [7, 1, 8],
  ])
);
//180 degree
function rotate180deg(mat) {
  let n = mat.length;
  let output = '';
  for (let i = n - 1; i >= 0; i--) {
    let row = '';
    for (let j = n - 1; j >= 0; j--) {
      row += mat[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(
  '180 degree rotated matrix:\n',
  rotate180deg([
    [2, 7, 2],
    [6, 9, 5],
    [7, 1, 8],
  ])
);

//270 degree
function rotate270deg(mat) {
  let n = mat.length;
  let output = '';
  for (let j = n - 1; j >= 0; j--) {
    let row = '';
    for (let i = 0; i < n; i++) {
      row += mat[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(
  '270 degree rotated matrix:\n',
  rotate270deg([
    [2, 7, 2],
    [6, 9, 5],
    [7, 1, 8],
  ])
);

//360 degree

function rotate360deg(mat) {
  let n = mat.length;
  let output = '';
  for (let j = 0; j < n; j++) {
    let row = '';
    for (let i = 0; i < n; i++) {
      row += mat[j][i] + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(
  '360 degree rotated matrix:\n',
  rotate360deg([
    [2, 7, 2],
    [6, 9, 5],
    [7, 1, 8],
  ])
);

//
// function add(x) {
//   return ((x ^ x) + Math.sqrt(x + x));
// }
// console.log(add(4));

function square(x) {
  return x * x;
}

function squareAddNTimes(n, num) {
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = square(num);
    sum = sum + ans;
    num = ans;
    console.log('1', num);
  }
  console.log('hiii', sum);
  return sum;
}
console.log('priya', squareAddNTimes(2, 2));
console.log(squareAddNTimes(3, 3));
console.log(squareAddNTimes(4, 4));
