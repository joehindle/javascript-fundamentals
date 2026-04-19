// Type conversion examples
// When working with user input, values often start as strings.

// String + number keeps the result as a string.
let value1 = "5";
value1 += 1;
console.log(value1); // "51"

// Increment converts a numeric string into a number first.
value1++;
console.log(value1); // 52

// Adding to a string appends the value.
let value2 = "123";
value2 += 5;
console.log(value2); // "1235"

// Converting to a number lets us do numeric math.
let value3 = "123";
value3 = Number(value3);
value3 += 5;
console.log(value3); // 128

// Any non-zero number is truthy.
value3 = Boolean(value3);
console.log(value3); // true

// Negative numbers are also truthy.
let value4 = "-254";
value4 = Number(value4);
console.log(value4); // -254
value4 = Boolean(value4);
console.log(value4); // true

// Empty strings are falsy.
let x = "";
x = Boolean(x);
console.log(x); // false
