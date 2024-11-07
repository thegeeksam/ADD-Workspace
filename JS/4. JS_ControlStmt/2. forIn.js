//Example 1: for-in loop
const Student = {
    name: 'Mani',
    height: 174, //in cm
    weight: 60,  //in kg
    Class: 'I CSE B'
}
let text = "";

for (let x in Student) {
    // console.log(x);
    // console.log(Student[x]);
    text += Student[x] + " ";
}
console.log(text);


//Example 3: for-in loop

for ( let key in Student) {
    console.log(`${key} => ${Student[key]}`);
}