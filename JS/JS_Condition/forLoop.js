// console.log("Hello! I am learning JavaScript")
//Example 1: for loop
// for (let i = 0; i < 5; i++) {
//     console.log("The number is " + i);
// }

//Example 2: for-in loop
const Student = {
    name: 'Mani',
    height: 174, //in cm
    weight: 60,  //in kg
    Class: 'I CSE B'
}
// let text = "";

// for (let x in Student) {
//     // console.log(x);
//     // console.log(Student[x]);
//     text += Student[x] + " ";
// }
// console.log(text);

//Example 3: for-in loop

// for ( let key in Student) {
//     console.log(`${key} => ${Student[key]}`);
// }

//Example 4: for-of loop
// const cars = ["FiveStar", "Munch", "DarkChocolate", "KitKat"];

// let text1 = "";
// for (let x of cars) {
//     // console.log(x);
//     text1 += x + " ";
// }
// console.log(text1);

//Example 5: Looping over a String

let language = "JavaScript";

let text2 = "";
for (let x of language) {
    text2 += x;
    console.log(text2);
}
