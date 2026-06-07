function createCounter() {
  let count = 0; // Private variable
  return function () {
    count++;
    console.log(count);
  };
}
const myCounter = createCounter();
myCounter(); // 1
myCounter(); // 2
