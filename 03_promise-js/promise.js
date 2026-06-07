console.log('Script StartTimeout1ed....'); // immediately 1st log

setTimeout(() => {
  // Waiting in callback queue( MacroTask queue)
  console.log('Timeout1');
}, 0);

Promise.resolve() // promise alredy resolved..
  .then(() => console.log('Promise 1')) // this part only wait in the "microtask queue"
  .then(() => console.log('Promise 2')); // after first then() execution it will move in microtask queue

async function test() {
  // function stored in memory not executed now
  console.log('Async function started....'); // immediately 2nd logg

  await Promise.resolve(); // await pause the all rest of the programmes

  console.log('Async End'); //

  setTimeout(() => {
    console.log('Timeout2');
  }, 0);
}

test(); // function call for execution

console.log('Script Ended....'); // logged after fucntion call the "Promise"

// Global Code Execution              // MacroTask--------                 // MicroTask
// Script Started....                 // Timeout1( callback queue )done    // Promise 1 ( microtask queue) -> logged
//                                    // Timeout2 (callback queue )        // Promise 2 ( microtask queue)

// Output:

// Script StartTimeout1ed....
// Async function started....
// Script Ended....
// Promise 1
// Async End
// Promise 2
// Timeout1
// Timeout2
