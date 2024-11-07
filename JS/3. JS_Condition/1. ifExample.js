//--> Conditional Statements: if, else, else if <--//


/*
Conditional statements are used to instruct 
the computer on making decisions when given 
some conditions.

Decision-making Statements: if, if-else,  switch

*/

//--> if Statement <--//
/*
A one-way if statement in javascript executes
the statements only if the condition is true. 
If the condition is false, the statements 
are not executed.
*/
//function checkEligibility(age){
let age = prompt("En1ter your age: ");
if(age < 18)
    // console.log(`your Age is: ${age}\nSorry!\nYou are not eligible for voting!`);
    // document.getElementById("p1").textContent = "your Age is: "+ age +". Sorry! You are not eligible for voting!";    
    document.getElementById("p1").textContent = "Your Age is: "+age+" Sorry! You are not eligible for voting!";    
console.log("Happy Day!")
    
//}


// Sorry! You are not eligible for voting
//checkEligibility(11);

// You are eligible for voting
//checkEligibility(34);