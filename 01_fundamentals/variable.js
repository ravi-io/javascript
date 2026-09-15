// In JavaScript, variables can be declared using 'var', 'let', or 'const'
// The scope of these variables differs based on how they are declared.

var str = 'Hello, World!';

let val = 'Hello, let!';

const constVar = 'Hello, const!';

console.log(str); // 'var' Accessible anywhere in the function or globally
console.log(val); // 'let' Accessible only within the block it is defined
console.log(constVar); // 'const' Accessible only within the block it is defined

{
  let a = 10;
  console.log(a);
}

{
  var b = 20;
  console.log(b);
}

console.log(b); // Accessible outside the block because 'var' is function-scoped, not block-scoped
