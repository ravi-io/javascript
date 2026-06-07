# Module 4: Node.js & Express API Design (20 Questions) 🟢

Understanding the backend is crucial for a Full Stack role. These questions cover the engine (Node) and the framework (Express).

---

### Q61: What is Node.js?
*   **Answer**: An open-source, cross-platform JavaScript runtime environment that executes JS code outside a web browser (built on V8).
*   **Key Fact**: It's event-driven and non-blocking.

### Q62: Why use Node.js for backend?
*   **Answer**: High scalability for I/O bound tasks, same language (JS) for front/back, and a massive ecosystem (NPM).

### Q63: What is "Express.js" and why do we use it?
*   **Answer**: A minimal and flexible Node.js web application framework.
*   **Why**: Node's built-in `http` module is too low-level. Express provides routing, middleware, and request handling out of the box.

### Q64: What is "Middleware" in Express?
*   **Answer**: Functions that have access to the request (`req`), response (`res`), and the `next` function in the application’s request-response cycle.
*   **How**: Used for logging, authentication, or parsing JSON.

### Q65: Senior Question: How does Node.js handle concurrency if it's single-threaded?
*   **Answer**: Using the **Libuv** library and an Event Loop. It offloads heavy tasks (I/O, File System) to the OS kernel or a thread pool.

### Q66: Difference between `setImmediate()` and `process.nextTick()`?
*   **Answer**: `nextTick` fires immediately after the current operation; `setImmediate` fires on the next check phase of the event loop.

### Q67: What are "Streams" in Node.js?
*   **Answer**: Reading/writing data in small, continuous chunks instead of loading everything into memory at once. Best for large files or video.

### Q68: What is "REPL" in Node?
*   **Answer**: Read-Eval-Print Loop. An interactive shell where you can run JS code directly.

### Q69: How to prevent "Callback Hell" in Node?
*   **Answer**: Promises and `async/await`.

### Q70: What is `package.json`?
*   **Answer**: The manifest of the project. It lists dependencies, scripts, and metadata.

### Q71: Difference between `Dependencies` and `DevDependencies`?
*   **Answer**: Dependencies are needed for production; DevDependencies are only for development (testing, linting).

### Q72: What are "Environment Variables" (`.env`)?
*   **Answer**: Storing sensitive data (API keys, DB URLs) outside the code.

### Q73: What is CORS?
*   **Answer**: Cross-Origin Resource Sharing. A security feature that allows/restricts resources on a webpage to be requested from another domain.

### Q74: How to handle errors globally in Express?
*   **Answer**: Create a middleware with 4 arguments: `(err, req, res, next)`.

### Q75: What is "Body Parser"?
*   **Answer**: Middleware to parse incoming request bodies (like JSON) before your handlers.

### Q76: Difference between `Cluster` and `Worker Threads`?
*   **Answer**: Cluster: Multi-process (copies of the whole app); Worker Threads: Multi-threaded (runs inside one process).

### Q77: What is JWT (JSON Web Token)?
*   **Answer**: A secure way to transmit information between parties as a JSON object. Used for stateless authentication.

### Q78: Difference between Authentication vs Authorization?
*   **Answer**: AuthN: Verifying WHO you are. AuthZ: Verifying WHAT you are allowed to do.

### Q79: What is the "Event Emitter"?
*   **Answer**: A class in Node that allows you to create, fire, and listen for custom events.

### Q80: How to scale a Node.js application?
*   **Answer**: Horizontally (Load Balancers/Clusters) and Vertically (increasing hardware resources).

---
*(Next: Module 5 - Databases)*
