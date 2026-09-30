/**
 * ============================================================================
 * MODULE 03: TYPE COERCION & EQUALITY (Implicit vs Explicit)
 * ============================================================================
 * Key Concepts for Interviews:
 * 1. Type Conversion (Explicit): Developer manually converts type via String(x), Number(x), Boolean(x).
 * 2. Type Coercion (Implicit): JS automatically converts types during runtime operations (+, -, ==, if conditions).
 * 3. 8 Falsy Values in JS: false, 0, -0, 0n, "", null, undefined, NaN. ALL other values are Truthy!
 * 4. Loose Equality (==) performs type coercion before comparing. Strict Equality (===) compares BOTH value and type.
 */

console.log("=== 1. The 8 Falsy Values in JavaScript ===");
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyValues.forEach(val => {
  console.log(`Boolean(${String(val)}):`, Boolean(val));
});

console.log("\nTruthy Examples:");
console.log("Boolean('0'):", Boolean("0"));       // true (non-empty string)
console.log("Boolean('false'):", Boolean("false")); // true (non-empty string)
console.log("Boolean([]):", Boolean([]));         // true (empty array is object)
console.log("Boolean({}):", Boolean({}));         // true (empty object)

console.log("\n=== 2. Implicit Coercion Rules ===");

// 1. Addition (+) Operator: If any operand is a string, converts all to String!
console.log("'5' + 3:", '5' + 3);         // "53"
console.log("5 + '3':", 5 + '3');         // "53"
console.log("1 + 2 + '3':", 1 + 2 + '3'); // "33" (Evaluates left-to-right: 1+2=3, 3+'3'="33")
console.log("'1' + 2 + 3:", '1' + 2 + 3); // "123"

// 2. Numeric Operators (-, *, /, %): Coerces string to Number!
console.log("'5' - 3:", '5' - 3);         // 2
console.log("'5' * '2':", '5' * '2');     // 10
console.log("'5' - 'foo':", '5' - 'foo'); // NaN

// 3. Unary + Operator: Fast number conversion
console.log("+'42':", +'42');       // 42 (Number)
console.log("+true:", +true);       // 1
console.log("+false:", +false);     // 0
console.log("+null:", +null);       // 0
console.log("+undefined:", +undefined); // NaN
console.log("+[]:", +[]);           // 0

console.log("\n=== 3. Loose Equality (==) vs Strict Equality (===) ===");

// Rules of loose equality (==):
// - If types match, use ===
// - null == undefined is true
// - If comparing number and string, convert string to number
// - If comparing boolean and anything else, convert boolean to number first
// - If comparing object and primitive, convert object to primitive via valueOf()/toString()

console.log("5 == '5':", 5 == '5');         // true
console.log("5 === '5':", 5 === '5');       // false
console.log("0 == false:", 0 == false);     // true (false -> 0)
console.log("'' == false:", '' == false);   // true ('' -> 0, false -> 0)
console.log("null == undefined:", null == undefined); // true
console.log("null == 0:", null == 0);       // false (null ONLY equals null or undefined with ==)

console.log("\n=== 4. Top Interview Coercion Brain Teasers ===");

// Puzzle 1: [] == ![]
// Step 1: ![] evaluates to false (since [] is truthy)
// Step 2: [] == false
// Step 3: [] -> '' (toString), false -> 0
// Step 4: '' == 0 -> 0 == 0 -> true!
console.log("[] == ![]:", [] == ![]); // true

// Puzzle 2: [] == []
// Comparing reference pointers -> different memory allocations -> false!
console.log("[] == []:", [] == []); // false

// Puzzle 3: Array + Object vs Object + Array
console.log("[] + {}:", [] + {}); // "[object Object]"
console.log("true + true:", true + true); // 2
console.log("true + false:", true + false); // 1
console.log("'5' + + '5':", '5' + + '5'); // "55" (+'5' is 5, '5' + 5 is "55")
console.log("'5' - - '5':", '5' - - '5'); // 10 ('5' - (-5) = 10)

// Puzzle 4: Object property key coercion
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123; // b coerces to "[object Object]"
a[c] = 456; // c coerces to "[object Object]", overwriting a["[object Object]"]!

console.log("a[b]:", a[b]); // 456
