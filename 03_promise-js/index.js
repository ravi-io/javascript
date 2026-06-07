// Create a Promise that resolves after 2 seconds.

// const myPromsie = new Promise((resolve, reject) => {
//   const condition = false; // Change this to false to see the reject case

//   if (condition) {
//     setTimeout(() => {
//       resolve('Promise resolved successfully!');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject('Promise rejected!');
//     }, 2000);
//   }
// });

// // Consume the Promise
// myPromsie
//   .then((message) => {
//     console.log('Success:', message);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// Output when condition is true:
// Success: Promise resolved successfully!

// Output when condition is false:
// Error: Promise rejected!

// ==============================================================================================================

// Create a Promise that is already resolved

// setTimeout(() => {
//   Promise.resolve().then(() => console.log('Promise already resolved!'));
// });

// setTimeout(() => {
//   console.log('That macrotask block is executed!');
// });

// Promise.reject()
//   .then(() => console.log('Promise already rejected!'))
//   .catch((err) => console.log('Caught the error here!'));

// ================================================================================================

// Promise.resolve('Ravi Karmakar')
//   .then((val) => {
//     console.log(val);
//     throw new Error('Create new error first then block!');
//   })
//   .catch((err) => {
//     console.log(err.message);
//     return 'return something form error block!';
//   })
//   .then((val) => {
//     console.log(val);
//     return '3rd then block return something!';
//   })
//   .then((val) => {
//     console.log(val);
//     throw new Error('4th then block return the data!');
//   })
//   .catch((err) => {
//     console.log(err.message);
//     return 'the last return form the catch block!';
//   })
//   .then((data) => console.log(data));

// ----------------------------------------------------

// Promise.resolve('Step 1')
//   .then((val) => {
//     console.log(val);
//     throw new Error('Step 2 Failed');
//   })
//   .catch((err) => {
//     console.log(err.message);
//     return 'Step 3 Recovered';
//   })
//   .then((val) => {
//     console.log(val);
//     throw new Error('Step 4 Faild the data fetching!');
//   })
//   .catch((err) => {
//     console.log('Final catch:', err.message);
//   });

// ------------------------------------------------------

// Promise.reject('Initial reject')
//   .then(() => {
//     console.log('rejected then block code throw the error for testing');
//     throw new Error('Error by the then block!');
//     //this "then' black never execute, the promise already rejected that's why!
//   })
//   .catch((err) => {
//     console.log(err);
//     return 'data return by catch block';
//   })
//   .then((val) => {
//     console.log(val);
//     throw new Error('Error by 2nd then!');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//  ==============================================================================================================

// const promise = new Promise((resolve, reject) => {
//   resolve('Success A');
//   reject(new Error('Error B'));
//   resolve('Success C');
// });

// promise
//   .then((res) => {
//     console.log('Then:', res);
//   })
//   .catch((err) => {
//     console.log('Catch:', err.message);
//   });

// ==================================================================

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log('Promise 1');
//   })
//   .then(() => {
//     console.log('Promise 2');
//   });

// console.log('End');

// ======================================================================================

// Problem 4: Coding Challenge (Polyfill)
// In senior interviews, you might be asked: "Can you write a function promiseAll(promises)
// from scratch that behaves exactly like Promise.all()?"

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let promisesCompleted = 0;

    if (promises.length === 0) {
      return resolve(results);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          results[index] = val;
          promisesCompleted += 1;

          if (promisesCompleted === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
