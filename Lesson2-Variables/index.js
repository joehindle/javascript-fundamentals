// Basic variables
const name = "John";
const age = 50;
const gpa = 3.5;

// Print a formatted message
console.log(`My name is ${name}, I am ${age} years old, and my GPA is ${gpa}.`);

// Boolean example
const online = false;
console.log(online ? "I am online!" : "I am not online!");

// Ask for a name in the browser
const input = prompt("What is your name?");
const heading = document.getElementById("myh1");
if (heading) {
    heading.innerText = `My name is ${input}!`;
}
console.log(`Hello, ${input}!`);
