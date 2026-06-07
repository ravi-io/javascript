/**
 * POLYFILLS: Common Array Methods
 * 
 * Interviwer often asks to implement these from scratch.
 */

// 1. Array.prototype.map
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// 2. Array.prototype.filter
Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// 3. Array.prototype.reduce
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// --- Test ---
const nums = [1, 2, 3, 4];
console.log("Map:", nums.myMap(x => x * 2));
console.log("Filter:", nums.myFilter(x => x > 2));
console.log("Reduce:", nums.myReduce((acc, curr) => acc + curr, 0));
