// Taking user input

// 1. EASY WAY = window prompt
// 2. HARD WAY = HTML textbox


easyWay = prompt("What is your name?"); // This will show a dialog box asking for input
console.log(`Hello, ${easyWay}!`); // This will print the input to the console

// HARD WAY
document.getElementById("myButton").addEventListener("click", function () {
    const value = document.getElementById("myInput").value
    document.getElementById("myh1").innerText=value
});