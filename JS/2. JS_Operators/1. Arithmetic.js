//--> Arithmetic Operators <--//

/* 
These are the operators (+ - * / %) that
operate upon the numerical values and 
return a numerical value.

These operators perform basic 
arithmetic calculations.
*/

let x = 11;
let y = 3

console.log(x + y); // Addition (14)
console.log(x - y); // Subtraction (8)
console.log(x * y); // Multiplication (33)
console.log(x / y); // Division (3.6666666666666665)
console.log(x % y); // Remainder (2)
console.log(x ** y); // Exponentiation (1331)
console.log(x++, x); // (Post) Increment

console.log(x--, x); // (Post) Decrement
console.log(++x); // (Pre) Increment
console.log(--x); // (Pre) Decrement

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = (1 + 2) * (3 + 4);

console.log(result);