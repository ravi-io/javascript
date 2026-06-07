# JS Theory Masterclass: Part 3 - Prototypes & Objects 🧬

Detailed breakdown of JavaScript's unique inheritance system and object behaviors.

---

### 21. What is Prototypal Inheritance?
*   **Detailed Answer**: A mechanism where objects inherit properties and methods from other objects.
*   **How it Works**: Every object has an internal `[[Prototype]]`. JS lookups follow the link to the prototype object, then its prototype, up to `null`.
*   **Example**: `arr.__proto__ === Array.prototype`.

---

### 22. `__proto__` vs `prototype`?
*   **Detailed Answer**: `__proto__` is a reference on an instance; `prototype` is a property on constructor functions used to build instances.

---

### 23. Prototype Chain?
*   **Detailed Answer**: The series of links leading to `Object.prototype` then `null`.

---

### 24. Shallow vs Deep Copy?
*   **Detailed Answer**: Shallow copies references; Deep copy clones everything.

---

### 25. What is `Object.create()`?
*   **Detailed Answer**: A method for creating a new object, using an existing object as the prototype of the newly created object.
*   **How it Works**: Unlike `new`, it doesn't run a constructor function. It directly sets the `[[Prototype]]` internal link.
*   **Example**: `const dog = Object.create(animal);`
*   **Pros & Cons**:
    - **Pros**: Cleanest way to set up inheritance without constructor overhead.
    - **Cons**: Can't easily pass arguments like a constructor does.

---

### 26. What is a Constructor Function?
*   **Detailed Answer**: A regular function used with the `new` keyword to create multiple instances of an object.
*   **Why we use it**: To automate the creation of objects with the same properties and methods.
*   **Example**:
    ```javascript
    function Person(name) {
        this.name = name;
    }
    const p1 = new Person("Ravi");
    ```

---

### 27. What is the `new` keyword?
*   **Detailed Answer**: A operator that performs 4 specific steps:
    1. Creates a blank JS object `{}`.
    2. Links this object to another object (sets `__proto__`).
    3. Binds the object as the `this` context for the function.
    4. Returns the object (unless the function returns its own object).
*   **Internal Detail**: If you forget `new`, `this` will point to the global object, leading to bugs.

---

### 28. What is Object Serialization?
*   **Detailed Answer**: Converting an object into a format (like JSON) that can be stored or transmitted over a network.
*   **How it Works**: `JSON.stringify()` converts code to string. `JSON.parse()` turns it back.
*   **Pros & Cons**:
    - **Pros**: Interoperability (works with any language).
    - **Cons**: Loses functions and certain types (like Date or RegEx) during conversion.

---

### 29. `hasOwnProperty()`?
*   **Detailed Answer**: A method that returns true if the property is a direct property of the object (not inherited).
*   **Why we use it**: When looping through objects (`for...in`), you might accidentally get properties from the prototype. This method filters those out.

---

### 30. ES6 Classes?
*   **Detailed Answer**: A modern syntax for prototypes. It brings JS closer to "Classical" OOP languages like Java.
*   **How it Works**: It is **Syntax Sugar**. Underneath, JS still uses Prototypal Inheritance.
*   **Pros & Cons**:
    - **Pros**: Much cleaner syntax for `extends` and `super`.
    - **Cons**: Hides how JS really works (prototypes), which can confuse beginners.

---

### 31. What is the `this` keyword?
*   **Detailed Answer**: Context reference decided at runtime.

---

### 32. What is Implicit Binding?
*   **Detailed Answer**: When a function is called as a property of an object, `this` is bound to that object.
*   **Example**: `obj.greet()` -> `greet` knows `this` is `obj`.

---

### 33. What is Explicit Binding?
*   **Detailed Answer**: Manually forcing a function to use a specific object as `this`.
*   **Methods**: `call`, `apply`, `bind`.

---

### 34. Difference between `call` and `apply`?
*   **Detailed Answer**: 
    - `call`: Pass arguments individually (`fn.call(obj, arg1, arg2)`).
    - `apply`: Pass arguments as an array (`fn.apply(obj, [arg1, arg2])`).
*   **Mnemonic**: **C**all is for **C**ommas; **A**pply is for **A**rrays.

---

### 35. What is `bind`?
*   **Detailed Answer**: Returns a **new function** with `this` permanently bound. It does not invoke the function immediately.
*   **Example**: `const boundFn = originalFn.bind(obj);`

---

### 36. Arrow Functions & `this`?
*   **Detailed Answer**: Arrow functions DO NOT have their own `this`. They capture it from the lexical scope where they were defined.
*   **Pros & Cons**:
    - **Pros**: Great for callbacks (like `setTimeout`) where you want to keep the outer context.
    - **Cons**: Cannot be used as constructors or methods if you need a dynamic `this`.

---

### 37. Default Binding?
*   **Detailed Answer**: If none of the other rules apply, `this` defaults to the Global object (window). In Strict Mode, it is `undefined`.

---

### 38. Can you change `this` for an arrow function?
*   **Detailed Answer**: **No**. Methods like `call`, `bind`, and `apply` are ignored by arrow functions for setting `this`.

---

### 39. Hard Binding?
*   **Detailed Answer**: A pattern using `bind` to ensure a function always has a specific context, no matter how it's called later.

---

### 40. The Call Stack?
*   **Detailed Answer**: A data structure that tracks the execution context of functions.
*   **How it Works**: Last-In, First-Out (LIFO). When a function is called, it's pushed to the stack. When it returns, it's popped off.
*   **Error**: "Maximum call stack size exceeded" occurs during infinite recursion.

---
*(Part 3 complete. Proceeding to Part 4: Async JS.)*
