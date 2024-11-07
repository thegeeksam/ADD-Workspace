//-----> function <------

function add(a, b){
    // value returned by the function to the caller
    return a + b; 
    // return a + b, a - b; 
    /* The result of a + b is discarded because of how the 
    comma operator works in JavaScript. The comma operator 
    evaluates each of its operands (from left to right) and 
    returns the value of the last operand.
    */
    // console.log("This line will not be executed!");
    // console.log("This line will now be executed!");
    // return a - b;
}

// Function is called, the return value will end up in c
let c = add(5, 10);
let d = add(15, -10);

// function result(){
//     let result = (1, 2, 3); 
//     return result;
//     return 10, 20, 30, 50;
// }

// console.log(result());

//Display the result using Template Literals
console.log(`Sum of two numbers is ${c}`); // ${} - String Interpolation
console.log(`Sum of two numbers is ${d}`); // ${} - String Interpolation

// Accessing a function without () returns 
// the function and not the function result
// let value = add;
// console.log(value);
// console.log(add(5, 10));

//-----> Local Variables <------
// Variables declared within a JavaScript 
// function, become LOCAL to the function.   
// let carName = "Mahindra"; // Global Variable
// function myFunction() {
//     let carName = "Volvo"; // Local Variable
//     // code here CAN use carName
//     console.log(carName);
// }
// myFunction();
// // code here can NOT use carName
// console.log(carName);


//-----> default parameter values <------
//Setting default parameter values
function add(a = 0, b = 0) {
    return a + b;
}

console.log(add(10, 5)); // Calling with both the arguments
console.log(add(10)); // Calling with 1 argument
console.log(add()); // Calling with 0 argument


// //-----> Calling a function with more arguments than parameters <------
// function myFunc(a, b, ...extraArgs) { //rest parameters
//     console.log('a = ',a);
//     console.log('b = ',b);
//     console.log('Extra Arguments = ',extraArgs); 
// }
// myFunc(1, 2, 3, 4, 5);
