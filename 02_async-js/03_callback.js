// **What is a Callback in JavaScript?**
/* -> A callback is a function that is passed as an argument to another function and is executed after some operation has been completed.
   -> Callbacks are commonly used in asynchronous programming to handle tasks that take time to complete, such as fetching data from an API, reading files, or handling user interactions.
   -> They allow you to write code that can execute after a certain event has occurred or after a certain operation has completed, without blocking the main thread.
*/

// Synchronous Callback Example
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(callback, name) {
  return callback(name);
}

processUserInput(greet, 'Ravi Karmakar');

// In this example, the greet function is a synchronous callback that is passed to the processUserInput function. The callback is executed immediately after the name is defined, allowing us to greet the user without any delay.

// Asynchronous Callback Example

function fetchData(callback) {
  setTimeout(() => {
    const data = 'Data fetched from API';
    callback(data);
  }, 2000);
}

fetchData((result) => {
  console.log(result);
});

// In this example, the fetchData function simulates an asynchronous operation using setTimeout. The callback function is passed as an argument and is executed after the data is fetched, allowing us to handle the result without blocking the main thread.
