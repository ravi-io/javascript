/**
 * CHALLENGES: Prototypes & Inheritance
 * 
 * Try to guess the output before running!
 */

// Challenge 1: The prototype pointer
function Person() { }
Person.prototype.name = "John";

const p1 = new Person();
Person.prototype = { name: "Doe" };
const p2 = new Person();

console.log(p1.name); // ?
console.log(p2.name); // ?


// Challenge 2: Shadowing properties
const proto = { name: "Proto" };
const obj = Object.create(proto);
obj.name = "Obj";
delete obj.name;
console.log(obj.name); // ?


// Challenge 3: Polyfill for Object.create (Simplified)
function myCreate(proto) {
    function F() { }
    F.prototype = proto;
    return new F();
}

const animal = { eats: true };
const rabbit = myCreate(animal);
console.log(rabbit.eats); // true


/**
 * ANSWERS & EXPLANATIONS:
 * 
 * 1. John, Doe. 
 *    p1's prototype still points to the old Person.prototype object. 
 *    Setting Person.prototype = { ... } creates a NEW object. 
 *    p2 points to this new object.
 * 
 * 2. Proto. 
 *    After deleting 'name' from 'obj', JS looks up the prototype chain 
 *    and finds 'name' on 'proto'.
 * 
 * 3. This is how Object.create was conceptually implemented before it was native.
 */
