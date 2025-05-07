//Create a function that returns the sum of a specific row or column
function rowSum(mat) {
  let n = mat.length;
  let output = '';
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i] + '';
  }
  output += sum + '\n';

  return output;
}
console.log(
  rowSum([
    [1, 2],
    [3, 4],
  ])
);

console.log(
  'row sum: \n' +
    rowSum([
      [1, 2, 4],
      [3, 4, 5],
      [3, 4, 15],
    ])
);

//Create a function that returns the sum of a specific row or column
// function columnSum(mat) {
//   let n = mat.length;
//   let output = '';
//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = n - 1; j >= 0; j--) {
//       sum += mat[j][i];
//     }
//     output += sum + ' ';
//   }
//   return output;
// }
// console.log(
//   'column sum: ' +
//     columnSum([
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ])
// );

// console.log(
//   'column sum: ' +
//     columnSum([
//       [1, 2, 4],
//       [3, 4, 5],
//       [3, 4, 15],
//     ])
// );

//reverse array
// function reverseArray(arr) {
//   let i = 0;
//   let j = arr.length - 1;
//   while (i < j) {
//     [arr[j], arr[i]] = [arr[i], arr[j]];
//     i++;
//     j--;
//   }
//   return arr;
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// reverse Array

function array(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(array(10));

function reverseArray(n) {
  let arr = [];
  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }
  return arr;
}
console.log(reverseArray(10));

function arrayReverse(array) {
  let n = array.length;
  let arr = [];
  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }
  return arr;
}
console.log(arrayReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function matrix(n) {
  let output = '';
  let count = 1;
  for (let i = 1; i < n; i++) {
    let row = '';
    for (let j = 1; j < n; j++) {
      row += count++ + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(matrix(5));

//diagonal matrix
function diagonalMatrix(n) {
  let output = '';
  for (let i = 1; i < n; i++) {
    let row = '';
    for (let j = 1; j < n; j++) {
      if (i == j) row += i + '' + j + ' ';
    }
    output += row;
  }
  return `Diagonal element: ` + output;
}
console.log(diagonalMatrix(5));
//  print diagonal reverse
function diagonalReverse(n) {
  let output = '';
  for (let i = n; i > 0; i--) {
    let row = '';
    for (let j = n; j > 0; j--) {
      if (i == j) row += i + '' + j + ' ';
    }
    output += row;
  }
  return `reverse diagonal element: ` + output;
}
console.log(diagonalReverse(5));

//print row

function printRow(n) {
  let output = '';
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += i + '' + j + ' ';
    }
    console.log(`Row ${i} : `, row);
    output += row + '\n';
  }
  return output;
}
console.log(printRow(5));

//print column
function columnPrint(n) {
  // let n = mat.length;
  let output = '';

  for (let i = 0; i < n; i++) {
    let col = '';
    // console.log(i)
    for (let j = 0; j < n; j++) {
      col += [i] + '' + [j] + ' ';
    }

    output += col + '\n ';
  }
  return `print column:\n` + output;
}

console.log(columnPrint(5));

function singleLoop(mat) {
  let n = mat.length;
  let output = '';

  for (let i = 0; i <= n; i++) {
    console.log(mat[i]);
    output += mat[i] + ' \n';
  }

  return output;
}
console.log(
  singleLoop([
    [1, 2],
    [3, 4],
  ])
);
let m = [
  [1, 2],
  [3, 4],
];
console.log(m[1][1]);

function findMedian(p) {
  let n = p.length;
  console.log(n);
  let mid;
  if (n % 2 == 0) {
    mid = n / 2;
    console.log('even length median value: ' + p[mid]);
  } else {
    mid = (n + 1) / 2;
    console.log('odd length median value: ' + p[mid]);
  }
  return mid;
}
console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8]));

let a = [1, 2, 3, 5, 6, 4, 7, 8];
let n = a.length;
console.log(n);
console.log(a[0]);
console.log(a[n - 1]);
{
  let m = a.length / 2;
  console.log(m);
  console.log(a[m]);
}

