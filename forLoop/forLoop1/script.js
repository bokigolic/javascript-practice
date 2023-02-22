// Write a function that prints the numbers from 1 to 10 to the console.

function printNumber() {
  for (i = 0; i < 11; i++) {
    console.log(i)
  }
}
printNumber()

const x = 11;
const printNumberSecondWay = () => {
  for (number = 0; number < x; number++) {
    console.log(number)
  }
}
printNumberSecondWay()

console.log("----------------------------------")


//Print the even numbers from 1 to 20 to the console.



for (i = 0; i < 21; i++) {

  //console.log(i)
  if (i % 2 === 0) {
    console.log(i)

  }
}

console.log("----------------------------------")


// Print the sum of the numbers 1 to 100 to the console.



let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum of numbers from 0 to 100 is: " + sum);


console.log("----------------------------------")



//Print the product of the numbers 1 to 10 to the console.

let product = 1;
for (let i = 1; i <= 10; i++) {
  product = product * i
}

console.log("Product of numbers from 0 to 10 is: " + product);


console.log("----------------------------------")


//Print the factorial of a given number to the console.

let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log("Factorial of numbers from 0 to 10 is: " +
  factorial);

console.log("----------------------------------")


//Print the Fibonacci sequence up to a certain number to the console.

let limit = 20;
let a = 0, b = 1, c;
for (let i = 0; i < limit; i++) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}

console.log("----------------------------------")




//Print a multiplication table for a given number to the console.


let numb = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${numb} x ${i} = ${numb * i}`);
}

console.log("----------------------------------")


//Print the reverse of a given string to the console.

let str = "My name is Bojan";
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i];
}
console.log(reverseStr);


console.log("----------------------------------")
