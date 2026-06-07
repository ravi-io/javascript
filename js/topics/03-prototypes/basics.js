/**
 * Topic: Prototypes & Inheritance
 * 
 * Run this file using: node topics/03-prototypes/basics.js
 */

// --- 1. The Prototype Chain ---
console.log("--- Prototype Chain ---");
const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);          // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__);          // null

// --- 2. Prototypal Inheritance (Older Way) ---
console.log("\n--- Prototypal Inheritance ---");
function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function () {
    console.log(`${this.name} is eating...`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}
// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.eat(); // Inherited
myDog.bark(); // Own method

// --- 3. ES6 Classes (Syntactic Sugar) ---
console.log("\n--- ES6 Classes ---");
class Shape {
    constructor(color) {
        this.color = color;
    }
    getInfo() {
        return `A ${this.color} shape.`;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getInfo() {
        return `${super.getInfo()} With radius ${this.radius}.`;
    }
}

const c = new Circle("red", 5);
console.log(c.getInfo());

// --- 4. Object.create(null) ---
console.log("\n--- Object.create(null) ---");
const pureObj = Object.create(null);
console.log(pureObj.toString); // undefined
try {
    console.log(pureObj.hasOwnProperty("name"));
} catch (e) {
    console.log("Error:", e.message); // hasOwnProperty is not a function
}
