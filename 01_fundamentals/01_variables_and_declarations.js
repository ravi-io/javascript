/**
 * ============================================================================
 * MODULE 01: VARIABLES & DECLARATIONS (var vs let vs const)
 * ============================================================================
 * Concept Summary for Interviews:
 * 1. Scope: var is function-scoped or globally-scoped. let and const are block-scoped.
 * 2. Hoisting: var is hoisted and initialized with `undefined`. let and const are hoisted but remain uninitialized (Temporal Dead Zone - TDZ).
 * 3. Redeclaration: var allows redeclaration in the same scope. let and const do not.
 * 4. Reassignment: var and let allow reassignment. const does NOT allow reassignment (though internal object properties can mutate).
 * 5. Global object binding: In browsers, var creates properties on `window`. let/const do not.
 */

console.log("=== 1. Scope Differences ===");

function scopeDemo() {
  if (true) {
    var varVariable = "I am var (function-scoped)";
    let letVariable = "I am let (block-scoped)";
    const constVariable = "I am const (block-scoped)";
  }

  console.log(varVariable); // Accessible: "I am var (function-scoped)"
  
  try {
    console.log(letVariable); // ReferenceError
  } catch (err) {
    console.log("let Error:", err.message);
  }

  try {
    console.log(constVariable); // ReferenceError
  } catch (err) {
    console.log("const Error:", err.message);
  }
}
scopeDemo();

console.log("\n=== 2. Temporal Dead Zone (TDZ) & Hoisting ===");
// TDZ is the period between entering scope and variable declaration initialization where accessing let/const throws ReferenceError.

console.log("var before declaration:", hoistedVar); // Output: undefined
var hoistedVar = 100;

try {
  // console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
  let hoistedLet = 200;
} catch (err) {
  console.log("TDZ Error for let:", err.message);
}

console.log("\n=== 3. Redeclaration and Reassignment ===");
var x = 1;
var x = 2; // Allowed
console.log("var redeclared x:", x); // 2

let y = 10;
// let y = 20; // SyntaxError: Identifier 'y' has already been declared
y = 20; // Reassignment allowed
console.log("let reassigned y:", y); // 20

const z = 30;
// z = 40; // TypeError: Assignment to constant variable.

// IMPORTANT INTERVIEW QUESTION: Is const immutable?
// Answer: No! Const creates an immutable binding, not an immutable value.
const person = { name: "Ravi", age: 24 };
person.age = 25; // Allowed! Mutating the object property
console.log("Mutated const object:", person);

// To make an object truly immutable:
const frozenPerson = Object.freeze({ name: "Ravi", age: 24 });
frozenPerson.age = 30; // Fails silently in non-strict mode, throws error in strict mode
console.log("Frozen const object:", frozenPerson);

console.log("\n=== 4. Interview Output Tricky Questions ===");

// Tricky Question 1: Loop with var vs let
console.log("Loop with var:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var loop i:", i), 10); 
  // Output: 3, 3, 3 (because var is function scoped and shares 1 binding across iterations)
}

console.log("Loop with let:");
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let loop j:", j), 20); 
  // Output: 0, 1, 2 (because let creates a new block scope for each iteration)
}

// Tricky Question 2: Shadowing
let b = 50;
{
  let b = 100; // Shadowing outer b
  console.log("Inner block b:", b); // 100
}
console.log("Outer block b:", b); // 50

// Illegal Shadowing (var shadowing let in same scope boundary)
// let c = 10;
// { var c = 20; } // SyntaxError: Identifier 'c' has already been declared
