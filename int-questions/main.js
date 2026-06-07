// Question

// What will be the exact output?
// Explain WHY the output happens in that order.
// Explain:
//   - Call stack
//   - Microtask queue
//   - Macrotask queue
//   - How await works internally

console.log('Start'); // 1

setTimeout(() => {
  console.log('Timeout 1'); // 7
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1'); // 4
  })
  .then(() => {
    console.log('Promise 2'); // 6
  });

async function test() {
  console.log('Async Start'); // 2

  await Promise.resolve();

  console.log('Async End'); // 5
}

test();

setTimeout(() => {
  console.log('Timeout 2'); // 8
}, 0);

console.log('End'); // 3
