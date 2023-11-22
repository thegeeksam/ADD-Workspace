let x = 10;
example(x);
function example(x){
    if(x){
        console.log('If statement is executed');
    }
    console.log('This statement is always executed.');
}

//Example 1: when condition statement is a boolean value
let flag1 = true;
let flag2 = false;

//output: If statement is executed
example(flag1);

//This won't produce any output
example(flag2);

//Example 2: when condition statement is a comparison
let a = 10;
let b = 100;
let c = "10";
//This won't produce any output
example(a == b);

//output: If statement is executed
example(a == c);

//This won't produce any output
example(a === c);