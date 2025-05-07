console.log(
  'Impure function: Characteristics: May produce different outputs for the same input Has side effects (modifies external state)Depends on external state'
);

//Example here
let num = 5;
function findSum(sum) {
  num += sum;
  return num;
}
console.log(findSum(0));
console.log(findSum(5));
console.log(findSum(10));

function doubleArrayInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  //ye arr[i] ko 2 se multiply krke usi index par place kr de rha hai isiliye inplace khte hai
  return arr;
}

const original = [1, 2, 3];
const doubled = doubleArrayInPlace(original);
console.log(original); // [2, 4, 6]  //ye arr[i] ko 2 se multiply krke usi index par place kr de rha hai isiliye inplace khte hai isiliye original ki value bhi yahi aa rhi hai.
console.log(doubled); // [2, 4, 6]

console.log(Math.floor(3.4));
console.log(Math.floor(3.9));
console.log(Math.ceil(3.1));
console.log(Math.ceil(3.8));
console.log(Math.round(1.3));
console.log(Math.round(1.7));

{
  function a(a, b) {
    return a + b;
  }
  console.log(a(2, 3));

  let num = 0;
  function b(sum) {
    num += sum;
    return num;
  }
  console.log(b(5)); //5
  console.log(b(5)); //10
  console.log(b(10));
}
