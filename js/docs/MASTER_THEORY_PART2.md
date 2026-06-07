# JS Theory Masterclass: Part 2 - Scopes & Closures 🔒

This part covers the "Heart of JavaScript"—how functions remember, where variables live, and how the engine manages state.

---

### 11. What is Scope?
*   **Detailed Answer**: Scope is the area where a variable can be found. JavaScript has:
    - **Global Scope**: Default area for all code.
    - **Function Scope**: Created by a function.
    - **Block Scope**: Created by `{}` for `let` and `const`.
*   **How it Works**: When you declare a variable, JS allocates memory for it in a specific "Bucket". If you are inside a bucket, you can look "out" into larger buckets, but you can't look "in" from the outside.
*   **Why/When to Use**: Use **Block Scope** (let/const) for almost everything. It makes your code "hermetic" (self-contained) and prevents different parts of your code from accidentally changing each other's variables.
*   **Pros & Cons**:
    - **Pros**: Reduces bugs, makes code modular, improves memory management (variables are cleared when the scope is destroyed).
    - **Cons**: Over-nesting scopes can make variable lookups slightly slower and code harder to read.

---

### 12. What is a Closure?
*   **Detailed Answer**: A closure is a function that "closes over" (remembers) variables from its parent's Lexical Environment, even after that parent function has finished executing.
*   **How it Works**: When a function is created, it carries a secret "backpack" called its `[[Scope]]`. This backpack contains references to all variables it might need from its parent. Even if the parent function finishes (its execution context is popped), the backpack lives on as long as the child function exists.
*   **Why/When to Use**: 
    - **Data Privacy (Encapsulation)**: Hide variables from the global scope.
    - **Function Factories**: Create functions with pre-configured settings.
    - **Memoization**: Cache results between calls.
*   **Pros & Cons**:
    - **Pros**: Enables powerful patterns (Modules, Currying, Decorators).
    - **Cons**: **Memory Leaks!** If you create thousands of closures that reference large objects (like big arrays), those objects won't be garbage collected.
*   **Example**:
    ```javascript
    function createCounter() {
        let count = 0; // Private variable
        return function() {
            count++;
            console.log(count);
        };
    }
    const myCounter = createCounter();
    myCounter(); // 1
    myCounter(); // 2
    ```
*   **Explanation**: `myCounter` is the child function. It remembers `count` because of the closure. No one outside can touch or change `count` directly—it's truly private.

---

### 13. What is the Lexical Environment?
*   **Detailed Answer**: It's the physical location in the engine where your variables and functions map to memory. It has two parts:
    1. **Environment Record**: The actual list of variables.
    2. **Reference to Outer Environment**: The link to its parent.
*   **Why we use it**: It is the foundation for **Lexical Scoping** (also known as Static Scoping). In JS, the scope is determined by where you *wrote* the code, not where you *run* it.
*   **Pros & Cons**: This predictability is what allows tools like linters to tell you if a variable is missing before you even run the code.

---

### 14. Higher-Order Functions (HOF)?
*   **Detailed Answer**: A function that takes another function as an input or returns a function as an output. 
*   **Example & Explanation**:
    ```javascript
    const numbers = [1, 2, 3];
    const squared = numbers.map(x => x * x); // map is a HOF
    ```
    *Explanation*: `map` is the Higher-Order Function. It doesn't know *how* to transform numbers; it just knows *how to iterate*. You provide the "how" (the logic) as a function argument.

---

### 15. Function Currying?
*   **Detailed Answer**: Converting a function like `f(a, b, c)` into `f(a)(b)(c)`.
*   **Why/When to Use**: It allows for **Partial Application**. You can fix one parameter and reuse the function for different secondary parameters.
*   **Example**:
    ```javascript
    const log = (date) => (type) => (msg) => 
        console.log(`[${date.getTime()}] [${type}] : ${msg}`);

    const logToday = log(new Date());
    const logError = logToday("ERROR");
    
    logError("Database connection failed!"); 
    ```
*   **Pros**: Makes your logic extremely modular and reusable.

### 16. What is the use of an IIFE (Immediately Invoked Function Expression)?
*   **Detailed Answer**: A function that runs as soon as it is defined.
*   **How it Works**: It wraps a function in parentheses and then invokes it immediately with `()`. This creates a private scope.
*   **Why we use it**: Before ES6 (let/const), this was the ONLY way to create a private scope and avoid "polluting" the global window object.
*   **Example**:
    ```javascript
    (function() {
        let privateData = "Hidden from world";
    })();
    // console.log(privateData); // Error
    ```

---

### 17. What is an Anonymous Function?
*   **Detailed Answer**: A function without a name.
*   **How it Works**: Usually stored in a variable or used as a callback.
*   **Pros & Cons**:
    - **Pros**: Good for one-time use cases.
    - **Cons**: Harder to debug (they show up as "(anonymous)" in the stack trace).

---

### 18. What is Function Borrowing?
*   **Detailed Answer**: A way for one object to use a method belonging to another object.
*   **How it Works**: Using `call()`, `apply()`, or `bind()` to change the `this` context from the original owner to the borrower.
*   **Example**:
    ```javascript
    const me = { name: "Ravi" };
    const machine = { 
        greet() { console.log(`Hello ${this.name}`); } 
    };
    machine.greet.call(me); // "Hello Ravi"
    ```

### 19. What is the Scope Chain?
*   **Detailed Answer**: The hierarchical process of resolving variable references.
*   **How it Works**: When JS needs a variable, it first looks in the local scope's Environment Record. If not found, it follows the `outer` reference to the parent's Lexical Environment. This continues until the Global scope.
*   **Why we use it**: It allows functions to be "Context Aware" and access data from their surrounding environment.
*   **Example**:
    ```javascript
    const global = "Global";
    function outer() {
        const mid = "Mid";
        function inner() {
            const local = "Local";
            console.log(local, mid, global); // Found via Chain
        }
    }
    ```

---

### 20. What is Memoization?
*   **Detailed Answer**: An optimization technique where we cache the results of expensive function calls based on their inputs.
*   **How it Works**: By using a closure to keep an internal cache (an object). If the same arguments are provided, return the cached value; otherwise, calculate, store, and return.
*   **When to Use**: Essential for performance in heavy computations or recursive algorithms like Fibonacci.
*   **Pros & Cons**:
    - **Pros**: Drastic computation savings.
    - **Cons**: Increased memory (RAM) usage.
*   **Example**:
    ```javascript
    const memo = (fn) => {
        let cache = {};
        return (n) => cache[n] || (cache[n] = fn(n));
    }
    ```

---
*(Part 2 complete. Proceeding to Part 3: Prototypes & Objects.)*
