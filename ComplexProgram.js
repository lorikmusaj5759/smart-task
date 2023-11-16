/*
Filename: ComplexProgram.js
Content: A complex program showcasing various advanced concepts in JavaScript.
*/

// Class for representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class for representing a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineStarted = false;
  }

  startEngine() {
    this.engineStarted = true;
    console.log(`The engine of the ${this.brand} ${this.model} has been started.`);
  }

  stopEngine() {
    this.engineStarted = false;
    console.log(`The engine of the ${this.brand} ${this.model} has been stopped.`);
  }
}

// Function to calculate factorial using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

// Function to find all prime numbers in a given range
function findPrimes(start, end) {
  let primes = [];
  
  for (let i = start; i <= end; i++) {
    let isPrime = true;
    
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) {
      primes.push(i);
    }
  }
  
  return primes;
}

// Main program
(() => {
  const alice = new Person('Alice', 28);
  const bob = new Person('Bob', 34);

  alice.sayHello();
  bob.sayHello();

  const tesla = new Car('Tesla', 'Model S', 2021);
  tesla.startEngine();
  tesla.stopEngine();
  
  console.log(`Factorial of 5: ${factorial(5)}`);
  
  const primes = findPrimes(1, 100);
  console.log('Prime numbers from 1 to 100:', primes);
})();

// ... More complex code goes here ...