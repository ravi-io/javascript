// console.log('A: Start of the script');

// 1. A Macrotask (handled by Web API first)
// setTimeout(() => {
//   console.log('B: Inside setTimeout (Macrotask)');
// }, 4000);

// // 2. A Microtask
// Promise.resolve().then(() => {
//   console.log('C: Inside Promise (Microtask)');
// });

// console.log('D: End of the script');

// Simulating an API Call

function fetchData() {
  return new Promise((resolve, reject) => {
    console.log('data fetching...');

    setTimeout(() => {
      let isError = true; // Simulating an error condition
      let data = { id: 1, name: 'Ravi Karmakar' };

      if (!isError) {
        resolve(data);
      } else {
        reject('Failed to data fetch!');
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
