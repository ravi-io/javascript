# Project Deep Dives

This file contains specific questions an interviewer might ask about your portfolio projects.

---

## 1. Gaming Hub
**Stack:** React, TypeScript, Node.js, Express, MongoDB, Zustand.

### "Why did you choose Zustand over Redux for this project?"
*   **Answer:** "The Gaming Hub is fundamentally about browsing and filtering. I needed a way to share the search query and genre filters across the app. Redux would have been overkill for this. Zustand allowed me to create a store in about 10 lines of code without any complex boilerplate, making the development faster and the bundle size smaller."

### "How did you implement the JWT-based authentication?"
*   **Answer:** "When a user signs up or logs in, I hash their password using `bcrypt`. Then I generate a JWT that contains the user's ID. I send this token back to the frontend, which stores it. For every following request, I send this token in the header. The Express server has a middleware that uses `jsonwebtoken.verify()` to check if the user is who they say they are before allowing access to private routes."

---

## 2. Face-Talk-AI
**Stack:** Next.js, OpenAI API, TRPC, Drizzle ORM, TypeScript.

### "How does TRPC improve the developer experience in this project?"
*   **Answer:** "TRPC stands for 'TypeScript Remote Procedure Call'. It allows me to define my API functions on the server and call them on the client as if they were simple local functions. The best part? **Full Type Safety.** If I change a return type on the server, my frontend code will show a TypeScript error immediately. It removes the need for manual API documentation or types for fetch requests."

### "Explain the AI conversation logic."
*   **Answer:** "I integrated the OpenAI API. When a user sends a message, I send the entire conversation history (saved in PostgreSQL via Drizzle) along with the new message to OpenAI. This gives the AI 'context'. I then take the AI's response, display it to the user, and save it back to the database for future turns."

---

## 3. E-Commerce
**Stack:** Next.js, TypeScript, Prisma, Node.js, Express, PayPal API.

### "How did you handle Payment integration?"
*   **Answer:** "I used the **PayPal API**.
1.  **Frontend:** I use the PayPal SDK to render the 'Buy Now' buttons.
2.  **Order Creation:** When a user clicks, I call my backend to create an order in PayPal's system.
3.  **Callback:** Once the user pays, PayPal sends a 'Success' callback. My server then verifies the payment status using a secret key and updates the order status in my database to 'Paid' using Prisma."

### "Why did you use Prisma ORM here?"
*   **Answer:** "In an E-Commerce app, the data structure (Users, Products, Orders) is very rigid and needs relations. Prisma is excellent for this. Its auto-generated client makes it very easy to do complex queries like 'Find all orders for a specific user and include the product details for each item' with just a few lines of code."

---

## 4. Common Project Questions

### "How do you handle error handling in your Express APIs?"
*   **Answer:** "I use a **Centralized Error Handling Middleware**. Instead of putting `try-catch` blocks everywhere, I created a custom Error class and a middleware at the end of my Express chain. When an error occurs, I just call `next(error)`. This ensures that every error returns a consistent JSON response with a clear message and the correct status code."

### "How do you ensure your apps are responsive (Mobile & Desktop)?"
*   **Answer:** "I use **Tailwind CSS** as it makes responsive design very easy with its mobile-first approach. I use utility classes like `md:grid-cols-3` or `lg:flex-row`. I also test my UI using Chrome DevTools across multiple screen sizes to ensure everything from a small iPhone to a large monitor looks perfect."
