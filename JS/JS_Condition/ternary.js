var marks = 49;
//Conditional Statement
if(marks >= 50)
{
    console.log("Passed");
}
else {
    console.log("Failed");
}
//Using Ternary Operator
console.log(( marks >= 40 ) ? "Passed" : "Failed" );

//Conditional Statement
var AQI = 340;
if (AQI > 300) {
    console.log("Air Quality is BAD");
} else if (AQI > 200) {
    console.log("Air Quality is NORMAL");
} else if (AQI > 100) {
    console.log("Air Quality is GOOD");
} else {
    console.log("Air Quality is EXCELLENT");
}
console.log(result);

//Using Ternary Operator
console.log(
  AQI > 300 //if condition
    ? "Air Quality is BAD"  //if first condition satisfies
    : AQI > 200 //first else-if condition
    ? "Air Quality is NORMAL" 
    : AQI > 100 //second else-if condition
    ? "Air Quality is GOOD"
    : "Air Quality is EXCELLENT"); //if all the conditions fail

// console.log(result);