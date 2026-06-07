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

const request = fetch('https://course-api.com/react-store-products', {
  method: 'GET',
})
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
