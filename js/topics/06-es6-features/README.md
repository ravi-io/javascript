# ES6+ Features 🚀

ES6 (ECMAScript 2015) and subsequent updates transformed JavaScript into a more powerful and cleaner language.

## 1. Key Features
*   **Arrow Functions**: Shorter syntax, lexical `this`.
*   **Destructuring**: Easily extract values from arrays and objects.
*   **Template Literals**: Multi-line strings and interpolation using backticks `` ` ``.
*   **Spread & Rest Operators (`...`)**: Expanding arrays or gathering arguments.
*   **Modules**: `import` and `export`.
*   **Classes**: Better syntax for prototypes.
*   **Map & Set**: New collection types.
*   **Optional Chaining (`?.`)**: Safely access nested properties.
*   **Nullish Coalescing (`??`)**: Return right-hand side when left is `null` or `undefined`.

## 2. Interview Questions ❓

### Q1: Difference between Spread and Rest?
**Answer**: 
*   **Spread**: "Spreads" an array into individual elements (e.g., `[...arr]`). Used in function calls or array literals.
*   **Rest**: "Gathers" individual elements into an array (e.g., `function(first, ...rest) {}`). Used in function parameters or destructuring.

### Q2: Why use `Map` over a regular Object?
**Answer**: 
1. `Map` keys can be any type (including objects). Objects only allow strings/symbols.
2. `Map` maintains insertion order.
3. `Map` is more performant for frequent addition/removal of keys.
4. `Map` has a built-in `size` property.

### Q3: What is the Temporal Dead Zone (revisited)?
**Answer**: A behavior of `let` and `const` variables that makes them inaccessible before their declaration line.

## 3. Practice Examples
See [basics.js](file:///home/ravi/Desktop/interview/js/topics/06-es6-features/basics.js) for live code execution.
