# Prototypes and Inheritance 🧬

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

## 1. What is a Prototype?
Every object in JavaScript has a built-in property, which is called its **prototype**. The prototype is itself an object, so the prototype will have its own prototype, making what's called a **prototype chain**. The chain ends when we reach a prototype that has `null` as its own prototype.

## 2. `__proto__` vs `prototype`
This is a very common interview confusion:
*   **`__proto__`**: This is a property on an **instance** (object) that points to the prototype it was created from.
*   **`prototype`**: This is a property on a **constructor function** that will be the `__proto__` of all instances created by that constructor.

## 3. Interview Questions ❓

### Q1: What is the Prototype Chain?
**Answer**: When you try to access a property on an object, JS first looks for it on the object itself. If it doesn't find it, it looks at the object's prototype, then the prototype's prototype, and so on, until it finds the property or reaches `null`.

### Q2: How can you create an object without a prototype?
**Answer**: By using `Object.create(null)`. This creates an object that doesn't inherit from `Object.prototype`, so it doesn't even have methods like `toString()` or `hasOwnProperty()`.

### Q3: Difference between Functional Inheritance and ES6 Classes?
**Answer**: 
*   **Functional**: Uses constructor functions and manual prototype assignment (e.g., `Child.prototype = Object.create(Parent.prototype)`).
*   **ES6 Classes**: Syntactic sugar over prototypes. Uses `class`, `extends`, and `super()`. Internally, it still uses the prototype chain.

## 4. Cross-Questions (Deep Dive) 🌊

*   **Interview**: "Why shouldn't you modify `Object.prototype` directly?"
    *   **Candidate**: "It affects every single object in the program (including third-party libraries), which can lead to performance issues and unpredictable bugs (Prototype Pollution)."
*   **Interview**: "What is the result of `Object.getPrototypeOf([])`?"
    *   **Candidate**: `Array.prototype`. And `Object.getPrototypeOf(Array.prototype)` is `Object.prototype`.
*   **Interview**: "How does the `new` keyword work internally?"
    *   **Candidate**: 
        1. Creates a new empty object.
        2. Sets the `[[Prototype]]` (__proto__) of this object to the constructor's `prototype`.
        3. Executes the constructor function with `this` bound to the new object.
        4. Returns the object (unless the constructor returns another object).

## 5. Practice Examples
See [basics.js](file:///home/ravi/Desktop/interview/js/topics/03-prototypes/basics.js) for live code execution.
