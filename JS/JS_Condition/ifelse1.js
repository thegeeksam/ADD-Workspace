function example(x){
    if(x){
        console.log('If statement is executed');
    }
    else{
        console.log('Else statement is executed');
    }
}

//Example 1: when condition statement is a boolean value
flag1 = true;
flag2 = false;


//output: If statement is executed
example(flag1);

//output: Else statement is executed
example(flag2);

//Example 2: when condition statement is a comparison
let a = 10;
let b = 100;
let c = 10;

//output: Else statement is executed
example(a==b);

//output: If statement is executed
example(a==c);