let v = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log('first value of matrix: ' + v[0][0]);
console.log(
  'mid value of matrix: ' +
    v[Math.floor(v.length / 2)][Math.floor(v.length / 2)]
);
console.log('last value of matrix: ' + v[v.length - 1][v.length - 1]);
console.log('===============');
{
  let v = [
    [1, 2, 3, 4, -1],
    [5, 6, 7, 8, 11],
    [9, 0, 9, 7, 12],
    [87, 5, 4, 3, 13],
    [100, 5, 4, 3, 14],
  ];
  console.log('first value of matrix: ' + v[0][0]);
  console.log('length of matrix: ' + v.length);
  console.log('last value of matrix: ' + v[v.length - 1][v.length - 1]);
  console.log(
    'mid value of matrix: ' +
      v[Math.floor(v.length / 2)][Math.floor(v.length / 2)]
  );
  console.log(v[Math.floor(v.length / 3)][Math.floor(v.length / 3)]);
  console.log('first value of last row matrix: ' + v[v.length - 1][0]);

  console.log(
    'last value of 1st row matrix: ' + v[v.length - v.length][v.length - 1]
  ); //-1

  console.log(
    'last value of 2nd row matrix: ' +
      v[v.length - (v.length - 1)][v.length - 1]
  ); //11
  console.log(
    'last value of 3rd row matrix: ' +
      v[v.length - (v.length - 2)][v.length - 1]
  ); //12

  console.log(
    'last value of 4th row matrix: ' +
      v[v.length - (v.length - 3)][v.length - 1]
  ); //13
  console.log(
    'last value of 5th row matrix: ' +
      v[v.length - (v.length - 4)][v.length - 1]
  ); //14
}
console.log('===========================================');

{
  let v = [
    [5, 6, 7, 8],
    [9, 0, 9, 7],
    [87, 5, 4, 3],
    [100, 5, 4, 3],
  ];
  console.log('first value of matrix: ' + v[0][0]);
  console.log('length of matrix: ' + v.length);
  console.log('last value of matrix: ' + v[v.length - 1][v.length - 1]);
  console.log(
    'mid value of matrix: ' +
      v[Math.floor(v.length / 2)][Math.floor(v.length / 2)]
  );
  console.log(v[Math.floor(v.length / 3)][Math.floor(v.length / 3)]);
  console.log('first value of last row matrix: ' + v[v.length - 1][0]);

  console.log(
    'last value of 1st row matrix: ' + v[v.length - v.length][v.length - 1]
  ); //8

  console.log(
    'last value of 2nd row matrix: ' +
      v[v.length - (v.length - 1)][v.length - 1]
  ); //7
  console.log(
    'last value of 3rd row matrix: ' +
      v[v.length - (v.length - 2)][v.length - 1]
  ); //3

  console.log(
    'last value of 4th row matrix: ' +
      v[v.length - (v.length - 3)][v.length - 1]
  ); //3
}
console.log('=============================================');

{
  let v = [
    [5, 6, 7, 8, 0, 1],
    [9, 0, 9, 7, 9, 4],
    [87, 5, 4, 33, 5, 6],
    [100, 5, 4, 30, 6, 5],
    [9, 0, 9, 7, 9, 4],
    [101, 5, 4, 3, 6, 51],
  ];
  console.log('first value of matrix: ' + v[0][0]);
  console.log('length of matrix: ' + v.length);
  console.log('last value of matrix: ' + v[v.length - 1][v.length - 1]);
  console.log('mid value of matrix: ' + v[v.length / 2][v.length / 2]);
  console.log(
    '1/3rd value of matrix: ' +
      v[Math.floor(v.length / 3)][Math.floor(v.length / 3)]
  );

  console.log('first value of last row matrix: ' + v[v.length - 1][0]);

  console.log(
    'last value of 1st row matrix: ' + v[v.length - v.length][v.length - 1]
  ); //1

  console.log(
    'last value of 2nd row matrix: ' +
      v[v.length - (v.length - 1)][v.length - 1]
  ); //4
  console.log(
    'last value of 3rd row matrix: ' +
      v[v.length - (v.length - 2)][v.length - 1]
  ); //6

  console.log(
    'last value of 4th row matrix: ' +
      v[v.length - (v.length - 3)][v.length - 1]
  ); //5

  console.log(
    'last value of 5th row matrix: ' +
      v[v.length - (v.length - 4)][v.length - 1]
  ); //5

  console.log(
    'last value of 6th row matrix: ' +
      v[v.length - (v.length - 5)][v.length - 1]
  ); //5
}

function findAllColumnInMatrix(v) {
  let ans = [];
  for (let i = 0; i < v.length; i++) {
    let output = [];
    for (let j = 0; j < v.length; j++) {
      // output.push(v[i][v.length -(v.length-1)]);
      output.push(v[j][i]) + ' ';
    }
    ans.push(output);
  }

  return ans;
}
console.log(
  findAllColumnInMatrix([
    [5, 6, 7, 8, 0, 1],
    [9, 0, 9, 7, 9, 4],
    [87, 5, 4, 33, 5, 6],
    [100, 5, 4, 30, 6, 5],
    [9, 0, 9, 7, 9, 4],
    [101, 5, 4, 3, 6, 51],
  ])
);
console.log('======');
console.log(
  findAllColumnInMatrix([
    [5, 6, 7, 8],
    [9, 0, 9, 7],
    [87, 5, 4, 30],
    [100, 5, 4, 3],
  ])
);

