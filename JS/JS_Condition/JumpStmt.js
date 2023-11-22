// var i;
// for (i = 0; i < 5; i++) {
//     // console.log("The number is " + i);
//     if (i == 3) {
//         // console.log("Value of i is: " + i);
//         //break
//         continue;
//     }
//     console.log("Hello from Iteration: " + i)
// }

let n = 0;
// Labelling loop as 'Label'
Label:
while (true) {
    console.log("Outer loop: " + n);
    if (n >= 10) {
        // To end 'Label'.
        console.log("Inner loop: " + n);
        break Label;
    }
    n++;
}
