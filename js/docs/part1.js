// var a = 1;
// var a = 2;
// console.log(a); // 2

// var/let/const detailed examples and comparisons

// console.log("--- redeclare var (same scope) ---");
// var a = 1;
// var a = 2; // allowed, overwrites previous
// console.log("a =", a); // 2

console.log("\n--- hoisting with var ---");
console.log("before declaration x =", typeof x, x); // 'undefined' and undefined
var x = 5;
console.log("after declaration x =", x); // 5

console.log("\n--- TDZ with let/const ---");
try {
  console.log("accessing y before declaration ->", y);
} catch (e) {
  console.log("error accessing y before declaration ->", e.message);
}
let y = 3;
console.log("after declaration y =", y);

console.log("\n--- block scope: var vs let ---");
if (true) {
  var z = 10;
  let w = 20;
  console.log("inside block z =", z, "w =", w);
}
console.log("outside block z =", z); // 10 — var leaks to function/global scope
try {
  console.log("outside block w =", w);
} catch (e) {
  console.log("outside block w error ->", e.message);
}

console.log("\n--- redeclaration differences (safe demos) ---");
var v = 1;
var v = 2; // OK
console.log("var v =", v);
{
  // shadowing with let in an inner block is allowed
  let v = 100;
  console.log("inner block let v =", v);
}
console.log("outer v after block =", v);

console.log("\n--- const immutability vs mutability ---");
const c = { n: 1 };
console.log("const object before mutation =", c);
c.n = 2; // allowed: mutating object properties
console.log("const object after mutation =", c);
try {
  // attempting to reassign a const binding throws
  // Uncommenting the following line would throw a TypeError at runtime
  // c = { n: 3 };
  null; // placeholder
} catch (e) {
  console.log("const reassign error ->", e.message);
}

console.log("\n--- function scope with var ---");
var G = "outer";
function f() {
  var G = "inner";
  console.log("inside f G =", G);
}
f();
console.log("after f G =", G);

console.log("\n--- top-level var and globalThis in Node (CommonJS) ---");
var top = "top-level-var";
console.log("globalThis.top ->", globalThis.top); // usually undefined in Node module wrapper
console.log("top variable ->", top);

console.log("\n--- summary notes ---");
console.log(
  "- var: function-scoped (not block), hoisted, can be redeclared in same scope.",
);
console.log(
  "- let: block-scoped, hoisted but in TDZ until initialization, can't redeclare in same scope.",
);
console.log(
  "- const: like let but binding immutable (can't reassign); object contents can mutate.",
);

// Notes: Redeclaring a `let` or `const` in the same scope is a SyntaxError at parse time
// so examples that would cause that are omitted to keep this file runnable.
