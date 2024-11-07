//Arrow Function
let add = (a, b) => { // => is used to define an arrow function
    console.log("Hello CSE!");
    console.log("How are You?");
    return a + b;
    console.log("Advance Happy Pongal!");
    return a;
}
console.log(add(10,5)); // expected output: 15

// Above function can be rewritten as
// Implicit Return: When the function body contains
// a single expression,the value of that expression
// is implicitly returned.

let add1 = (a, b) => a + b;
console.log(add1(10,5)); // expected output: 15