# Execution Context, Hoisting, and Scope 🌏

Understanding how JavaScript runs your code is the first step to becoming a master.

## 1. What is an Execution Context?
Everything in JavaScript happens inside an **Execution Context**. It is like a container where the JS code is evaluated and executed.

### Two Phases of Execution Context:
1.  **Memory Creation Phase**: JS allocates memory to variables and functions.
    * Variables (var) are stored as `undefined`.
    * Functions are stored with their entire body.
2.  **Code Execution Phase**: JS executes the code line by line.

## 2. What is Hoisting?
Hoisting is a phenomenon where you can access variables and functions even before they are initialized.

### Key Points:
*   `var` is hoisted and initialized as `undefined`.
*   `let` and `const` are hoisted BUT they are in the **Temporal Dead Zone (TDZ)** until they are initialized. Accessing them before initialization throws a `ReferenceError`.
*   **Function Declarations** are fully hoisted.
*   **Function Expressions** (using var/let/const) are hoisted based on their keyword (e.g., `var` will be `undefined`).

## 3. Interview Questions ❓

### Q1: What is the output of the following?
```javascript
console.log(a);
var a = 10;
```
**Answer**: `undefined`. Due to hoisting, `var a` is shifted to the top of its scope and initialized with `undefined`.

### Q2: What happens if we use `let` instead of `var` in the above?
**Answer**: `ReferenceError`. `let` and `const` are in the Temporal Dead Zone.

### Q3: What is the Difference between Global Execution Context and Function Execution Context?
**Answer**: 
*   **Global Execution Context (GEC)**: Created when the script starts. Only one per program. Creates the `window` object (in browsers) and `this`.
*   **Function Execution Context (FEC)**: Created every time a function is called.

## 4. Cross-Questions (Deep Dive) 🌊

*   **Interview**: "If functions are hoisted, can I call a function expression before defining it?"
    *   **Candidate**: "No, because if you use `var`, it will be `undefined` (and calling `undefined()` throws a TypeError). If you use `let/const`, it's in TDZ."
*   **Interview**: "What is the Temporal Dead Zone exactly?"
    *   **Candidate**: "The time between the variable being hoisted and it being initialized with a value. During this time, the variable exists in memory but cannot be accessed."
*   **Interview**: "What is the Scope Chain?"
    *   **Candidate**: "The process of looking for a variable in the current scope, and if not found, looking in the parent lexical environment, all the way up to the global scope."

## 5. Practice Examples
See [basics.js](file:///home/ravi/Desktop/interview/js/topics/01-execution-context/basics.js) for live code execution.
