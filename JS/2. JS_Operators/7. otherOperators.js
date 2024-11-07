//--> 7. Other Operators <--//

/*
Type Operators - These operators are used 
to get the type of a variable.
*/

// let a = "Hello";
// let b = 5;
// let c = a + b;
// console.log(typeof a); 

/*
Spread operator (...) - allows an 
iterable (like an array or string) 
to be expanded in places where
multiple elements are expected.
*/
// let arr1 = [1, 2, 3];
// let arr2 = [arr1, 4, 5];
// console.log(arr2);
// let arr3 = [...arr1, 4, 5]; //Spread operator
// console.log(arr3);

/*
instanceof operator - checks if an object 
is an instance of a specific class or 
constructor function.
*/
class Car {}
let myCar = new Car();

console.log(myCar instanceof Car); // true
console.log(myCar instanceof Object); // true

/*
Destructuring Assignment - It unpack values from arrays
or properties from objects into distinct variables.
*/
//Array Destructuring:
// let fruits = ["Five *", "Munch", "Dark Chocolate"];
// let [first, second, third] = fruits;

// console.log(first);
// console.log(second); 
// console.log(third); 

// //Object Destructuring:
// let Vehicle = { model: "Thar", make: "Mahindra" };
// let { model, make } = Vehicle;

// console.log(model); 
// console.log(make); 