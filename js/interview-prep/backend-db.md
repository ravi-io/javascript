# Node.js, Express & Database Questions

These questions focus on server-side logic, API design, and data persistency.

---

### 1. "What is Node.js and why is it used for back-end development?"

**Normal Answer:**
"Node.js is a runtime that lets you run JavaScript on the server. It's fast and uses an event-driven, non-blocking I/O model."

**Technical Answer:**
"Node.js is built on **Chrome's V8 engine**. Its beauty lies in the **Event-Driven Architecture** and the **Non-blocking I/O**.
- **Non-blocking I/O:** Node can handle multiple requests at the same time without waiting for a database query to finish before starting the next task.
- **Single language:** It allows developers to use the same language (JavaScript/TypeScript) on both the frontend and backend, which improves productivity and code sharing."

**Cross-Question: "What is the difference between `fs.readFile` and `fs.readFileSync`?"**
*   **Answer:** "`fs.readFile` is asynchronous; it doesn't block the execution of the rest of the code. `fs.readFileSync` is synchronous; it stops the whole program until the file is read. We almost always use the async version in production to keep the server responsive."

---

### 2. "How do you design a RESTful API?"

**Detailed Answer:**
"A good RESTful API follows standard principles:
1.  **Use HTTP Verbs:** Use `GET` for fetching, `POST` for creating, `PUT/PATCH` for updating, and `DELETE` for removing.
2.  **Resource-based URLs:** Use nouns, not verbs (e.g., `/api/games` instead of `/api/getGames`).
3.  **Statelessness:** Each request should contain all the information needed to process it (e.g., using JWTs).
4.  **Error Handling:** Use proper status codes: `200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, and `500 Server Error`."

**Example from your projects:**
"In my **E-Commerce** project, I built a REST API using Express. For example, to manage the shopping cart, I used `POST /api/cart` to add items and `DELETE /api/cart/:id` to remove items. I also used a consistent error-handling middleware to catch all errors and return a JSON response with the error message and status code."

---

### 3. "What is the difference between MongoDB and PostgreSQL?"

**Technical Answer:**
"It's a battle between **NoSQL** and **SQL**:
- **MongoDB (NoSQL):** Document-based (BSON). It's flexible and great for unstructured data or rapidly changing requirements. It scales horizontally easily. I used this for the **Gaming Hub** because game data can have varying fields.
- **PostgreSQL (SQL):** Relational database. It's excellent for complex queries, transactions (ACID compliance), and structured data where relationships are key. I used this for **Face-Talk-AI** because message history and user relationships are strictly defined."

---

### 4. "You mentioned Prisma ORM and Drizzle ORM. Which one do you like more?"

**Detailed Answer:**
"Both are modern 'Type-Safe' ORMs:
1.  **Prisma:** Uses a custom schema file (`schema.prisma`) and a powerful CLI to generate a client. It's very developer-friendly and handles migrations beautifully.
2.  **Drizzle:** It's much closer to 'Pure SQL'. You define your schema in TypeScript files. It has almost zero overhead (faster performance) and works great in serverless environments because it's lightweight.
**Example:** For my **Face-Talk-AI** project, I chose **Drizzle** because I wanted the best possible performance for a chat application and I liked how it integrates with TypeScript without a separate code-generation step."

---

### 5. "How do you handle Authentication in your apps?"

**Answer:**
"I typically use **JWT-based authentication**. 
1.  **Process:** When a user logs in, the server verifies credentials and signs a JWT (usually using `bcrypt` for password hashing).
2.  **Storage:** I store this token in an **HTTP-only cookie** or the frontend's local storage (though cookies are safer against XSS).
3.  **Verification:** For every protected route, I use a middleware that checks the token, decodes the user ID, and attaches it to the request object.
**Example:** In my **E-Commerce** app, I also implemented email verification as an extra layer of security before allowing users to checkout."
