/**
 * ============================================================================
 * MODULE 02: DATA TYPES & MEMORY MANAGEMENT (Primitives vs Reference Types)
 * ============================================================================
 * Key Concepts for Interviews:
 * 1. JavaScript is dynamically typed.
 * 2. 7 Primitive Data Types: Number, String, Boolean, null, undefined, Symbol, BigInt.
 *    - Stored directly in the STACK memory.
 *    - Passed/copied BY VALUE. Immutable by nature.
 * 3. Reference Data Types: Object, Array, Function, Map, Set, Date.
 *    - Stored in the HEAP memory (variable holds pointer/reference in Stack).
 *    - Passed/copied BY REFERENCE. Mutable.
 * 4. typeof quirks: typeof null === "object", typeof NaN === "number", typeof function === "function".
 */

console.log("=== 1. Primitive vs Reference Types in Memory ===");

// Pass by Value (Primitives)
let a = 10;
let b = a; // Copy of value 10 created in stack
b = 20;
console.log("Primitive a:", a); // 10 (unchanged)
console.log("Primitive b:", b); // 20

// Pass by Reference (Objects/Arrays)
let obj1 = { name: "Alice", score: 90 };
let obj2 = obj1; // Copies reference pointing to same heap memory location
obj2.score = 100;
console.log("obj1 score:", obj1.score); // 100 (Mutated!)
console.log("obj2 score:", obj2.score); // 100

console.log("\n=== 2. The 7 Primitive Types ===");
console.log("1. Number:", typeof 42, typeof 3.14, typeof Infinity);
console.log("2. String:", typeof "Hello", typeof '');
console.log("3. Boolean:", typeof true, typeof false);
console.log("4. Undefined:", typeof undefined);
console.log("5. Null:", typeof null, "(Note: 'object' is a historical JS bug!)");
console.log("6. Symbol:", typeof Symbol("id"));
console.log("7. BigInt:", typeof 9007199254740991n);

console.log("\n=== 3. null vs undefined (Top Interview Question) ===");
// undefined: Variable declared but no value assigned, or function returning nothing, or missing object property.
// null: Explicit assignment representing "no value" or "empty object reference".

let unassignedVar;
console.log("Unassigned variable:", unassignedVar); // undefined
console.log("Explicit null variable:", null);

console.log("null == undefined:", null == undefined);   // true (both represent absence of value)
console.log("null === undefined:", null === undefined); // false (different types: object vs undefined)

console.log("Numeric conversion of null:", Number(null));           // 0
console.log("Numeric conversion of undefined:", Number(undefined)); // NaN

console.log("\n=== 4. Symbol & Unique Keys ===");
// Symbols guarantee unique property keys even with same description
const sym1 = Symbol("key");
const sym2 = Symbol("key");
console.log("sym1 === sym2:", sym1 === sym2); // false

const secretKey = Symbol("secret");
const user = {
  name: "Ravi",
  [secretKey]: "SuperSecret123"
};
console.log("User name:", user.name);
console.log("Access via symbol:", user[secretKey]);
console.log("Object keys includes Symbol?:", Object.keys(user)); // Symbol keys are hidden from standard iteration!

console.log("\n=== 5. Interview Tricky Output Questions ===");

// Question 1: NaN comparisons
console.log("typeof NaN:", typeof NaN); // "number"
console.log("NaN === NaN:", NaN === NaN); // false (NaN is the only value in JS not equal to itself!)
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false (strict check)
console.log("isNaN('abc'):", isNaN("abc")); // true (coerces 'abc' to NaN first)

// Question 2: Comparing Reference Objects
const emptyObj1 = {};
const emptyObj2 = {};
const emptyArr1 = [];
const emptyArr2 = [];
console.log("{} === {}:", emptyObj1 === emptyObj2); // false (different memory references)
console.log("[] === []:", emptyArr1 === emptyArr2); // false

// Question 3: Function parameters copy
function modify(primitive, reference) {
  primitive = 999;
  reference.value = 999;
  reference = { value: 555 }; // Reassigning reference parameter locally
}

let numVal = 10;
let objVal = { value: 10 };
modify(numVal, objVal);

console.log("numVal after modify:", numVal); // 10
console.log("objVal.value after modify:", objVal.value); // 999
