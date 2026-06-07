/**
 * POLYFILLS: call, apply, bind
 * 
 * Deep dive into explicit binding.
 */

// 1. Function.prototype.myCall
Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + " is not callable");
    }
    // Add the function to the context object to call it implicitly
    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
};

// 2. Function.prototype.myApply
Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== "function") {
        throw new Error(this + " is not callable");
    }
    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
};

// 3. Function.prototype.myBind
Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + " is not callable");
    }
    const fn = this;
    return function (...nextArgs) {
        return fn.apply(context, [...args, ...nextArgs]);
    };
};

// --- Test ---
function greet(city, country) {
    console.log(`Hello ${this.name} from ${city}, ${country}!`);
}

const person = { name: "Ravi" };
greet.myCall(person, "Delhi", "India");
greet.myApply(person, ["Mumbai", "India"]);
const boundGreet = greet.myBind(person, "Bangalore");
boundGreet("India");
