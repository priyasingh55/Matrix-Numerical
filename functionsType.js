console.log('function type');
//1. Named function
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 4));

//2.Anonymous function
const square = (n) => {
  return n * n;
};
console.log(square(5));

//3.Arrow Function
const greet = (name) => `Hello, ${name}`;
console.log(greet('Good Morning'));
console.log(greet('Vishal'));
console.log(greet('How are you?'));

//4.Immediately Invoked Function(IIF)
(function () {
  console.log('Immediately call');
})();
//alternative way of IIF representation
(function () {
  console.log('Immediately call');
}());

//5.Generator function
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
//yield use in while statement in generator function  to produce a sequence of values
let generate = idGenerator();
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);

//6.Async function ==> functions that return promises
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

//7.Constructor functions==> it is used to create object
function Person(name) {
  this.name = name;
}
const x = new Person('Priya');
const y = new Person('Vishal');
console.log(x, y);

//8. Higher Order Functioons ==> Functions that operate on other functions.

