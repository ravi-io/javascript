// let value = 1;

// function doSomething(callback) {
//   setTimeout(() => {
//     callback();
//   }, 1000);
// }

// doSomething(() => {
//   value = 2;
// });

// console.log(value); // 1 or 2?

// ------------------------------------------------------------------------------------

// function compute(action, x, y) {
//   if (action === 'add') {
//     return x + y;
//   } else if (action === 'divide') {
//     return x / y;
//   }
// }

// console.log(compute('add', 10, 5));
// console.log(compute('divide', 10, 5));

// ======================================== CALLBACK FUNCTIONS ====================================================

// function add(x, y) {
//   return x + y;
// }

// function divide(x, y) {
//   return x / y;
// }

// function compute(callBack, x, y) {
//   return callBack(x, y);
// }

// console.log('Add: ', compute(add, 10, 5)); // 15
// console.log('Divide: ', compute(divide, 10, 5)); // 2

// ======================================== CALLBACK HELL ====================================================

// setTimeout(() => {
//   console.log('Second 1');

//   setTimeout(() => {
//     console.log('Second 2');

//     setTimeout(() => {
//       console.log('Second 3');

//       setTimeout(() => {
//         console.log('Second 4');

//         setTimeout(() => {
//           console.log('Second 5');

//           setTimeout(() => {
//             console.log('Second 6');

//             setTimeout(() => {
//               console.log('Second 7');

//               setTimeout(() => {
//                 console.log('Second 8');
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// https://www.freecodecamp.org/news/asynchronous-javascript/

// function functionB() {
//   console.log('B is starting...');
//   setTimeout(() => {
//     console.log('B is done!');
//   }, 1000); // Waits 1 second
// }

// function functionA() {
//   functionB();
//   console.log('A is done!');
// }

// functionA();
