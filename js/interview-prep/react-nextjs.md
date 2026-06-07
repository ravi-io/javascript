# React & Next.js Questions

These questions test your understanding of how to build modern, efficient user interfaces.

---

### 1. "What are React Hooks and why do we use them?"

**Normal Answer:**
"Hooks like `useState` and `useEffect` let us use state and other React features in functional components without writing a class."

**Technical Answer:**
"Hooks were introduced to solve problems with **Reusability** and **Complexity** in class components.
- **useState:** Manages local state within a component.
- **useEffect:** Handles side effects like fetching data or setting up subscriptions. It replaces lifecycle methods like `componentDidMount` and `componentDidUpdate`.
- **useMemo & useCallback:** Used for performance optimization by memoizing values or functions to prevent unnecessary re-renders.
**Benefits:** Hooks allow us to split one component into smaller functions based on what pieces are related (like setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods."

**Cross-Question: "What is the dependency array in `useEffect`?"**
*   **Answer:** "It's the second argument to `useEffect`. If it's an empty array `[]`, the effect runs once after the initial render. If it contains variables, the effect re-runs whenever any of those variables change. If it's omitted, the effect runs after every single render."

---

### 2. "You've used Redux Toolkit and Zustand. Which one do you prefer and why?"

**Detailed Answer:**
"I've used both for different needs:
1.  **Redux Toolkit (RTK):** Great for large applications with complex state updates. It has a standard 'boilerplate' that is very good for team consistency. RTK Query is also amazing for data fetching.
2.  **Zustand:** My personal favorite for most projects (like my **Gaming Hub**). It's extremely lightweight, has almost zero boilerplate, and uses a simplified API. It doesn't wrap the app in a Provider, which can lead to better performance in some cases.
**Example:** In my **Gaming Hub**, I used **Zustand** to manage the global 'Genre' filter. It allowed me to update the filter from a sidebar and have the game grid react instantly without passing props through five levels of components."

---

### 3. "What is the Next.js App Router and how is it different from the Pages Router?"

**Technical Answer:**
"The **App Router** (introduced in Next.js 13) is built on **React Server Components (RSC)**.
- **Server Components:** By default, components in the `app` directory are Server Components. They fetch data on the server and send zero JavaScript to the client, which makes the initial load extremely fast.
- **Nested Routing:** It uses a folder-based routing system where each folder represents a route segment, and files like `layout.js` and `page.js` define the structure.
- **Better Data Fetching:** We can use `async/await` directly inside Server Components, removing the need for `getStaticProps` or `getServerSideProps`."

**Example from your projects:**
"In my **Face-Talk-AI** project, I used the App Router. This allowed me to render the chat UI on the server for better SEO and speed, while using `'use client'` only for the interactive parts like the send button and input field."

---

### 4. "How do you optimize performance in a React application?"

**Detailed Answer:**
"Optimization should happen at multiple levels:
1.  **Reducing Re-renders:** Using `React.memo` for components, and `useMemo`/`useCallback` for expensive calculations or function references.
2.  **Lazy Loading:** Using `React.lazy` and `Suspense` or Next.js `dynamic()` imports to split the code and only load components when they are needed.
3.  **Image Optimization:** Using the Next.js `<Image />` component which automatically resizes and lazy-loads images.
4.  **State Management:** Keeping state as local as possible. Moving state up only when necessary to avoid re-rendering large parts of the tree."

**Cross-Question: "What is 'Prop Drilling'?"**
*   **Answer:** "It's when you pass data through many layers of components that don't need it, just to get it to a child component at the bottom. I solve this using **Composition** (passing components as children) or **Global State Management** tools like Zustand or Context API."
