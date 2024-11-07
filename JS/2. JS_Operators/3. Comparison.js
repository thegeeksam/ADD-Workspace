//-->Comparison Operators<--//

/*
Comparison operators compare two values 
and return a boolean value (true or false). 
*/
let a = 10;
let b = 5;
let c = "5";

console.log(a == b); // Equal to
console.log(b == c); // Equal to

// Strict Equal (Equal value and Equal datatype)
console.log(a === b); 
//Using === helps avoid bugs by ensuring 
//that both the value and the 
//type match exactly.

console.log(a != b); // Not equal 
console.log(a > b); // Greater than 
console.log(a < b); // Less than 
// Greater than or equal to 
console.log(a >= b); 
// Less than or equal to 
console.log(a <= b); 