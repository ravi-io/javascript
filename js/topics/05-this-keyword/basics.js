/**
 * Topic: 'this' Keyword & Call/Apply/Bind
 * 
 * Run this file using: node topics/05-this-keyword/basics.js
 */

// --- 1. Implicit Binding ---
console.log("--- Implicit Binding ---");
const person = {
    name: "Ravi",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};
person.greet(); // "Hi, I'm Ravi"

// --- 2. Explicit Binding (Call, Apply, Bind) ---
console.log("\n--- Explicit Binding ---");
function introduce(location, hobby) {
    console.log(`I'm ${this.name} from ${location}. I love ${hobby}.`);
}

const user = { name: "Alice" };

// Call: Arguments passed individually
introduce.call(user, "New York", "coding");

// Apply: Arguments passed as an array
introduce.apply(user, ["London", "gaming"]);

// Bind: Returns a new function
const boundIntro = introduce.bind(user, "Mars");
boundIntro("exploring");

// --- 3. Arrow Functions vs Normal Functions ---
console.log("\n--- Arrow Functions ---");
const group = {
    title: "Our Group",
    members: ["John", "Jane"],
    showList() {
        this.members.forEach(function (member) {
            // "this" is lost here in a regular function
            console.log(`${this.title}: ${member}`);
        }.bind(this)); // Fixed with .bind(this)
    },
    showListArrow() {
        this.members.forEach((member) => {
            // Arrow function inherits "this" from showListArrow
            console.log(`${this.title}: ${member}`);
        });
    }
};
group.showListArrow();
