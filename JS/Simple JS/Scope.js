// Local Scope
function prints()
{
    var local_var = 2;// a local variable with value 2
    console.log(local_var);
    //the local_var can be used anywhere inside this function
}
//console.log(local_variable);//this line will result in ReferenceError, 
                             //as local_variable is not visible in this line

// Global Scope
var global_var = 1;

function prints()
{
    console.log(global_var); //output: 1
}
console.log(global_var); //output: 1
