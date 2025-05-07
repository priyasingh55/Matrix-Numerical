console.log('Movement of Star in Array');

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

// Movement star without for loop at every click

//==============================================

const btn1 = document.getElementById('MoveLeft');
const btn2 = document.getElementById('MoveRight');
function numPrint() {
  let i = 0;
  btn1.addEventListener('click', function () {
    i--;
    console.log(i);
  });

  btn2.addEventListener('click', function () {
    i++;
    console.log(i);
  });
  return i;
}
numPrint(); //=======

let index = 0;

function moveStar(originalArray) {
  console.log(index);
  let newArr = [...originalArray];

  if (index >= originalArray.length) {
    console.log(index);
    index = 0;
  }
  newArr[index] = '*';
  console.log(newArr);
  let result = [...newArr];

  index++;

  return result;
}

let starPrint = moveStar([9, 2, 3, 7, 1]);

const btn = document.getElementById('moveStar');
btn.addEventListener('click', function () {
  starPrint = moveStar([9, 2, 3, 7, 1]);
  // console.log('The result array:', starPrint);
});