console.log('========');
console.log(
  findAllColumnInMatrix([
    [1, 2, 3, 4, -1],
    [5, 6, 7, 8, 11],
    [9, 0, 9, 7, 12],
    [87, 5, 4, 3, 13],
    [100, 5, 4, 3, 14],
  ]),
  [
    [1, 5, 9, 87, 100],
    [2, 6, 0, 5, 5],
    [3, 7, 9, 4, 4],
    [4, 8, 7, 3, 3],
    [-1, 11, 12, 13, 14],
  ]
);

//find column reverse
function findColumnReverse(v) {
  let ans = [];
  for (let i = 0; i < v.length; i++) {
    let output = [];
    for (let j = v.length - 1; j >= 0; j--) {
      output.push(v[j][i]) + ' ';
    }
    ans.push(output);
  }

  return ans;
}
console.log(
  findColumnReverse([
    [1, 2, 3, 4, -1],
    [5, 6, 7, 8, 11],
    [9, 0, 9, 7, 12],
    [87, 5, 4, 3, 13],
    [100, 5, 4, 3, 14],
  ])
);
console.log('=========================================');

console.log(
  findColumnReverse([
    [5, 6, 7, 8, 0, 1],
    [9, 0, 9, 7, 9, 4],
    [87, 5, 4, 33, 5, 6],
    [100, 5, 4, 30, 6, 5],
    [9, 0, 9, 7, 9, 4],
    [101, 5, 4, 3, 6, 51],
  ])
);
console.log('======');
console.log(
  findColumnReverse([
    [5, 6, 7, 8],
    [9, 0, 9, 7],
    [87, 5, 4, 30],
    [100, 5, 4, 3],
  ])
);

//find Row reverse
function findRowReverse(v) {
  let ans = [];
  for (let i = 0; i <= v.length - 1; i++) {
    let output = [];
    for (let j = v.length - 1; j >= 0; j--) {
      output.push(v[i][j]) + ' ';
    }
    ans.push(output);
  }

  return ans;
}
console.log('======');
console.log(
  findRowReverse([
    [5, 6, 7, 8],
    [9, 0, 9, 7],
    [87, 5, 4, 30],
    [100, 5, 4, 3],
  ])
);
console.log(
  findRowReverse([
    [5, 6, 7, 8, 0, 1],
    [9, 0, 9, 7, 9, 4],
    [87, 5, 4, 33, 5, 6],
    [100, 5, 4, 30, 6, 5],
    [9, 0, 9, 7, 9, 4],
    [101, 5, 4, 3, 6, 51],
  ])
);
console.log('======');
console.log(
  findRowReverse([
    [1, 2, 3, 4, -1],
    [5, 6, 7, 8, 11],
    [9, 0, 9, 7, 12],
    [87, 5, 4, 3, 13],
    [100, 5, 4, 3, 14],
  ])
);

//Row sum
function findRowSum(v) {
  let ans = '';
  for (let i = 0; i <= v.length - 1; i++) {
    let sum = 0;
    for (let j = 0; j <= v.length - 1; j++) {
      sum += v[i][j];
    }
    ans += sum + ' ';
  }

  return ans;
}
console.log('======');
console.log(
  findRowSum([
    [1, 2, 3, 4, -1],
    [5, 6, 7, 8, 11],
    [9, 0, 9, 7, 12],
    [87, 5, 4, 3, 13],
    [100, 5, 4, 3, 14],
  ])
);

console.log('======');
console.log(
  findRowSum([
    [5, 6, 7, 8],
    [9, 0, 9, 7],
    [87, 5, 4, 30],
    [100, 5, 4, 3],
  ])
);
console.log('======');
console.log(
  findRowSum([
    [5, 6, 7, 8, 0, 1],
    [9, 0, 9, 7, 9, 4],
    [87, 5, 4, 33, 5, 6],
    [100, 5, 4, 30, 6, 5],
    [9, 0, 9, 7, 9, 4],
    [101, 5, 4, 3, 6, 51],
  ])
);

//column sum
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
console.log('======');
console.log(
  findColumnSum([
    [5, 6, 7, 8, 0, 1],
    [9, 0, 9, 7, 9, 4],
    [87, 5, 4, 33, 5, 6],
    [100, 5, 4, 30, 6, 5],
    [9, 0, 9, 7, 9, 4],
    [101, 5, 4, 3, 6, 51],
  ])
);

console.log('======');
console.log(
  findColumnSum([
    [5, 6, 7, 8],
    [9, 0, 9, 7],
    [87, 5, 4, 30],
    [100, 5, 4, 3],
  ])
);

function createMatrix(mat) {
  let output = '';
  let n = mat.length;
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += i + '' + j + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(
  createMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

{
  function matrix(n) {
    let output = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(i + '' + j);
      }
      output.push(row);
    }
    return output;
  }
  console.log(matrix(5));
  console.log(createMatrix(matrix(5)));
}
