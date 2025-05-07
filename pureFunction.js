console.log(
  "Pure Functions Characteristics: 1.Always returns the same output for the same input. 2. No side effects (doesn't modify external state). 3.Doesn't depend on external state"
);

//Example
//addition function
function add(a, b) {
  return a + b;
}
console.log('Addition function');
console.log(add(2, 3)); //it gives 5
console.log(add(5, 3)); //it gives 8
console.log(add(20, 3)); //it gives 23

//multiplication function
function multiplication(a, b) {
  return a * b;
}
console.log('Multiplication function');
console.log(multiplication(2, 3));
console.log(multiplication(5, 3));
console.log(multiplication(6, 3));

//double array function
function doubleArray(arr) {
  return arr.map((num) => num * 2);
}
console.log(doubleArray([1, 2, 3, 4, 5]));
console.log(doubleArray([1, 20, -3, 24, 15]));

//find square
function findSquare(n) {
  return n * n;
}
console.log(findSquare(5));
console.log(findSquare(10));

//find cube
function findCube(n) {
  return n * n * n;
}
console.log(findCube(5));
console.log(findCube(10));

//find array length
function findArrayLength(arr) {
  return arr.length;
}
console.log(findArrayLength([1, 2, 3, 4]));
console.log(findArrayLength([1, 2, 3, 4, 0, 0]));

let num = 5;
function findSum(num) {
  return num + 5;
}
console.log(findSum(5));
console.log(findSum(10));
