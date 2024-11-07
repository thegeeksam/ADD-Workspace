/*variable is a container to store data. */

//There are 2 steps to create a variable
//1. Declaration (let, var, const)
//2. Initialization (using '=' Operator)

/*
var: Function-scoped or globally-scoped, can be redeclared and updated.
let: Block-scoped, cannot be redeclared within the same scope, but can be updated.
const: Block-scoped, cannot be redeclared or updated (for primitive values),
but object properties can be changed.
*/

//--> var <--//

// var age1; // Declaration
// age1 = 17; // Initialization
// console.log("age is: ", age1);
// if (age1 >= 17) {
//     var d = "Coffee";
//     console.log(d);
// }
// console.log(d); //globally-scoped

// var age1 = 25; // Redeclaration allowed
// console.log(age1);


//--> let <--//

// let dept; // Declaration
// dept = "Computer Science"; // Initialization
// console.log(typeof dept);
// let age = 20
// console.log(typeof age);
// console.log(dept);
// let dept=EEE;
// let age = 17; // Declaration and Initialization
// age = 19;
// if (age >= 17) {
//     let c = "Coffee";
//     console.log(c);
// }
//Block-scoped
// let c = "Tea"
// console.log(c); //ReferenceError: c is not defined
// cannot be redeclared
// let age = 18; //SyntaxError: Identifier 'age' has already been declared 
// age = 18;
// console.log(age);

// //--> const <--//
// const pi = 3.14;
// console.log(pi); // Output: 3.14
// pi = 45; // Error

// const person = { name: "Ramya" };
// console.log(person.name); // Output: Ramya
// person.name = "Pooja";
// console.log(person.name); // Output: Pooja

// person = { age: 20 }; // TypeError: Assignment to constant variable.
// const arr = {name:"prabhu"};
