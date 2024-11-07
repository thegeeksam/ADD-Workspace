//--->types of pop-up boxes:<---//
let userInput = prompt("Enter a Number:");

for (i = 0; i < userInput; i++) {
    let response = confirm("Do you want to proceed?");
    if (response) {
        alert("User Clicked OK!");
    }
    else{
        alert("User Clicked Cancel! Exit from Loop");
        break;
    }
    // window.alert("Hello from Iteration: " + i)
    alert("Hello from Iteration: " + i)
}
window.confirm("End of loop");
