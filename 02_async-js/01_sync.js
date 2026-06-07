// **First we need to know what is "Synchronous JavaScript and How it works",

/* -> JavaScript is a single threaded language,  
   -> its runs code one after one that's mean we can only execut one task at a time. 
*/

let str1 = 'Hello';
let str2 = 'Ravi Karmakar';

console.log(str1);
for (i = 1; i <= 100000; i++) {
  console.log(i);
}
console.log(str2);

// the loop blocking the execution of the code, so str2 will be printed after the loop is completed.
