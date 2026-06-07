# Asynchronous JavaScript ⏳

JavaScript is single-threaded, yet it can handle complex asynchronous operations thanks to the Event Loop.

## 1. The Event Loop & Concurrency Model
JS has a **Call Stack**, a **Callback Queue** (Macrotasking), and a **Microtask Queue**.

*   **Call Stack**: Where the code is executed.
*   **Web APIs**: Browser features like `setTimeout`, `fetch`, DOM events.
*   **Callback Queue (Task Queue)**: Where `setTimeout`, `setInterval` callbacks wait.
*   **Microtask Queue**: Where Promise `.then()` callbacks and `queueMicrotask` wait. **Microtasks have higher priority than Macrotasks.**

## 2. Promises
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
*   States: `pending`, `fulfilled`, `rejected`.

## 3. Interview Questions ❓

### Q1: What is the output of this code?
```javascript
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```
**Answer**: `Start`, `End`, `Promise`, `Timeout`.
1. `Start` is logged.
2. `setTimeout` goes to Web API, then Callback Queue.
3. `Promise` goes to Microtask Queue.
4. `End` is logged.
5. Microtask Queue is checked -> `Promise`.
6. Callback Queue is checked -> `Timeout`.

### Q2: What is the difference between `Promise.all` and `Promise.allSettled`?
**Answer**: 
*   `Promise.all`: Fails fast. If any promise rejects, the whole thing rejects immediately.
*   `Promise.allSettled`: Waits for all promises to finish (either fulfilled or rejected) and returns an array of objects describing the outcome of each.

### Q3: Why use `async/await` over `.then()`?
**Answer**: Syntactic sugar that makes asynchronous code look synchronous. It's easier to read, write, and debug (especially with try/catch).

## 4. Cross-Questions (Deep Dive) 🌊

*   **Interview**: "What happens if a microtask keeps adding more microtasks?"
    *   **Candidate**: "It will starve the Macrotask queue (and the UI) because the Event Loop will keep processing microtasks until the queue is empty before moving to the next task."
*   **Interview**: "How do you handle multiple dependent async calls?"
    *   **Candidate**: "Use `await` sequentially or `Promise.all` if they can run in parallel."
*   **Interview**: "What is 'Callback Hell' and why is it bad?"
    *   **Candidate**: "Deeply nested callbacks making code unreadable and hard to manage. Promises and Async/Await solved this."

## 5. Practice Examples
See [basics.js](file:///home/ravi/Desktop/interview/js/topics/04-async-js/basics.js) for live code execution.
