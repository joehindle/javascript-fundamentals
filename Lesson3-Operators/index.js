// Basic Operators

let a = 10;
let b = 3;

console.log("Addition: " + (a + b)); // 13
console.log("Subtraction: " + (a - b)); // 7
console.log("Multiplication: " + (a * b)); // 30
console.log("Division: " + (a / b)); // 3.3333333333333335
console.log("Modulus: " + (a % b)); // 1
console.log("Exponentiation: " + (a ** b)); // 1000

// Increment and Decrement  
a++; // a is now 11
b--; // b is now 2

console.log("After Increment: a = " + a); // 11
console.log("After Decrement: b = " + b); // 2

// Increment and Decrement  V2
++a; // a is now 12
--b; // b is now 1

console.log("After Increment: a = " + a); // 12
console.log("After Decrement: b = " + b); // 1but 

let c = 5;
console.log(`c-- prints: ${c--}`); // Prints 5, then c becomes 4

let d = 5;
console.log(`--d prints: ${--d}`); // Decrements first, then prints 4

// Rounding examples
console.log(`Math.floor(4.9): ${Math.floor(4.9)}`); // 4
console.log(`Math.trunc(4.9): ${Math.trunc(4.9)}`); // 4
console.log(`Math.round(4.9): ${Math.round(4.9)}`); // 5

// Compound assignment examples
let e = 10;
e += 2;
console.log(`e += 2: ${e}`); // 12

let f = 10;
f -= 2;
console.log(`f -= 2: ${f}`); // 8

let g = 10;
g *= 2;
console.log(`g *= 2: ${g}`); // 20

let h = 10;
h /= 2;
console.log(`h /= 2: ${h}`); // 5

let i = 10;
i **= 2;
console.log(`i **= 2: ${i}`); // 100

let j = 10;
j %= 3;
console.log(`j %= 3: ${j}`); // 1
