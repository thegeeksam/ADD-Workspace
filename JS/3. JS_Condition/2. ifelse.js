// if...else statement//

/*
If the condition is true, if block will be executed.
The else block will address the failure of the condition.
*/

let age = prompt("Enter your age: ");
if(age >= 18){
    // console.log('You are eligible for voting');
    document.getElementById("p1").textContent = "Your age is: " + age;    
    document.getElementById("p2").textContent = "You are eligible for voting!";    
}
else{
    document.getElementById("p1").textContent = "Your age is: " + age;
    document.getElementById("p2").textContent = "Sorry! You are not eligible for voting!";    
    document.getElementById("p3").textContent = 'Wait for few more years!';
}
console.log('Happy Day!!!')