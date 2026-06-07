console.log('A: Start of the script');

// 1. A Macrotask (handled by Web API first)
setTimeout(() => {
  console.log('B: Inside setTimeout (Macrotask)');
}, 4000);

// 2. A Microtask
Promise.resolve().then(() => {
  console.log('C: Inside Promise (Microtask)');
});

console.log('D: End of the script');
