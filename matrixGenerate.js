//task 1 write fn to generate matrix of n*n order ( i j )
//task 2 write fn to generate matrix of n*n order ( incremental )
//task 3 write fn to log the matrix ( i j ) in readable format
//task 4 write fn to log the matrix ( incremental ) in readable format
//task 5 write fn for row-sum
//task 5.1 generate a matrix ( inc )
//task 5.2 write fn for row-sum
//task 5.3 use generated matrix ( atleast 2 ) in row-sum fn to calculate row-sum
//task 5.4 print generated matrix using fn from task-4 and print calculated row-sum in next line
//task 6 same as task 5 : column-sum
//task 7 row-reverse :
//task 7.1 generate a matrix ( incremental )
//task 7.2 write fn for row-reverse
//task 7.3 use generated matrix ( atlead 2 ) in row-reverse fn and find row-reverse
//task 7.4 print generated matrix using fn from task 4 and print row-reverse in readable format in next line.
//task 8 col-reverse : same as task 7
//task 9 col-as-row : same as task 7
//task 10 rotate matrix : same as task 7

// for 9, 10 also use task 1's generated matrix to represent transpose and rotation

//task 1
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

console.log('Generate matrix in array format: \n', arrayMatrix(5));

//Array to string
function stringMatrix(mat = arrayMatrix(5)) {
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
console.log(stringMatrix());

//task 2
function generateIncMatrixInArray(n) {
  let count = 1;
  let output = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(count++);
    }
    output.push(row);
  }
  return output;
}

{
  let p = generateIncMatrixInArray(3);
  console.log(stringMatrix(p));
}

const randomgenerator = (min, max) => {
  return ~~(Math.random() * max) + min;
};

function generateRandomMatrixInArray(n) {
  let output = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) row.push(randomgenerator(1, 9));
    output.push(row);
  }
  return output;
}

console.log(111, generateRandomMatrixInArray(3));
{
  let p = generateRandomMatrixInArray(3);
  console.log(stringMatrix(p));
}

console.log(
  'Generate incremented matrix in array format:\n ',
  generateIncMatrixInArray(5)
);
console.log(
  'Generate incremented matrix in array format:\n ',
  generateRandomMatrixInArray(5)
);

