/**
 * CHALLENGES: 'this' Keyword
 * 
 * Try to guess the output!
 */

// Challenge 1: The lost context
const machine = {
    type: "Robot",
    identify() {
        console.log(this.type);
    }
};

const identify = machine.identify;
// identify(); // ?


// Challenge 2: Arrow functions in objects
const calculator = {
    value: 10,
    add: (n) => {
        this.value += n; // ?
        console.log(this.value);
    }
};
// calculator.add(5);


// Challenge 3: Constructor functions
function Car(make) {
    this.make = make;
    return { make: "Generic" };
}
const myCar = new Car("Tesla");
console.log(myCar.make); // ?


/**
 * ANSWERS & EXPLANATIONS:
 * 
 * 1. undefined. (The method is called as a standalone function).
 * 2. undefined/NaN. (Arrow functions don't have 'this'. Here 'this' points to the global object).
 * 3. "Generic". (If a constructor returns an object, that object is returned instead of 'this').
 */
