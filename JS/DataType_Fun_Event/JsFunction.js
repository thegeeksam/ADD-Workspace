//-----> function <------
/*
function add(a, b){
    // value returned by the function to the caller
    return a + b;
    console.log("This line will not be executed!");
    console.log("This line will now be executed!");
    return a + b;
}*/

// Function is called, the return value will end up in c
// let c = add(5, 10);

//Display the result using Template Literals
// console.log(`Sum of two numbers is ${c}`);

// Accessing a function without () returns 
// the function and not the function result
// let value = add;
// console.log(value);
// console.log(add(5, 10));

//-----> Local Variables <------

// code here can NOT use carName
// console.log(carName);
// function myFunction() {
//     let carName = "Volvo";
    // code here CAN use carName
//     console.log(carName);
// }

// code here can NOT use carName
// console.log(carName);
// myFunction();

//-----> default parameter values <------
//Setting default parameter values
// function add(a = 0, b = 0) {
//     return a + b;
// }

// console.log(add(10, 5)); // Calling with both the arguments
// console.log(add(10)); // Calling with 1 argument
// console.log(add()); // Calling with 0 argument


//-----> Calling a function with more arguments than parameters <------
function myFunc(a, b, ...extraArgs) { //rest parameters
    console.log('a = ',a);
    console.log('b = ',b);
    console.log('Extra Arguments = ',extraArgs); 
}
myFunc(1, 2, 3, 4, 5);
