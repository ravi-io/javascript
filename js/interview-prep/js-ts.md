# JavaScript & TypeScript Questions

Since you mention TypeScript as your primary stack, expect deep questions on these topics.

---

### 1. "What is the difference between `var`, `let`, and `const`?"

**Normal Answer:**
"`var` is old, `let` and `const` are new. Use `const` for things that don't change and `let` for things that do. `var` is function-scoped while `let`/`const` are block-scoped."

**Technical Answer:**
"The key differences are **Scope**, **Hoisting**, and **Reassignment**.
1.  **Scope**: `var` is **function-scoped**, meaning it leaks outside `if` blocks or `for` loops. `let` and `const` are **block-scoped**, which prevents many bugs.
2.  **Hoisting**: `var` is hoisted and initialized as `undefined`. `let` and `const` are also hoisted but stay in a **Temporal Dead Zone (TDZ)** until the declaration is reached, meaning you'll get a ReferenceError if you try to use them before declaration.
3.  **Reassignment**: `const` creates a read-only reference, meaning it cannot be reassigned (though objects or arrays assigned to it can still be modified). `let` and `var` allow reassignment."

**Cross-Question: "Can you change the properties of an object declared with `const`?"**
*   **Answer:** "Yes. `const` prevents the reassignment of the variable identifier itself, but it does not make the value immutable. To make an object completely immutable, you would use `Object.freeze()`."

---

### 2. "How does the Event Loop work in JavaScript?"

**Detailed Answer:**
"JavaScript is single-threaded, meaning it can only do one thing at a time. The **Event Loop** is the mechanism that allows it to handle asynchronous operations (like API calls) without blocking the main thread.
1.  **Call Stack:** Where synchronous code is executed.
2.  **Web APIs/Node APIs:** Where async tasks (setTimeout, Fetch) are handled by the environment.
3.  **Task Queue (Macrotasks):** Where callbacks for things like `setTimeout` go.
4.  **Microtask Queue:** Where **Promises** (`.then`, `async/wait`) go.
**The Loop:** The Event Loop checks if the Call Stack is empty. If it is, it first processes all **Microtasks** and then processes one **Macrotask** from the Task Queue. This is why Promises usually run before `setTimeout` even if they have the same delay."

**Cross-Question: "What is the output of this code?"**
```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
```
*   **Answer:** `1, 4, 3, 2`. 1 and 4 are synchronous. 3 is a Microtask (Promise). 2 is a Macrotask (setTimeout).

---

### 3. "Why do we use TypeScript instead of plain JavaScript?"

**Detailed Answer:**
"TypeScript is JavaScript with **syntax for types**. It caught bugs during development rather than at runtime.
- **Type Safety:** It prevents passing a string where a number is expected. 
- **Intellisense:** In VS Code, I get much better auto-completion and documentation because the editor knows the shape of my objects.
- **Refactoring:** I can safely rename a property in one file, and TypeScript will automatically flag every other file where that property is used if it's not updated."

**Example from your projects:**
"In my **Face-Talk-AI** project, I used **TRPC** which uses TypeScript to share types between my backend and frontend. If I changed the input schema for a chat route on the server, my React frontend would immediately show a red underline until I updated the form fields. This makes the code **self-documenting** and extremely robust."

---

### 4. "What is the difference between an `Interface` and a `Type` in TypeScript?"

**Technical Answer:**
"They are very similar, but have a few key differences:
1.  **Merging:** Interfaces can be declared multiple times and they will move together (**Declaration Merging**). Types cannot be merged.
2.  **Extends:** Interfaces use the `extends` keyword, while Types use **Intersections** (`&`).
3.  **Use Case:** I generally use `interface` for public APIs or object shapes that might be extended. I use `type` for Unions (e.g., `type Status = 'loading' | 'success'`), Tuples, or complex utility types."

**Cross-Question: "Which one do you prefer?"**
*   **Answer:** "I usually prefer `interface` for defining the shape of objects or components because of the better error messages and the ability to merge. However, for complex logic or union types, `type` is essential."
