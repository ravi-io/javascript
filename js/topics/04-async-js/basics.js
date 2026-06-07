/**
 * Topic: Asynchronous JavaScript
 * 
 * Run this file using: node topics/04-async-js/basics.js
 */

// --- 1. Promises Basics ---
console.log("--- Promises ---");
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve("Success! ✅");
    else reject("Failure! ❌");
});

myPromise
    .then(res => console.log(res))
    .catch(err => console.error(err));

// --- 2. Async / Await ---
console.log("\n--- Async / Await ---");
async function fetchData() {
    try {
        console.log("Fetching...");
        // Simulating a delay
        const data = await new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "Antigravity" }), 1000));
        console.log("Data received:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}
fetchData();

// --- 3. Promise Methods ---
console.log("\n--- Promise.all vs Promise.race ---");
const p1 = new Promise(resolve => setTimeout(() => resolve("P1 Done"), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve("P2 Done"), 1000));

Promise.all([p1, p2]).then(values => console.log("All:", values));
Promise.race([p1, p2]).then(value => console.log("Race (Winner):", value));
