/**
 * Topic: Execution Context & Hoisting
 * 
 * Run this file using: node topics/01-execution-context/basics.js
 */

// --- 1. Variable Hoisting (var) ---
console.log("--- Var Hoisting ---");
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// --- 2. Variable Hoisting (let/const) ---
console.log("\n--- Let/Const & TDZ ---");
try {
    console.log(b); // Throws ReferenceError
} catch (e) {
    console.log("Caught Error:", e.message);
}
let b = 20;

// --- 3. Function Hoisting ---
console.log("\n--- Function Hoisting ---");
greet(); // "Hello from Greet!"

function greet() {
    console.log("Hello from Greet!");
}

// --- 4. Function Expression Hoisting ---
console.log("\n--- Function Expression ---");
try {
    sayHi(); // TypeError: sayHi is not a function (if using var)
} catch (e) {
    console.log("Caught Error:", e.message);
}

var sayHi = function() {
    console.log("Hi!");
}

// --- 5. The Scope Chain ---
console.log("\n--- The Scope Chain ---");
var globalVar = "Global";

function outer() {
    var outerVar = "Outer";
    
    function inner() {
        var innerVar = "Inner";
        console.log(innerVar, outerVar, globalVar); // Inner Outer Global
    }
    inner();
}
outer();
