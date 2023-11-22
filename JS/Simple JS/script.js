console.log("Hello I CSE B!!!");
//alert("Hello I CSE B!!!");
// vote= (a) => console.log(`Your age is: ${a} ` + "Lets vote for the betterment of our country!!!");
let a = prompt("Enter your age: ");
if (a > 18){
    console.log("You are eligible to vote!!!");
    vote(a);
}
else{
    console.log("You are not eligible to vote!!!");
    grinder(a);
}

function grinder(a){   
    console.log(a + "Lets have a cup of coffee!!!");
}
// function vote(a){
//     console.log(`Your age is: ${a} ` + "Lets vote for the betterment of our country!!!");
//     //var n = a;
//     //let n = a;
//     //const n = a;
//     n = a;
// }

// console.log("Thank you!!!" + n);

//Arrow Tag
vote= (a) => console.log(`Your age is: ${a} ` + "Lets vote for the betterment of our country!!!");