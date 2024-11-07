//--> Data Types in JavaScript <--//

// 1. Primitive Data Types
//--> 1.1 Undefined <--//
// let a;
// console.log(typeof(a));
// //--> 1.2 null <--//
// let b = null; 
// console.log(typeof(b));
// //--> 1.3 boolean <--//
// let c = true; 
// console.log(typeof(c));
// let d = "True"
// console.log(typeof(d));
// let e = prompt("Enter a value");
// console.log("You have entered", e, "and datatype is:", typeof(e));

//--> 1.4 Number <--//
// let d = 1251345345; 
// console.log(typeof(d));
//--> 1.5 string <--//
// let f = 12; 
// console.log(typeof(f));
// let g = "Hello";
// console.log(f+g);
//--> 1.6 Symbol <--//
// let g = Symbol("description"); 
// console.log(typeof(g));
// //--> 1.7 BigInt <--//
// let e = 9007199254740992256756756756756n; 
// // console.log(e);
// console.log(typeof(e));


// 2. Non-Primitive Data Types
//--> 2.1 object <--//
let car = {
        name: "Mahindra",
        model: "Thar",
        color: "Red Rage", 
        3: 1550000,
        drive:"4 Wheel Drive",
        name:"maruthi"
    }
console.log(typeof car);
console.log(car);
function about (car){
            return `This is a ${car.name} model ${car.model} of ${car.color} color cost is Rs.${car[3]}.`;
        }
console.log(about(car));

//--> 2.2 Array <--//
//Arrays are used to store multiple values
//in a single variable. They are ordered 
//collections, which means each item in
//an array has a numbered position.
// let ar = [1, 'Pen', false, 'Text', "12", 123.21];

// console.log(typeof ar[0]);
// console.log(typeof ar);
// // console.log(ar[-1]);
// console.log(ar.length);

// console.log(typeof(ar));
// console.log(typeof(car));
// window.alert("Hello World"); 

//--> 2.3 pattern <--//
//A regular expression is used to 
//match patterns in text. 
// let pat = /hello/; // This is a pattern
// let text = "hello World";

// console.log(pat.test(text)); // Output: true


// let pattern = /[a-z]*/; //pattern to match lowercase letters
// console.log(pattern.test(text));
// console.count(typeof(pattern));
document.getElementById("pId").textContent = "Happy Morning, Have a great Day!", car
// let a = prompt("Enter a value");