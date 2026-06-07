// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows us to handle asynchronous operations in a more manageable way, avoiding callback hell and making our code cleaner and easier to read.

// const productsData = fetch('https://dummyjson.com/products');

// Using then() and catch() method we are consuming the "Promise"
// productsData
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log('Handled Error: ', err))
//   .finally(() => console.log('Fetch operation completed!')); // It will always execute whether the promise is resolved or rejected

// How to Create "Promise"

// const newPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve('Promise resolved successfully!');
//   } else {
//     reject('Promise rejected!');
//   }
// });

// console.log(newPromise);
// newPromise.then((msg) => console.log(msg)).catch((err) => console.error(err));

// const lottery = new Promise((resolve, reject) => {
//   console.log('Lottery draw is happening...');

//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You won!!!');
//     } else {
//       reject('Better luck for next time');
//     }
//   }, 5000);
// });

// lottery.then((msg) => console.log(msg)).catch((err) => console.error(err));

// https://www.freecodecamp.org/news/asynchronous-javascript/ -------------------------------------------------------

// ==================================== Consume "Promise" using Async/await ============================================================

// const fetchProducts = async function () {
//   const res = await fetch('https://dummyjson.com/products');
//   const data = await res.json();
//   console.log(data);
// };

// fetchProducts();
// console.log('FIRST');

// ==================================== Error Handling with try...catch() =====================================================
// const fetchProductsWithErrorHandling = async function () {
//   try {
//     const res = await fetch('https://dummyjson.com/products'); // Wrong URL to trigger error
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error('Handled Error: ', err);
//   } finally {
//     console.log('Fetch operation completed!');
//   }
// };

// fetchProductsWithErrorHandling();

// ====================================== Return Values from Async Functions ====================================================

// const fetchProducts = async function () {
//   try {
//     const res = await fetch('https://dummyjson.com/products');
//     if (!res.ok) {
//       throw new Error('Custom Error');
//     }
//     const data = await res.json();
//     console.log(data);
//     return 'Done with fetchAPI';
//   } catch (err) {
//     console.log(err);
//     throw new Error('Custom Error');
//   }
// };

// console.log(fetchProducts()); // Not consuming the returned promise

// Using then() and catch() to consume the returned promise
// fetchProducts()
//   .then((msg) => console.log(msg))
//   .catch((err) => console.error('Handled Error: ', err));

// Using async/await to consume the returned promise
// const consumeFetchProducts = async function () {
//   try {
//     const msg = await fetchProducts();
//     console.log(msg);
//   } catch (err) {
//     console.error('Handled Error: ', err);
//   }
// };

// ============================ How to Run Promises in Parallel =========================================

// const fetchProductByCategory = async function (smartphones, laptops, beauty) {
//   try {
//     const res1 = await fetch(
//       `https://dummyjson.com/products/category/${smartphones}`
//     );
//     const res2 = await fetch(
//       `https://dummyjson.com/products/category/${laptops}`
//     );
//     const res3 = await fetch(
//       `https://dummyjson.com/products/category/${beauty}`
//     );

//     const data1 = await res1.json();
//     const data2 = await res2.json();
//     const data3 = await res3.json();

//     console.log(data1.products[0]);
//     console.log(data2.products[0]);
//     console.log(data3.products[0]);

//     return 'Done with fetchProductByCategory';
//   } catch (error) {
//     console.log(error);
//     throw new Error('Custom Error!');
//   }
// };

// fetchProductByCategory('smartphones', 'laptops', 'beauty');

// =========================================== How to Use Promise.all() ===========================================

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise one resolved');
  }, 3000);
});

const promise2 = Promise.resolve('Promise two resolved');

const allPromises = Promise.all([promise1, promise2]).then((data) =>
  console.log(data)
);
