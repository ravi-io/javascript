# Module 2: React.js & Global Principles (20 Questions) ⚛️

React is about component-driven development. These questions test if you understand the "React Way" of thinking.

---

### Q21: What is the Virtual DOM?
*   **Answer**: A lightweight copy of the real DOM kept in memory. React syncs it with the real DOM after changes.
*   **How/Why**: It minimizes expensive DOM manipulations to improve performance.

### Q22: React vs Angular?
*   **Answer**: React is a library (View only); Angular is a full framework.
*   **Senior Context**: React gives more flexibility but requires you to choose your own libraries for routing/state.

### Q23: What are "Hooks" and why were they introduced?
*   **Answer**: Functions that let you use state and lifecycle features in functional components.
*   **Why**: To reuse stateful logic without the complexity of Class components and "HOCs".

### Q24: Explain the difference between `useState` and `useReducer`.
*   **Answer**: `useState` is for simple state; `useReducer` is for complex state logic with many sub-values or dependencies.

### Q25: When do you use `useEffect`?
*   **Answer**: For side effects like fetching data, manual DOM changes, or setting up subscriptions.

### Q26: What is the difference between `Props` and `State`?
*   **Answer**: Props are passed from outside (immutable); State is managed internally (mutable via setter).

### Q27: What is "Prop Drilling" and how do you avoid it?
*   **Answer**: Passing data through many layers of components that don't need it.
*   **Fix**: Use Context API or State Management libraries (Redux/Zustand).

### Q28: How does React perform better? (Reconciliation).
*   **Answer**: Using a "diffing" algorithm to compare the new Virtual DOM with the old one and only update what changed.

### Q29: What is React `Context API`?
*   **Answer**: A way to share global data (like themes or users) across the entire component tree without prop drilling.

### Q30: What are "Keys" in React and why are they important?
*   **Answer**: Unique identifiers for list items. They help React identify which items changed, were added, or removed.

### Q31: What is the difference between `useMemo` and `useCallback`?
*   **Answer**: `useMemo` memoizes a **value**; `useCallback` memoizes a **function**.
*   **Why**: To prevent unnecessary re-renders of child components.

### Q32: What is "Lifting State Up"?
*   **Answer**: Moving state to the closest common ancestor of components that need the same data.

### Q33: Explain "Controlled" vs "Uncontrolled" components.
*   **Answer**: Controlled: Data handled by React state; Uncontrolled: Data handled by the DOM (refs).

### Q34: What is `useRef`?
*   **Answer**: Accesses DOM nodes directly or stores mutable values that don't trigger re-renders.

### Q35: React Lifecycle Methods (Class) vs Hooks (Functional)?
*   **Answer**: Lifecycle: `componentDidMount`, `componentDidUpdate`. Hooks: `useEffect` handles these via its dependency array.

### Q36: What is a "Higher-Order Component" (HOC)?
*   **Answer**: A function that takes a component and returns a new component with added functionality.

### Q37: How to optimize a React app?
*   **Answer**: Code splitting (`React.lazy`), identifying unnecessary re-renders (Profiler), using `memo`, `useMemo`, and lazy loading images.

### Q38: What is `React.memo`?
*   **Answer**: A HOC that prevents a functional component from re-rendering if its props haven't changed.

### Q39: What are "Fragments"?
*   **Answer**: `<React.Fragment>` or `<>` lets you group elements without adding extra nodes to the DOM.

### Q40: Why can't we update state directly? (e.g., `this.state.a = 5`).
*   **Answer**: React needs the setter (`setState` or `setCount`) to trigger the re-render process. Direct mutation won't update the UI.

---
*(Next: Module 3 - Next.js)*
