# 'this' Keyword and Call, Apply, Bind 🎯

The value of `this` is determined by how a function is called (runtime binding).

## 1. Rules of `this`
1.  **Implicit Binding**: When a function is called as a method of an object, `this` points to that object.
2.  **Explicit Binding**: Using `call`, `apply`, or `bind` to explicitly set `this`.
3.  **New Binding**: When a function is called with the `new` keyword, `this` points to the new object.
4.  **Default Binding**: In the global scope (or in a simple function call), `this` points to the global object (`window` or `global`). In `strict mode`, it is `undefined`.
5.  **Arrow Functions**: Arrow functions **do not** have their own `this`. They inherit `this` from their lexical parent scope.

## 2. Call, Apply, Bind
*   **`call`**: Calls a function immediately with a specified `this` and arguments provided individually.
*   **`apply`**: Same as `call`, but arguments are provided as an **array**.
*   **`bind`**: Returns a **new function** with the `this` value fixed. It doesn't call the function immediately.

## 3. Interview Questions ❓

### Q1: What is the output?
```javascript
const obj = {
    name: "Antigravity",
    printName: function() {
        console.log(this.name);
    }
};
const print = obj.printName;
print();
```
**Answer**: `undefined` (or error in strict mode). When we copy the function to `print`, it loses its connection to `obj`. It's now a simple function call, so `this` defaults to the global object.

### Q2: How do arrow functions handle `this`?
**Answer**: Lexically. They don't have their own `this` binding. Instead, they "capture" the `this` value of the enclosing execution context.

### Q3: Difference between `bind` and `call`?
**Answer**: `call` invokes the function immediately. `bind` returns a copy of the function that can be invoked later.

## 4. Cross-Questions (Deep Dive) 🌊

*   **Interview**: "Can you change the `this` of an arrow function using `bind`?"
    *   **Candidate**: "No. Arrow functions ignore `call`, `apply`, and `bind` for setting `this`. The value of `this` remains what it was at the time of the function's creation."
*   **Interview**: "What happens if you pass `null` or `undefined` to `call`?"
    *   **Candidate**: "In non-strict mode, `this` will default to the global object. In strict mode, it will be exactly what you passed (`null` or `undefined`)."
*   **Interview**: "What is the 'Hard Binding'?"
    *   **Candidate**: "Using `bind` to ensure a function always has a specific `this` context, regardless of how it's called later."

## 5. Practice Examples
See [basics.js](file:///home/ravi/Desktop/interview/js/topics/05-this-keyword/basics.js) for live code execution.
