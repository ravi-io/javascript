/**
 * CHALLENGES: JS Fundamentals
 * 
 * Try to guess the output!
 */

// Challenge 1: The NaN mystery
function challenge1() {
    console.log(typeof NaN);
    console.log(NaN === NaN);
}
// challenge1();


// Challenge 2: Array comparison
function challenge2() {
    console.log([] == []);
    console.log([] == ![]);
}
// challenge2();


// Challenge 3: Object keys
function challenge3() {
    const a = {};
    const b = { key: 'b' };
    const c = { key: 'c' };

    a[b] = 123;
    a[c] = 456;

    console.log(a[b]); // ?
}
// challenge3();

/**
 * ANSWERS & EXPLANATIONS:
 * 
 * 1. "number", false. 
 *    NaN stands for "Not a Number" but its type is number. 
 *    NaN is the only value in JS that is not equal to itself.
 * 
 * 2. false, true.
 *    - Two different arrays in memory are never equal (== or ===).
 *    - [] == ![] is true (explained in README.md).
 * 
 * 3. 456.
 *    Object keys are converted to strings. Both b and c become "[object Object]".
 *    So effectively: a["[object Object]"] = 123; then a["[object Object]"] = 456;
 */
