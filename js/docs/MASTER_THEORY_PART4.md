# JS Theory Masterclass: Part 4 - Asynchronous JavaScript ⏳

How JavaScript handles non-blocking execution and the Event Loop.

---

### 41. What is the Event Loop?
*   **Detailed Answer**: Monitors Call Stack and Queues to manage async execution.

---

### 42. What are Callbacks?
*   **Detailed Answer**: A function passed into another function to be executed once an operation is complete.
*   **Why**: Used for async tasks like network requests.
*   **Cons**: Leads to **Callback Hell** if deeply nested.

---

### 43. What is a Promise?
*   **Detailed Answer**: An object representing the eventual completion (or failure) of an asynchronous operation.
*   **How it Works**: Has 3 states (Pending, Fulfilled, Rejected). Once settled, it stays settled (Immutable).

---

### 44. States of a Promise?
*   **Detailed Answer**: 
    1. **Pending**: Initial state, neither fulfilled nor rejected.
    2. **Fulfilled**: Operation completed successfully.
    3. **Rejected**: Operation failed.

---

### 45. What is Promise Chaining?
*   **Detailed Answer**: Executing multiple asynchronous operations one after another by returning a new promise from a `.then()` block.
*   **Example**: `fetch().then(res => res.json()).then(data => console.log(data))`.

---

### 46. `async/await`?
*   **Detailed Answer**: Modern syntax for Promises. 
*   **Pros**: Makes async code look synchronous and readable.
*   **Error Handling**: Uses `try/catch` instead of `.catch()`.

---

### 47. Microtasks vs Macrotasks?
*   **Detailed Answer**: 
    - **Microtasks**: Promises, queueMicrotask (Higher priority).
    - **Macrotasks**: setTimeout, setInterval, I/O (Lower priority).
*   **Rule**: The Event Loop will not move to the next Macrotask until the entire Microtask queue is empty.

---

### 48. `Promise.all()`?
*   **Detailed Answer**: A method that takes an array of promises and returns a single promise that resolves when ALL of them have resolved.
*   **Fails Fast**: If any promise rejects, the entire thing rejects immediately.

---

### 49. `Promise.race()`?
*   **Detailed Answer**: Resolves or rejects as soon as the **very first** promise in the array settles.
*   **Use Case**: Timeout pattern for network requests.

---

### 50. What is Callback Hell?
*   **Detailed Answer**: A situation with deeply nested callbacks that make code hard to read and maintain.
*   **Solution**: Flatten using Promises or `async/await`.

---
🚀 *Masterclass Complete.*
