# Module 1: JavaScript & Modern ES6+ (20 Questions) 🧱

These questions test your understanding of the engine that powers everything else in the stack.

---

### Q1: What is the difference between `let`, `const`, and `var`?
*   **Answer**: `var` is function-scoped; `let` and `const` are block-scoped. `const` prevents reassignment.
*   **How/Why**: Use `const` by default to ensure variable values aren't accidentally changed.
*   **Pros/Cons**: `let/const` catch errors early due to the Temporal Dead Zone (TDZ). `var` causes bugs due to scope leakage.

### Q2: Explain the Event Loop in 3 sentences.
*   **Answer**: JS is single-threaded. The event loop continuously checks the call stack; if empty, it pushes tasks from the microtask and callback queues to the stack.
*   **Senior Context**: Essential for non-blocking I/O (like fetching data without freezing the UI).

### Q3: What is a closure and when did you last use it?
*   **Answer**: A function that remembers its lexical scope.
*   **How/When**: Common in higher-order functions and data privacy (encapsulation).
*   **Pros/Cons**: Pros: Memory persistent state. Cons: Can cause memory leaks if not handled.

### Q4: Deep copy vs Shallow copy?
*   **Answer**: Shallow copy copies references; Deep copy recursively clones every nested value.
*   **When**: Use shallow (`{...obj}`) for simple state updates; use deep (`structuredClone`) for complex nested data.

### Q5: What is the difference between `==` and `===`?
*   **Answer**: `==` converts types (coercion); `===` checks both value and type.
*   **Senior Rule**: **Always use `===`** for predictability.

### Q6: What are arrow functions and how do they handle `this`?
*   **Answer**: Shorter syntax functions that don't have their own `this`. They capture `this` from the parent scope.

### Q7: Explain "Hoisting".
*   **Answer**: Declarations (not initializations) are moved to the top of their scope during compilation.
*   **Why**: To allow calling functions before they are defined in the file.

### Q8: What is the difference between `null` and `undefined`?
*   **Answer**: `undefined` = not initialized; `null` = intentionally empty.

### Q9: What is a "Strict Mode"?
*   **Answer**: `"use strict";` prevents unsafe actions like creating global variables accidentally.

### Q10: Difference between `Map` and `Object`?
*   **Answer**: `Map` maintains insertion order and allows any key type; `Object` only allows strings/symbols as keys.
*   **Pros**: `Map` is more performant for frequent addition/removal.

### Q11: What is the difference between `spread` and `rest`?
*   **Answer**: Spread (`...arr`) expands an array; Rest (`...args`) gathers multiple arguments into one array.

### Q12: How do you handle errors in asynchronous code?
*   **Answer**: Using `try/catch` with `async/await` OR `.catch()` with Promises.

### Q13: What is the Difference between `debounce` and `throttle`?
*   **Answer**: Debounce waits for a pause; Throttle ensures execution at fixed intervals.
*   **When**: Debounce for search inputs; Throttle for scroll events.

### Q14: What is "Currying"?
*   **Answer**: Converting `f(a, b)` into `f(a)(b)`.
*   **Why**: For partial application and reusable utility functions.

### Q15: What is a "Promise"?
*   **Answer**: An object representing the eventual completion (or failure) of an async operation.

### Q16: Promise.all vs Promise.allSettled?
*   **Answer**: `all` fails if ANY promise fails; `allSettled` waits for all to finish regardless of success/failure.

### Q17: What are "Template Literals"?
*   **Answer**: Backticks (`` ` ``) allowing string interpolation and multi-line strings.

### Q18: Difference between Function Declaration and Expression?
*   **Answer**: Declarations are hoisted; Expressions (variables) are not.

### Q19: What is "Temporal Dead Zone"?
*   **Answer**: The time between variable creation and initialization where accessing it throws an error.

### Q20: What is the output of `typeof null`?
*   **Answer**: `"object"`. (It's a historical bug).

---
*(Next: Module 2 - React.js)*
