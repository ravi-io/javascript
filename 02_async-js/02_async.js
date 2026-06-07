// **What is Asynchronous JavaScript?**

/* -> Asynchronous JavaScript is a programming paradigm that allows you to perform tasks without blocking the main thread. 
   -> It enables you to execute code while waiting for other operations to complete, such as fetching data from an API, reading files, or handling user interactions.
   -> Asynchronous JavaScript is often achieved using callbacks, promises, and async/await syntax.
*/

let str1 = 'Hello';
let str2 = 'World';

console.log(str1);
setTimeout(() => {
  console.log('waitng.....');
}, 4000);
console.log(str2);

// In this example, the setTimeout function is used to simulate an asynchronous operation. The callback function will be executed after the current call stack is cleared, allowing str2 to be printed without blocking the execution of the code.
