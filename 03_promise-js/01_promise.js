// Promise.all, Promise.race, Promise.allSettled, Promise.any
// https://dev.to/shameel/javascript-promise-all-vs-allsettled-and-race-vs-any-3foj#promiseallSettled-section

// 1. Promise.all()
// How it works: Waits for all promises in the array to resolve successfully.
// Result: Returns an array of all the resolved values order wise.
// Failure mode: Fails fast. If any promise rejects, the entire method immediately rejects with that specific error.
// When to use: When you need all data to be fetched successfully before moving to the next step.

// const promise1 = Promise.resolve('Ravi Karmakar');
// const promise2 = 10;

// const promise3 = new Promise((_, reject) => {
//   const isTrue = false;
//   setTimeout(() => {
//     if (isTrue) {
//       resolve('Mohan kumar');
//     } else {
//       reject('The promise3 is rejected!');
//     }
//   }, 2000);
// });

// Array Return
// Promise.all([promise1, promise2, promise3])
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Destructuring Return

// Promise.all([promise1, promise2, promise3])
//   .then(([data1, data2, data3]) => {
//     console.log(data1);
//     console.log(data2);
//     console.log(data3);
//   })
//   .catch((error) => console.log('Rejected Promise:', error));

// 2. Promise.allSettled()
// How it works: Waits for all promises to finish settling, meaning they either resolved successfully or were rejected.
// Result: Returns an array of objects describing the outcome of each individual promise (giving you a { status, value } or { status, reason }).
// Failure mode: This method never "fails fast". Even if one or more promises fail, the main promise still resolves with the statuses of everything.
// When to use: When you want to execute multiple promises and need to know the outcome of each one, without one failure breaking the entire process.

// const promise1 = new Promise((resolve) =>
//   setTimeout(() => resolve('Promise 1 resolved'), 1000)
// );
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve('Promise 2 resolved'), 500)
// );
// const promise3 = new Promise((resolve) =>
//   setTimeout(() => resolve('Promise 3 resolved'), 800)
// );

// const promisesArray = [promise1, promise2, promise3];

// Promise.allSettled(promisesArray).then((results) => {
//   console.log('All promises settled:', results);
// });

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 1 resolved'), 1000)
);
const promise2 = new Promise((_, reject) =>
  setTimeout(() => reject('Promise 2 resolved'), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 3 resolved'), 800)
);

const promisesArray = [promise1, promise2, promise3];

Promise.allSettled(promisesArray).then((results) => {
  console.log('All promises settled:', results);
});