//task 3
function printMatrixInString(mat) {
  let output = '';
  for (let i = 0; i < mat.length; i++) {
    let row = '';
    for (let j = 0; j < mat[i].length; j++) {
      row += mat[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}

{
  let p = generateRandomMatrixInArray(3);
  console.log('Matrix in readable format: \n' + printMatrixInString(p));

  let q = generateRandomMatrixInArray(5);
  console.log('Matrix in readable format: \n' + printMatrixInString(q));
}
console.log();

//task  4 Inc matrix in readable format
function numberMatrixIntoString(mat) {
  let output = '';
  for (let i = 0; i < mat.length; i++) {
    let row = '';
    for (let j = 0; j < mat[i].length; j++) {
      row += mat[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}

{
  let n = generateRandomMatrixInArray(4);
  console.log(`The matrix`, n);
  let z = numberMatrixIntoString(n);
  console.log(`The readable format:\n`, z);

  let m = generateRandomMatrixInArray(6);
  console.log(`The matrix`, m);
  let y = numberMatrixIntoString(m);
  console.log(`The readable format:\n`, y);
}

//task 5 find row-sum
function findRowSum(v) {
  let ans = '';
  for (let i = 0; i < v.length; i++) {
    let sum = 0;
    for (let j = 0; j < v.length; j++) {
      sum += v[i][j];
    }

    ans += sum + ' ';
  }
  return ans;
}

{
  //example
  let m = generateRandomMatrixInArray(6);
  let k = printMatrixInString(m);
  console.log('The matrix: \n', k);

  console.log('Row sum: ', findRowSum(m));

  //example 2
  let n = generateRandomMatrixInArray(4);
  let l = printMatrixInString(n);
  console.log('The matrix: \n', l);

  console.log('Row sum: ', findRowSum(n));
}

// 6. find col sum
function findColumnSum(v) {
  let ans = [];
  for (let i = 0; i < v.length; i++) {
    let sum = 0;
    for (let j = v.length - 1; j >= 0; j--) {
      sum += v[j][i];
    }
    ans += sum + ' ';
  }

  return ans;
}

{
  //example
  let m = generateRandomMatrixInArray(6);
  let k = printMatrixInString(m);
  console.log('The matrix: \n', k);

  console.log('Column sum: ', findColumnSum(m));

  //example 2
  let n = generateRandomMatrixInArray(4);
  let l = printMatrixInString(n);
  console.log('The matrix: \n', l);

  console.log('Column sum: ', findColumnSum(n));
}

//7.Row-reverse
function findRowReverse(v) {
  let ans = '';
  for (let i = 0; i <= v.length - 1; i++) {
    let output = '';
    for (let j = v.length - 1; j >= 0; j--) {
      output += v[i][j] + ' ';
    }
    ans += output + '\n';
  }

  return ans;
}

{
  //example
  let m = generateRandomMatrixInArray(6);
  let k = printMatrixInString(m);
  console.log('The matrix: \n', k);

  console.log('row reverse: \n', findRowReverse(m));

  //example 2
  let n = generateRandomMatrixInArray(4);
  let l = printMatrixInString(n);
  console.log('The matrix: \n', l);

  console.log('Row reverse: \n', findRowReverse(n));
}

//8. column reverse
function findColumnReverse(v) {
  let ans = '';
  for (let i = 0; i < v.length; i++) {
    let output = '';
    for (let j = v.length - 1; j >= 0; j--) {
      output += v[j][i] + ' ';
    }
    ans += output + '\n';
  }

  return ans;
}
{
  //example
  let m = generateRandomMatrixInArray(6);
  let k = printMatrixInString(m);
  console.log('The matrix: \n', k);

  console.log('Column reverse: \n', findColumnReverse(m));

  //example 2
  let n = generateRandomMatrixInArray(4);
  let l = printMatrixInString(n);
  console.log('The matrix: \n', l);

  console.log('Column reverse: \n', findColumnReverse(n));
}

// 9. row-as-col
function matrixTransposition(mat) {
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [mat[j][i], mat[i][j]] = [mat[i][j], mat[j][i]];
    }
  }
  return mat;
}
{
  //example
  let m = generateRandomMatrixInArray(6);
  let k = printMatrixInString(m);
  console.log('The matrix: \n', k);
  let a = matrixTransposition(m);

  console.log('row-as-column : \n', printMatrixInString(a));

  //example 2
  let n = generateRandomMatrixInArray(4);
  let l = printMatrixInString(n);
  console.log('The matrix: \n', l);
  let b = matrixTransposition(n);
  console.log('row-as-column: \n', printMatrixInString(b));
}
//10. col as row
function matrixTranspositionByCol(mat) {
  let n = mat.length;

  for (let i = n; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  return mat;
}
{
  //example
  let m = generateRandomMatrixInArray(6);
  let k = printMatrixInString(m);
  console.log('The matrix: \n', k);
  let a = matrixTranspositionByCol(m);
  console.log('column-as-row : \n', printMatrixInString(a));

  //example 2
  let n = generateRandomMatrixInArray(4);
  let l = printMatrixInString(n);
  console.log('The matrix: \n', l);
  let b = matrixTranspositionByCol(n);
  console.log('column-as-row: \n', printMatrixInString(b));
}
//11. matrix rotation
// function matrixRotation(mat) {

// }
// {
//   let m = generateRandomMatrixInArray(5);
//   let n = printMatrixInString(m);
//   console.log(`The matrix:\n`, n);
//   let p = matrixRotation(n);
//   console.log(`matrix after rotation:\n`, printMatrixInString(p));
// }

function createMatrix(n) {
  let output = '';

  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += i + '' + j + ' ';
    }
    output += row + '\n';
  }
  return output;
}

console.log(createMatrix(3));
let rotated = [
  ['20', '10', ' 00'],
  ['21', '11', '01'],
  ['22', '12', '02'],
];

function createMatrixByMatrix(mat) {
  let output = '';
  let n = mat.length;
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += mat[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}

console.log(createMatrixByMatrix(rotated));

//matrix rotation by k times
// function rotateMatrixKTimes(mat, k) {
//   let n = mat.length;
//   let output = '';
//   k = k % 4;
//   console.log(k);

//   for (let j = 0; j < n; j++) {
//     let row = '';
//     for (let i = n - 1; i >= 0; i--) {
//       row += mat[i][j] + ' ';
//     }
//     output += row + '\n';
//   }

//   return output;
// }
// // //for debug
// console.log(
//   'for debug \n',
//   rotateMatrixKTimes(
//     [
//       [1, 2],
//       [3, 4],
//     ],
//     3
//   )
// );

// for debugging
console.log('The matrix \n', createMatrix(3));
{
  let rotated = [
    ['20', '10', ' 00'],
    ['21', '11', '01'],
    ['22', '12', '02'],
  ];
  let rotated2 = [
    ['22', '21', ' 20'],
    ['12', '11', '10'],
    ['02', '01', '00'],
  ];
  console.log('first time rotate \n', createMatrixByMatrix(rotated));
  console.log('second time rotate \n', createMatrixByMatrix(rotated2));
}

//180 degree rotate
function matrixRotate180(mat) {
  let n = mat.length;
  let output = '';
  for (let j = 0; j < n; j++) {
    let row = '';
    for (let i = n - 1; i >= 0; i--) {
      row += mat[i][j] + ' ';
    }
    output += row;
  }
  return output;
}

console.log('Matrix \n', createMatrix(3));

function zigZag(mat) {
  let n = mat.length;
  let output = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < n; j++) {
        output += mat[i][j] + '' + ' ';
      }
      output += '\n';
    } else {
      for (let j = n - 1; j >= 0; j--) {
        output += mat[i][j] + ' ';
      }
      output += '\n';
    }
  }
  return output;
}
{
  let n = generateRandomMatrixInArray(3);
  let m = printMatrixInString(n);
  console.log(`The matrix:\n`, m);
  console.log('The ZigZag Matrix:\n', zigZag(n));
}
//Zag Zig pattern
function zagZig(mat) {
  let n = mat.length;
  let output = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 != 0) {
      for (let j = 0; j < n; j++) {
        output += mat[i][j] + '' + ' ';
      }
      output += '\n';
    } else {
      for (let j = n - 1; j >= 0; j--) {
        output += mat[i][j] + ' ';
      }
      output += '\n';
    }
  }
  return output;
}
{
  let n = generateRandomMatrixInArray(3);
  let m = printMatrixInString(n);
  console.log(`The matrix:\n`, m);
  console.log('The zagZig Matrix:\n', zagZig(n));
}

