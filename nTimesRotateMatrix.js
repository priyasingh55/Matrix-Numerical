console.log('N times rotate matrix');

const randomgenerator = (min, max) => {
  return ~~(Math.random() * max) + min;
};
console.log(randomgenerator(0, 2));
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

function printMatrixInReadableFormat(mat) {
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
  console.log(p);
  console.log('Matrix in readable format: \n' + printMatrixInReadableFormat(p));
}

//rotate matrix function

function rotate90deg(mat) {
  let n = mat.length;
  let output = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = n - 1; j >= 0; j--) {
      row.push(mat[j][i]);
      // console.log(row);
    }
    output.push(row);
  }
  return output;
}

{
  let m = generateRandomMatrixInArray(3);
  console.log(m);
  let n = rotate90deg(m);
  console.log(
    'Matrix after 90 degree rotate:\n',
    printMatrixInReadableFormat(n)
  );
}

function rotateNTimes(n, mat) {
  let ans = [];
  for (let i = n; i > 0; i--) {
    ans = rotate90deg(mat);
    mat = ans;
  }
  return ans;
}
{
  //example 1
  let v = generateRandomMatrixInArray(3);
  console.log('The matrix:\n', v);
  let m = rotateNTimes(2, v);
  console.log(
    'matrix after 2 times  rotated:\n',
    printMatrixInReadableFormat(m)
  );
  //example 2
  let p = generateRandomMatrixInArray(5);
  console.log('The matrix:\n', p);
  let q = rotateNTimes(3, p);
  console.log(
    'matrix after 3 times rotated:\n',
    printMatrixInReadableFormat(q)
  );
}

//

// function square(x) {
//   return x * x;
// }

// function squareAddNTimes(n, num) {
//   let sum = 0;
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans = square(num);
//     sum = sum + ans;
//     num = ans;
//     console.log('1', num);
//   }
//   console.log('hiii', sum);
//   return sum;
// }
// console.log('priya', squareAddNTimes(2, 2));
// console.log(squareAddNTimes(3, 3));
// console.log(squareAddNTimes(4, 4));

function spiralMatrix(matrix, k) {
  let result = [];
  let n = matrix.length - 1;
  let top = 0;
  let bottom = n;
  let left = 0;
  let right = n;
  let ans = [];
  for (let m = k; m >= 0; m--) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }

    top++;
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }

    right--;
    for (let i = right; i >= left; i--) {
      ans.push(matrix[bottom][i]);
    }

    bottom--;
    for (let i = bottom; i >= top; i--) {
      ans.push(matrix[i][left]);
    }

    left++;
  }
  result.push(ans);

  return result;
}
{
  //example 1
  let v = generateRandomMatrixInArray(4);
  console.log('The matrix:\n', v);
  let m = spiralMatrix(v, 4);
  console.log(printMatrixInReadableFormat(m));

  //example 2
  let w = generateRandomMatrixInArray(5);
  console.log('The matrix:\n', w);
  let n = spiralMatrix(w, 5);
  console.log(printMatrixInReadableFormat(n));
}

//wave print matrix
function waveMatrix(matrix) {
  let n = matrix.length;
  let output = [];
  for (let j = 0; j < n; j++) {
    let row = [];
    if (j % 2 == 0) {
      for (let i = 0; i < n; i++) {
        row.push(matrix[i][j]);
      }
    } else {
      for (let i = n - 1; i >= 0; i--) {
        row.push(matrix[i][j]);
      }
    }
    output.push(row);
  }
  return output;
}

{
  //example 1
  let v = generateRandomMatrixInArray(4);
  console.log('The matrix:\n', v);
  let m = waveMatrix(v);
  console.log(printMatrixInReadableFormat(m));

  //example 2
  let w = generateRandomMatrixInArray(5);
  console.log('The matrix:\n', w);
  let n = waveMatrix(w);
  console.log(printMatrixInReadableFormat(n));
}

//
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
console.log(arr1);
arr1[3] = 15;
arr1[3] = 'Vishal';
console.log(arr1);

// function leftShift(arr) {

// }

// const obj1={name:"priya"};
// const obj2={name:"priya"};
// console.log(obj1 == obj2);
// console.log(obj2 == obj1)

//key down
// document.addEventListener('keydown', (event) => {
//   console.log(event.key, '*');
// });
//key up
// document.addEventListener('keyup', (event) => {
//   console.log(event.key, '&&');
// });
//key press
// document.addEventListener('keypress', (event) => {
//   console.log(event.key, 'Priya');
// });

//random generator array
function randomGeneratorArray(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(randomgenerator(1, 5));
    // if (i == 0) {
    //   res.push('*');
    // } else {
    //   res.push(randomgenerator(1, 5));
    // }
  }
  return res;
}
// console.log(randomGeneratorArray(5));
//
function replaceWithEmoji(arr, value) {
  let emoji = '*';
  let index = arr.indexOf(value);
  console.log(index);
  if (index !== -1) {
    arr[index] = emoji;
  }
  return arr;
}

let a = randomGeneratorArray(5);
console.log(a);
a = replaceWithEmoji(a, randomgenerator(1, 5));
console.log(a);

document.addEventListener('keydown', (event) => {
  console.log(event.key);
  let arr = a;
  console.log(arr);

  if (event.key == 'ArrowRight') {
  }
});
//
function printString(arr) {
  let res = '';

  for (let i = 0; i < arr.length; i++) {
    res += arr[i] + '   ' + '\n';
  }

  return res;
}
console.log(printString([1, 2, 3, 4, 5]));

//==============================
function print(arr) {
  let output = [];
  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    console.log('BEFORE PUTTING * newArr', newArr);
    let temp = newArr[i];
    newArr[i] = '*';
    console.log('AFTER PUTTING * newArr', newArr);
    output.push([...newArr]);
    console.log(1111, output);
    newArr[i] = temp;
  }
  return output;
}
// console.log(print([9,2,3,7,1]));
let n = print([9, 2, 3, 7, 1]);
// console.log(n)
let m = printString(n);
console.log(m);
//output
// [*,2,3,7,1]
//[9,*,3,7,1]
//[9,2,*,7,1]
//[9,2,3,*,1]
//[9,2,3,7,*]

//find largest
function findMax(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log('first max:', findMax([1, 2, 4, 6, 76, 566, 88, 990, 1000]));

//second largest
function secondMax(arr) {
  let num = findMax(arr);
  // console.log(num);
  let secondMax = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondMax && arr[i] < num) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
console.log(
  '2nd largest',
  secondMax([1, 2, 4, 6, 76, 566, 88, 990, 1000, 991, 600])
);

let obj = Date();
console.log(obj, typeof obj);

let dateObj = new Date();
console.log(dateObj, typeof dateObj);

//
function starPrint(arr) {
  let n = arr.length;
  let i = 0;
  let newArr=[...arr];
  let res = [];
    newArr[i] = '*';
  
    res.push(newArr);
    i++;

  return res;
}
console.log(starPrint([4, 5, 6, 3, 8, 9, 1]));
console.log(starPrint([4, 5, 6, 3, 8, 9, 1]));
