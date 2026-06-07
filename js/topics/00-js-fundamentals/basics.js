/**
 * Topic: JavaScript Fundamentals
 * 
 * Run this file using: node topics/00-js-fundamentals/basics.js
 */

// --- 1. typeof and Data Types ---
console.log("--- typeof Examples ---");
console.log(typeof 42);           // "number"
console.log(typeof "JS");         // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (The infamous bug)
console.log(typeof { a: 1 });     // "object"
console.log(typeof [1, 2]);       // "object"
console.log(typeof function () { }); // "function"

// --- 2. Coercion & Equality ---
console.log("\n--- Coercion & Equality ---");
console.log(1 == "1");            // true
console.log(1 === "1");           // false
console.log(0 == false);          // true
console.log("" == false);         // true
console.log(null == undefined);   // true
console.log(null === undefined);  // false

// --- 3. Pass by Value vs Pass by Reference ---
console.log("\n--- Pass by Value ---");
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 (unchanged)

console.log("\n--- Pass by Reference ---");
let obj1 = { name: "Ravi" };
let obj2 = obj1;
obj2.name = "Antigravity";
console.log(obj1.name); // "Antigravity" (changed because both point to the same memory)

// --- 4. Short-circuiting (&& and ||) ---
console.log("\n--- Short-circuiting ---");
console.log(false || "Default"); // "Default"
console.log("User" && "Admin");  // "Admin"
console.log("" || 0 || "Final"); // "Final"
