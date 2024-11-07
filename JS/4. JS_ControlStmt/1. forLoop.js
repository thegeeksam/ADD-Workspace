//--> Control Statements <--//
//These statements change the order in 
//which statements are executed.


// Loop
/*
Loops are instructions passed on to 
machines to perform repetitive tasks. 
we have two main types of loops.
1. Entry Controlled loop:
    ->for loop
    ->while loop
2. Exit-controlled loop
    ->do-while loop

Statements, like 'break' and 'continue', 
help to regulate the control flow of a loop.
*/

//for loop
console.log("Hello! I am learning JavaScript!")
//Example 1: for loop
let i = 0
for (; i < 5; ) {
    console.log("The number is " + i);
    console.log("Hello!")
    i++
}

//Example 2: for loop with break
// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log("The number is " + i);
// }
//Example 3: Looping over a String

// let language = "JavaScript";

// let text2 = "";
// for (let x of language) {
//     text2 += x;
//     console.log(text2);
// }
