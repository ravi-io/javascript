// **What is Callback Hell in JavaScript?

/* -> Callback Hell occurs when multiple asynchronous operations are nested within each other, 
      leading to deeply indented and hard-to-read code. It makes the code difficult to maintain and debug.
*/

// **Example of Callback Hell:

setTimeout(() => {
  console.log('One Second Passed');

  setTimeout(() => {
    console.log('Two Seconds Passed');

    setTimeout(() => {
      console.log('Three Seconds Passed');

      setTimeout(() => {
        console.log('Four Seconds Passed');

        setTimeout(() => {
          console.log('Five Seconds Passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/* In this example, we have three asynchronous functions: fetchData, processData, and saveData. Each function takes a callback that is called when the operation is complete. The callbacks are nested within each other, creating a pyramid-like structure that is difficult to read and maintain. This is a classic example of Callback Hell. */
