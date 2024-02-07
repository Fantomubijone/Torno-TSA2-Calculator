// Getting all the elements with class "btn" and the element with id "display"
const buttons = document.getElementsByClassName("btn");
const displayInput = document.getElementById("display");

// Initialize variables for input expression and result display state
let expression = "";
let resultDisplayed = false;

// Loop through all buttons and add a click event listener to each
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    // Geting (text value) of the clicked button
    var btnValue = e.target.innerHTML;

    // Switch statement to handle different buttons
    switch (btnValue) {
      case "C":
        // Clear the display by setting to nothing
        expression = "";
        break;
      case "←":
        // Remove the last character from the input expression
        expression = expression.slice(0, -1);
        break;
      case "=":
        try {
          // Use eval to evaluate the expression from a text to a numeric expression, also replace "x" with "*" and "÷" with "/"
          const result = eval(expression.replace("x", "*").replace("÷", "/"));
          expression = result.toString();
          resultDisplayed = true;
        } catch (error) {
          // Display "Error" if an error occurs during calculation
          expression = "Error";
          resultDisplayed = true;
        }
        break;
      default: // if the btn is number then it will be append
        // If result is displayed, start a new input or else, append to the expression
        if (resultDisplayed) {
          expression = btnValue;
          resultDisplayed = false;
        } else {
          expression += btnValue;
        }
        break;
    }

    // Update the display input with the current input expression
    displayInput.value = expression;
  });
}
