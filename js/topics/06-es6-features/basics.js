/**
 * Topic: ES6+ Features
 * 
 * Run this file using: node topics/06-es6-features/basics.js
 */

// --- 1. Destructuring ---
console.log("--- Destructuring ---");
const user = { id: 1, info: { name: "Ravi", city: "Delhi" } };
const { info: { name, city } } = user;
console.log(name, city);

const colors = ["red", "green", "blue"];
const [primary, secondary] = colors;
console.log(primary, secondary);

// --- 2. Spread & Rest ---
console.log("\n--- Spread & Rest ---");
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // Spread
console.log(arr2);

function sum(...numbers) { // Rest
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// --- 3. Optional Chaining & Nullish Coalescing ---
console.log("\n--- Optional Chaining & Nullish Coalescing ---");
const data = { user: { name: "Bob" } };
console.log(data?.user?.age ?? "Age not available");

// --- 4. Map & Set ---
console.log("\n--- Map & Set ---");
const myMap = new Map();
myMap.set("a", 1).set({ key: "val" }, 2);
console.log(myMap.size);

const mySet = new Set([1, 2, 2, 3, 4, 4]);
console.log([...mySet]); // [1, 2, 3, 4]
