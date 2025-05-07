console.log('matrix');
// function matrix(n) {
//   let output = [];
//   for (let i = 0; i < n; i++) {
//     let row = [];
//     for (let j = 0; j < n; j++) {
//       row += i + '' + j + ' ';
//     }
//     output += row + '\n';
//   }
//   return output;
// }
// console.log(matrix(4));

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

function array2string(mat) {
  let output = '';
  for (let i = 0; i < mat.length; i++) {
    let row = [];
    for (let j = 0; j < mat.length; j++) {
      row += i + '' + j + ' ';
    }
    output += row + '\n';
  }
  return output;
}
console.log(
  array2string([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ])
);

let xconsoleOutput = document.getElementById('console');
xconsoleOutput.innerHTML = array2string([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// let consoleOutput = document.getElementById('console');
// consoleOutput.innerHTML = matrix(4);

function mat() {
  let array = [0, 1, 2, 3];
  let output = '';
  for (let i = 0; i < array.length; i++) {
    output += array[i] + ' ';
  }
  console.log(output);
}
mat();

//input [ 01 12 23 ] => [0 2 6];

// function array2string(mat) {
//   let output = '';
//   for (let i = 0; i < mat.length; i++) {
//     let row = [];
//     for (let j = 0; j < mat.length; j++) {
//       row += i + '' + j + ' ';
//     }
//     output += row + '\n';
//   }
//   return output;
// }

function multiplication() {
  let matrix = array2string(mat);
  let output = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix([i * j]));
    }
    output.push(row);
  }
  console.log(output);
}
multiplication();

function quadrant1() {
  let output = [];
  for (let i = 10; i >= 0; i--) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      row += j + '' + i + ' ';
      //i == (j * j) / 16 ? 'A' : '*  ';
    }

    output = output + row + '\n';
  }
  console.log(output);
  return output;
}

quadrant1();

const priya = {
  age: 20,
};

function matrix(n) {
  let output = [];
  for (let i = 0; i < n; i++) {
    let row = [];

    for (let j = 0; j < n; j++) {
      // row.push([i*2, j*2]);
      row.push([i, j]);
    }
    output.push(row);
  }

  return output;
}

// console.log(matrix(5));

function getrandomInt() {
  return parseInt(Math.random() * 5);
}

function array2StringConversion(matrixResult = matrix(5)) {
  console.log(matrixResult);
  let output = '';
  for (let i = 0; i < matrixResult.length; i++) {
    let row = [];
    for (let j = 0; j < matrixResult[i].length; j++) {
      row += matrixResult[i][j].join('') + ' ';
    }
    output += row + '\n';
  }
  console.log(output);

  return output;
}
console.log(array2StringConversion());

function numberMatrix(n) {
  let output = [];
  let count = 1;
  for (let i = 1; i < n; i++) {
    let row = [];
    for (let j = 1; j < n; j++) {
      row.push(count++);
    }
    output.push(row);
  }
  return output;
}
console.log(numberMatrix(5));

function numberMatrixIntoString(n) {
  let output = [];
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

console.log(numberMatrixIntoString(5));
