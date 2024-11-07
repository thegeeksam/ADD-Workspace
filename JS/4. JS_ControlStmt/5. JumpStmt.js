var i;

//Example 1: continue Statement
//Purpose: Skips the current iteration of 
//a loop and proceeds to the next iteration.
for (i = 0; i < 5; i++) {
    // console.log("The number is " + i);
    if (i == 3) {
        console.log("Value of i is: " + i);
        //break
        continue;
        console.log("Value of i is: " + i);
    }
    console.log("Hello from Iteration: " + i)
}

//Example 2: break Statement
//Purpose: Terminates the loop or a switch statement and transfers control
// to the statement immediately following the loop.

for (i = 0; i < 5; i++) {
    // console.log("The number is " + i);
    if (i == 3) {
        // console.log("Value of i is: " + i);
        break;
        console.log("Value of i is: " + i);
    }
    // window.alert("Hello from Iteration: " + i)
    console.log("Hello from Iteration: " + i)
}
// window.confirm("End of loop");



//Example 3: Labeled Statements
// Purpose: Allows you to use break or continue
// with a label to jump to a specific point in your code.

// let n = 0;

// Label: while (true) {
//     console.log("Outer loop: " + n);
//     if (n >= 10) {
//         // To end 'Label'.
//         console.log("Condition met: " + n);
//         break Label;
//     }
//     n++;
// }
// console.log("End of loop");
