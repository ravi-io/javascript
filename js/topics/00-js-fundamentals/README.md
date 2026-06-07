# JavaScript Fundamentals 🧱

Before diving into advanced topics, you must master the building blocks of JavaScript.

## 1. Data Types
JavaScript is a **dynamically typed** language. There are 8 basic data types:

### Primitive Types (Passed by Value):
1.  **Number**: Integers and floats.
2.  **BigInt**: For very large integers.
3.  **String**: Textual data.
4.  **Boolean**: `true` or `false`.
5.  **null**: Represents an intentional absence of value.
6.  **undefined**: Represents a variable that has been declared but not assigned a value.
7.  **Symbol**: Unique and immutable primitive values.

### Non-Primitive Types (Passed by Reference):
8.  **Object**: Used to store collections of data (Arrays, Functions are also objects).

## 2. Type Coercion & Equality
Type coercion is the automatic conversion of values from one data type to another.

*   **Loose Equality (`==`)**: Performs type coercion if the types are different before comparing.
*   **Strict Equality (`===`)**: Does NOT perform coercion. Compares both value and type.

## 3. Interview Questions ❓

### Q1: What is the difference between `null` and `undefined`?
**Answer**: 
*   `undefined` means a variable has been declared but not yet assigned a value. 
*   `null` is an assignment value. It is used to represent "no value" or "empty". 
*   `typeof undefined` is `"undefined"`, but `typeof null` is `"object"` (this is a long-standing bug in JS).

### Q2: Explain Type Coercion with examples.
**Answer**: 
*   `5 + "5" = "55"` (Number + String = String)
*   `5 - "2" = 3` (String is converted to Number for subtraction)
*   `false == 0` (true)
*   `false === 0` (false)

### Q3: What are Truthy and Falsy values?
**Answer**: 
*   **Falsy values**: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.
*   **Truthy values**: Everything else (including `[]`, `{}`, `"0"`, `"false"`).

### Q4: Difference between Pass by Value and Pass by Reference?
**Answer**: 
*   **Pass by Value**: Primitives are copied. Changing one doesn't affect the other.
*   **Pass by Reference**: Objects/Arrays store a reference (address). Changing properties of one affects all references pointing to the same object.

## 4. Cross-Questions (Deep Dive) 🌊

*   **Interview**: "Is JavaScript a purely object-oriented language?"
    *   **Candidate**: "No, it is a multi-paradigm language. It supports procedural, object-oriented (prototypal), and functional programming."
*   **Interview**: "What happens when you do `[] == ![]`?"
    *   **Candidate**: "It returns `true`. `![]` is `false`. So it becomes `[] == false`. Then `[]` is coerced to an empty string `""`, and `false` is coerced to `0`. So it's `"" == 0`. Finally, `""` is coerced to `0`, resulting in `0 == 0` which is `true`."
*   **Interview**: "How can you truly check if a value is an object (excluding null)?"
    *   **Candidate**: `typeof val === 'object' && val !== null`.

## 5. Practice Examples
See [basics.js](file:///home/ravi/Desktop/interview/js/topics/00-js-fundamentals/basics.js) for live code execution.