//up-down matrix
function upDownMatrix(mat) {
  let n = mat.length;
  let output = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      for (let j = n - 1; j >= 0; j--) {
        output += mat[j][i] + ' ';
      }
      output += '\n';
    } else {
      for (let j = 0; j < n; j++) {
        output += mat[j][i] + ' ';
      }
      output += '\n';
    }
  }

  return output;
}
{
  let n = generateRandomMatrixInArray(3);
  let m = printMatrixInString(n);
  console.log(`The matrix:\n`, m);
  console.log('The upDown Matrix:\n', upDownMatrix(n));
}

//down-Up Matrix
function downUpMatrix(mat) {
  let n = mat.length;
  let output = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      for (let j = n - 1; j >= 0; j--) {
        output += mat[j][i] + ' ';
      }
      output += '\n';
    } else {
      for (let j = 0; j < n; j++) {
        output += mat[j][i] + ' ';
      }
      output += '\n';
    }
  }

  return output;
}

{
  let n = generateRandomMatrixInArray(3);
  let m = printMatrixInString(n);
  console.log(`The matrix:\n`, m);
  console.log('The upDown Matrix:\n', downUpMatrix(n));
}

//90 degree rotate
//matrix rotation
function rotate90Degree(mat) {
  let n = mat.length;
  let output = '';
  for (let j = 0; j < n; j++) {
    let row = '';
    for (let i = n - 1; i >= 0; i--) {
      row += mat[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}

{
  //example 1
  let m = generateRandomMatrixInArray(5);
  let n = createMatrixByMatrix(m);
  console.log(`the matrix:\n`, n);
  console.log(`matrix after 90 degree rotation:\n`, rotate90Degree(m));
  //example 2
  let a = generateRandomMatrixInArray(3);
  let b = createMatrixByMatrix(a);
  console.log(`the matrix:\n`, b);
  console.log(`matrix after 90 degree rotation:\n`, rotate90Degree(a));
}

// 180 degree rotation
function rotate180Degree(mat) {
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

{
  //example 1
  let m = generateRandomMatrixInArray(5);
  let n = createMatrixByMatrix(m);
  console.log(`the matrix:\n`, n);
  let k = rotate180Degree(m);
  console.log(`matrix after 180 degree rotation:\n`, k);
  //example 2
  let a = generateRandomMatrixInArray(3);
  let b = createMatrixByMatrix(a);
  console.log(`the matrix:\n`, b);
  let q = rotate180Degree(a);
  console.log(`matrix after 180 degree rotation:\n`, q);
}

//270 degree

function rotate270Degree(mat) {
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
  rotate270Degree([
    [2, 7, 2],
    [6, 9, 5],
    [7, 1, 8],
  ])
);
{
  //example 1
  let m = generateRandomMatrixInArray(5);
  let n = createMatrixByMatrix(m);
  console.log(`the matrix:\n`, n);
  let k = rotate270Degree(m);
  console.log(`matrix after 270 degree rotation:\n`, k);
  //example 2
  let a = generateRandomMatrixInArray(3);
  let b = createMatrixByMatrix(a);
  console.log(`the matrix:\n`, b);
  let q = rotate270Degree(a);
  console.log(`matrix after 270 degree rotation:\n`, q);
}
//360 degree matrix
function rotate360Degree(mat) {
  let n = mat.length;
  let output = '';
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += mat[i][j] + ' ';
    }
    output += row + '\n';
  }
  return output;
}

console.log(
  'the matrix and  360 degree rotated matrix : Both are same matrix :\n ',
  rotate360Degree([
    [2, 7, 2],
    [6, 9, 5],
    [7, 1, 8],
  ])
);

{
  //example 1
  let m = generateRandomMatrixInArray(5);
  let n = createMatrixByMatrix(m);
  console.log(`the matrix:\n`, n);
  let k = rotate360Degree(m);
  console.log(`matrix after 360 degree rotation:\n`, k);
  //example 2
  let a = generateRandomMatrixInArray(3);
  let b = createMatrixByMatrix(a);
  console.log(`the matrix:\n`, b);
  let q = rotate360Degree(a);
  console.log(`matrix after 360 degree rotation:\n`, q);
}

//===========================================
function square(x) {
  return x * x;
}
function squareAddNTimes(n) {
  let val = 2;
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = square(val);
    sum += ans;
    val = ans;
    console.log('1', val);
  }
  console.log('hiii', sum);
  return sum;
}
console.log('priya', squareAddNTimes(2));
console.log(squareAddNTimes(3));
console.log(squareAddNTimes(4));
