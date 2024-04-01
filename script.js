// Using const and let for variable declaration
const name = 'John';
let age = 30;

// Using destructuring
const person = { name, age };
const { name: personsName, age: personsAge } = person;

// Using default parameters
function greet(name = 'World') {
  // Using template literals
  console.log(`Hello, ${name}!`);
}

// Using arrow function
const add = (a, b) => a + b;

// Using forEach method
[1, 2, 3].forEach(number => console.log(number));

// Using early returns
function isPositive(number) {
  if (number <= 0) {
    return false;
  }
  return true;
}

// Using promises
const delay = time => new Promise(resolve => setTimeout(resolve, time));

delay(1000).then(() => console.log('One second has passed'));