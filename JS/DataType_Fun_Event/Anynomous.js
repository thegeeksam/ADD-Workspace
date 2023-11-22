//Anonymous functions
let x = function (x, y){   
        console.log(x + y);
        console.log("I'm anonymous function!");
    };

console.log(typeof(x));
//call the anonymous function
x(5,10);    
