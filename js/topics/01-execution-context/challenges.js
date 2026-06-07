/**
 * CHALLENGES: Execution Context & Hoisting
 * 
 * Try to guess the output before running!
 */

// Challenge 1: Nested Hoisting
function challenge1() {
    console.log(x);
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}
// challenge1(); 


// Challenge 2: The classic interview trap
function challenge2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
// challenge2();


// Challenge 3: Function vs Variable shadowing
var foo = 1;
function challenge3() {
    foo = 10;
    return;
    function foo() { }
}
challenge3();
console.log(foo); // Guess the output?

/**
 * ANSWERS & EXPLANATIONS:
 * 
 * 1. undefined, 2, 2. (var is function scoped, not block scoped).
 * 2. 3, 3, 3. (By the time setTimeout runs, i has reached 3. Use 'let' to fix this).
 * 3. 1. (Inside the function, foo is hoisted as a function. The assignment `foo = 10` 
 *    changes the local `foo` function to 10. The global `foo` remains 1).
 */
