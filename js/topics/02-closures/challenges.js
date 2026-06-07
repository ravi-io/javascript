/**
 * CHALLENGES: Closures
 * 
 * Try to guess the output before running!
 */

// Challenge 1: Closure in a loop (The Classic)
function challenge1() {
    for (var i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(i); // What prints?
        }, i * 1000);
    }
}
// challenge1();

// Challenge 2: How to fix Challenge 1 using Closures?
function challenge1Fix() {
    for (var i = 1; i <= 3; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
}
// challenge1Fix();


// Challenge 3: Memoization using Closures
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Fetching from cache...");
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3 (from cache)


/**
 * ANSWERS & EXPLANATIONS:
 * 
 * 1. 4, 4, 4. (Because 'var' is function scoped and the loop finishes before timeouts run).
 * 2. 1, 2, 3. (The 'close' function creates a new lexical environment for each iteration).
 * 3. The 'cache' object exists inside the memoize function and is preserved via closure.
 */
