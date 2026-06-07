/**
 * Topic: Closures & Lexical Environment
 * 
 * Run this file using: node topics/02-closures/basics.js
 */

// --- 1. Basic Closure ---
console.log("--- Basic Closure ---");
function outer() {
    let message = "Hello Closures!";
    return function inner() {
        console.log(message);
    };
}
const sayHello = outer();
sayHello(); // "Hello Closures!"

// --- 2. Private Variables (Data Hiding) ---
console.log("\n--- Private Variables ---");
function createCounter() {
    let count = 0; // Private variable
    return {
        increment: function () { count++; return count; },
        decrement: function () { count--; return count; },
        getCount: function () { return count; }
    };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count);       // undefined (private!)

// --- 3. Function Currying ---
console.log("\n--- Currying ---");
const multiply = (a) => (b) => (c) => a * b * c;
console.log(multiply(2)(3)(4)); // 24

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)(10)); // 100

// --- 4. Function Factory ---
console.log("\n--- Function Factory ---");
function makeSizer(size) {
    return function () {
        console.log(`Setting font size to ${size}px`);
    };
}
const size12 = makeSizer(12);
const size16 = makeSizer(16);
size12();
size16();
