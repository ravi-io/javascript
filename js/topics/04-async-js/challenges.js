/**
 * CHALLENGES: Asynchronous JavaScript
 * 
 * Try to guess the order of logs!
 */

// Challenge 1: The Ultimate Event Loop Test
function challenge1() {
    console.log("1");

    setTimeout(() => {
        console.log("2");
    }, 0);

    Promise.resolve().then(() => {
        console.log("3");
    });

    Promise.resolve().then(() => {
        setTimeout(() => {
            console.log("4");
        }, 0);
    });

    console.log("5");
}
// challenge1();


// Challenge 2: Async Await execution order
async function challenge2() {
    console.log("A");
    await console.log("B"); // Note: await expression is executed immediately
    console.log("C");
}
// console.log("Before");
// challenge2();
// console.log("After");


// Challenge 3: Implement a simple delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// delay(2000).then(() => console.log("Delayed by 2s"));


/**
 * ANSWERS & EXPLANATIONS:
 * 
 * 1. 1, 5, 3, 2, 4. 
 *    - 1, 5 are synchronous.
 *    - 3 is a microtask.
 *    - 2 is a macrotask.
 *    - 4 is a macrotask inside a microtask (so it runs after '2').
 * 
 * 2. Before, A, B, After, C.
 *    Everything after 'await' (the 'C') is scheduled as a microtask.
 */
