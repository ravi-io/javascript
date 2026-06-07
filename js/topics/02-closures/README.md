# Closures and Lexical Environment 🔒

Closures are one of the most powerful and feared concepts in JavaScript. Let's break it down.

## 1. What is a Closure?
A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (its **lexical environment**).

In simple terms: A function always remembers its lexical scope even when the function is executed outside that lexical scope.

## 2. Lexical Environment
A Lexical Environment consists of:
*   **Local Memory**: Variables and functions defined in the current scope.
*   **Reference to Parent Lexical Environment**: A pointer to the memory of the outer scope.

## 3. Interview Questions ❓

### Q1: Can you give a simple example of a closure?
```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const increment = outer();
increment(); // 1
increment(); // 2
```
**Answer**: Here, `inner` forms a closure with the scope of `outer`. Even after `outer` has finished execution, `inner` still has access to `count`.

### Q2: What are the use cases of Closures?
**Answer**:
1.  **Data Encapsulation/Private Variables**: Preventing direct access to variables.
2.  **Function Factories**: Functions that create other functions.
3.  **Memoization**: Caching results of expensive function calls.
4.  **Module Pattern**: Organizing code into private and public members.

### Q3: What is Currying?
**Answer**: Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument. It relies heavily on closures.

## 4. Cross-Questions (Deep Dive) 🌊

*   **Interview**: "Do closures cause memory leaks? How?"
    *   **Candidate**: "Yes, because variables in a closure are not garbage collected until the closure itself is eligible for GC. If you have many large objects in a closure that is kept alive, it can lead to high memory usage."
*   **Interview**: "How do you avoid memory leaks with closures?"
    *   **Candidate**: "By setting the closure to `null` when it's no longer needed, or by avoiding keeping large, unused data in the closure's scope."
*   **Interview**: "Is there a performance cost to closures?"
    *   **Candidate**: "Slightly, because the engine needs to maintain the lexical environment in memory. In modern engines (V8), this is highly optimized, but excessive or poorly designed closures can still impact performance."

## 5. Practice Examples
See [basics.js](file:///home/ravi/Desktop/interview/js/topics/02-closures/basics.js) for live code execution.
