# JS Theory Masterclass: Part 1 - Fundamentals 🧱

This guide provides an exhaustive deep-dive into the foundational concepts of JavaScript.

---

### 1. What are the different data types in JavaScript?
*   **Detailed Answer**: JavaScript is a **loosely typed** and **dynamic** language. It features 8 primary data types:
    - **Primitives**: `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, `Symbol`.
    - **Non-Primitive**: `Object` (includes Arrays, Functions, Dates, etc.).
*   **How it Works (Under the Hood)**: 
    - **Primitives** are stored directly in the "Stack". When you copy a primitive, you create a real clone. They are immutable (you can't change the string "Hi", you can only replace the variable with a new string).
    - **Objects** are stored in the "Heap". The variable holds a "Pointer" (memory address) to that heap location. Copying an object only copies the pointer.
*   **Why/When to Use**: 
    - Use primitives for simple, read-only data.
    - Use objects for complex, structured data and shared state.
*   **Pros & Cons**:
    - **Pros**: Primitives are blazing fast. Objects allow for powerful modeling and reference-sharing.
    - **Cons**: Overusing objects can lead to unintended side effects if you mutate one reference and forget it affects others.
*   **Example**:
    ```javascript
    let name = "Ravi"; // Primitive in Stack
    let user = { id: 1 }; // Pointer in Stack, Data in Heap
    
    let userCopy = user;
    userCopy.id = 2; 
    console.log(user.id); // 2 (Reference shared!)
    ```
*   **Explanation**: Here, `user` and `userCopy` point to the same house (memory address). Changing the furniture inside that house affects both.

---

### 2. Difference between `==` and `===`?
*   **Detailed Answer**: 
    - `==` is **Abstract Equality**. It uses the "Abstract Equality Comparison Algorithm" to convert operands to a common type before comparing.
    - `===` is **Strict Equality**. It performs no conversion; if types differ, it returns `false`.
*   **How it Works**: When using `==`, JS tries to turn both into numbers (mostly). For example, `true == 1` is true because `true` becomes `1`.
*   **When to Use**: **99% of the time, use `===`**. It makes code predictable and easier for the engine to optimize.
*   **Pros & Cons**:
    - **Pros (`===`)**: Safer, faster, and prevents bugs like `0 == ""` (true).
    - **Cons (`==`)**: Extremely non-intuitive (e.g., `[] == ![]` is true).
*   **Example**:
    ```javascript
    console.log(null == undefined); // true (Specific rule in JS spec)
    console.log(null === undefined); // false (Different types)
    ```
*   **Explanation**: `==` thinks `null` and `undefined` are effectively the same "emptiness", but `===` recognizes that one is a type `object` (null) and the other is `undefined`.

---

### 3. Difference between `var`, `let`, and `const`?
*   **Detailed Answer**: 
    - **`var`**: Function-scoped. Hoisted to the top of the function. Can be re-declared.
    - **`let`**: Block-scoped (`{}`). Lives in the Temporal Dead Zone until declared. Cannot be re-declared.
    - **`const`**: Like `let`, but its reference cannot be changed.
*   **How it Works**: `var` is registered in the "Variable Environment". `let/const` are registered in the "Lexical Environment".
*   **Why we use it**: 
    - `const` ensures the variable identity stays constant (helps readability).
    - `let` is for counters or values that must change.
*   **Pros & Cons**:
    - **Pros**: `let/const` prevent "hoisting bugs" and "leaking" variables into outer scopes.
    - **Cons**: `var` can lead to confusing behavior where a variable is accessible before it's "realistically" defined.
*   **Example**:
    ```javascript
    function test() {
        if (true) {
            var v = "var";
            let l = "let";
        }
        console.log(v); // "var" (Leaked out of block)
        // console.log(l); // ReferenceError (Stayed inside block)
    }
    ```
*   **Explanation**: `var` ignores the `if` block boundaries because it only cares about the function it's in. `let` respects the `{}` wings.
- **TDZ**(Temporal Dead Zone) is the time when a `let` or `const` variable exists in memory but cannot be used until it is declared.

---

### 4. What is the Temporal Dead Zone (TDZ)?
*   **Detailed Answer**: The zone from the start of a block until the variable is initialized.
*   **How it Works**: When JS enters a block, it "hears" all `let/const` declarations but marks them as "Uninitialized" and throws an error if you touch them before the line they are on.
*   **Why**: It forces developers to write code in a linear, logical order: **Define first, use second.**
*   **Example**:
    ```javascript
    // Start of TDZ
    // console.log(x); // Error!
    let x = 10; // End of TDZ
    ```

---

### 5. What is Type Coercion?
*   **Detailed Answer**: The process of converting a value from one type to another. 
*   **How it Works**: JS follows a complex set of rules (Primitivization -> Stringification -> Numeric conversion).
*   **Example**:
    ```javascript
    console.log(1 + "2" + 3); // "123" 
    console.log(1 - "2" + 3); // 2
    console.log(1 - "2"); // -1
    ```
*   **Explanation**: In the first case, `+` sees a string and switches to **Concatenation**. In the second case, `-` only works on numbers, so it forced `"2"` to become `2` (Numeric Coercion).

---
### 6. What are Truthy and Falsy values?
*   **Detailed Answer**: In JavaScript, every value is either **Truthy** or **Falsy** when evaluated in a boolean context (like an `if` statement).
*   **The Falsy List**: There are exactly 8 falsy values: `false`, `0`, `-0`, `0n` (BigInt), `""` (empty string), `null`, `undefined`, and `NaN`.
*   **How it Works**: When JS expects a boolean (e.g., `if (val)`), it performs an internal `ToBoolean` conversion. Everything not on the list above is automatically `true`.
*   **Why/When to Use**: It allows for concise checks like `if (user) { ... }` instead of `if (user !== null && user !== undefined)`.
*   **Pros & Cons**:
    - **Pros**: Cleaner, readable code.
    - **Cons**: Can be dangerous with numbers (where `0` is a valid value but falsy) or strings (where `""` is a valid input).
*   **Example**:
    ```javascript
    let data = [];
    if (data) { 
        console.log("Empty arrays are Truthy!"); 
    }
    ```

---

### 7. Difference between `null` and `undefined`?
*   **Detailed Answer**: 
    - `undefined`: The variable exists but has no value given to it yet (automatic).
    - `null`: A specific value that represents "no value" or "empty" (intentional).
*   **How it Works**: `undefined` is a type itself. `null` is technically an object (due to a bug in the first version of JS).
*   **When to Use**: Use `null` as an "intentional absence". For example, if you fetch a user that doesn't exist, return `null`.
*   **Pros & Cons**:
    - **Pros**: Helps distinguish between "something we didn't check yet" (undefined) and "something we checked but found nothing" (null).
*   **Example**:
    ```javascript
    let a; // undefined
    let b = null; // null
    console.log(typeof a); // "undefined"
    console.log(typeof b); // "object"
    ```

---

### 8. What is the `typeof` operator?
*   **Detailed Answer**: An operator used to find the data type of a variable.
*   **How it Works**: It returns a string. Note that for arrays and null, it returns `"object"`. To check for an array, use `Array.isArray()`.
*   **Pros & Cons**:
    - **Pros**: Fast and easy for primitives.
    - **Cons**: Unreliable for distinguishing between different object types (Objects, Arrays, Dates).
*   **Example**:
    ```javascript
    console.log(typeof []); // "object"
    console.log(Array.isArray([])); // true
    ```

---

### 9. What is NaN? How to check it?
*   **Detailed Answer**: "Not a Number". It's a special value of the **Number** type that results from invalid math operations.
*   **How it Works**: `NaN` is unique because it is the only value in JS not equal to itself (`NaN === NaN` is false).
*   **How to Check**: Use `Number.isNaN()` which strictly checks if the value is NaN.
*   **Example**:
    ```javascript
    let result = "abc" * 10; // NaN
    console.log(Number.isNaN(result)); // true
    ```

---

### 10. What is "Strict Mode"?
*   **Detailed Answer**: A restricted version of JavaScript that catches silent errors and turns them into "Throwing Errors".
*   **How it Works**: Activated by adding `"use strict";` at the top of a file or function.
*   **Why we use it**: 
    - Prevents global variable creation (`x = 10;` without `let` throws error).
    - Makes debugging easier by identifying bad coding patterns.
    - Disables old, problematic features (`with` statement).
*   **Pros & Cons**:
    - **Pros**: Stronger, more secure, and better optimized code.
*   **Example**:
    ```javascript
    "use strict";
    // globalVar = "Error!"; // ReferenceError
    ```

---
*(Part 1 complete. Proceeding to Part 2: Scopes & Closures.)*
