// ---> Event Listeners <---//
// An event listener is a procedure in JavaScript 
// that waits for an event to occur.

/* Syntax:

element.addEventListener(event, function, useCapture);
- event: The name of the event.
- function: The function to run when the event occurs.
- useCapture: Optional. A Boolean value that specifies
    whether the event should be executed in the capturing
    or in the bubbling phase.
*/

// change the text of a paragraph when a button is clicked.
document.getElementById("myButton").addEventListener("click", 
    function() {
    document.getElementById("myText").innerText = "Text changed!";
});

document.getElementById("myButton").addEventListener("click", function(event) {
    console.log(event.type); // Output: "click"
    console.log(event.target); // Output: The element that triggered the event
});
