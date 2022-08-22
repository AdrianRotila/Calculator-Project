// Storing all the HTML elements in variables
const numberButtons = document.querySelectorAll(".calculator__number");
const operationButtons = document.querySelectorAll(".calculator__operation");
const allClearButton = document.querySelector(".calculator__clear");
const percentageButton = document.querySelector(".calculator__percentage");
const signButton = document.querySelector(".calculator__sign");
const currentTextElement = document.querySelector(".calculator__output--current");
const previousTextElement = document.querySelector(".calculator__output--previous");
const dot = document.querySelector(".calculator__dot");

let result;

// Numbers input **
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        // Appeding the numbers if the value is !== 0
        if(currentTextElement.innerHTML == "0" || currentTextElement.innerHTML == result) {
            currentTextElement.innerHTML = "" + button.innerHTML;

        // Maximum number's length is set to 17
        } else if(currentTextElement.innerHTML.length < 17) {
            currentTextElement.append(button.innerText);
        } 
        // Change font size when the number's lenght is more than 8
        if(currentTextElement.innerHTML.length > 11) {
            currentTextElement.style.fontSize = "2rem";
        } else if(currentTextElement.innerHTML.length > 7) {
            currentTextElement.style.fontSize = "3rem";
        }
    })
})

// Appending the '.' when is clicked if is not there yet in the number && do not attach '.' if number's lenght is greater than 9 **
dot.addEventListener("click", () => { 
    if(currentTextElement.innerHTML.includes('.') || currentTextElement.innerHTML.length > 9 || currentTextElement.innerHTML == result){
        currentTextElement;
    } else {
        currentTextElement.append(dot.innerHTML);
    }
})

// Clear all the calculations and reset the fontSize **
allClearButton.addEventListener("click", () => {
    currentTextElement.innerHTML = "0";
    previousTextElement.innerHTML = "0";
    currentTextElement.style.fontSize = "4.5rem";
})


// Operations
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const operator = button.innerHTML;
        let currentNumber = currentTextElement.innerHTML;
        let previousNumber = previousTextElement.innerHTML;
        let twoDecimals;
        
        // Calculations
        if(previousTextElement.innerHTML.includes("÷")) {
            previousNumber = previousTextElement.innerHTML.replace("÷", "");
            result = previousNumber / currentNumber;
        } else if(previousTextElement.innerHTML.includes("×")) {
            previousNumber = previousTextElement.innerHTML.replace("×", "");
            result = previousNumber * currentNumber;
        } else if(previousTextElement.innerHTML.includes("+")) {
            previousNumber = previousTextElement.innerHTML.replace("+", "");
            result = Number(previousNumber) + Number(currentNumber);
        } else if (previousTextElement.innerHTML.includes("-")) {
            previousNumber = previousTextElement.innerHTML.replace("-", "");
            result = previousNumber - currentNumber;
        } else if (previousTextElement.innerHTML.includes("=")) {
            previousNumber = previousTextElement.innerHTML.replace("=", "");
            previousTextElement.innerHTML = 0;
        }

        // When = is pressed do nothing
        if(operator == "=" && previousTextElement.innerHTML == 0){
            currentNumber.innerHTML = currentNumber;
        } else {
        // Display previous text element and the current text element
            if(previousTextElement.innerHTML == 0 && currentTextElement.innerHTML !== 0) {
                previousTextElement.innerHTML = `${currentTextElement.innerHTML}${operator}`;
                currentTextElement.innerHTML = 0;
            } else if(previousTextElement.innerHTML !== 0 && currentTextElement.innerHTML !== 0 && result == undefined){
                previousTextElement.innerHTML += `${currentTextElement.innerHTML}${operator}`;
                currentTextElement.innerHTML = 0;
            } else if(operator == "=" && previousTextElement.innerHTML == 0 && currentTextElement.innerHTML == 0) {
                currentTextElement.innerHTML = currentNumber;
            } else{
                twoDecimals = Math.round((result + Number.EPSILON) * 100) / 100;
                currentTextElement.innerHTML = twoDecimals;
                previousTextElement.innerHTML = 0;
            }
        }
    })
})

// Percentage Button
percentageButton.addEventListener("click", () =>{
    currentTextElement.innerHTML = currentTextElement.innerHTML / 100;
})

//Sign Button`
signButton.addEventListener("click", () => {
    if(currentTextElement.innerHTML.includes("-") && currentTextElement.innerHTML !== "0") {
        currentTextElement.innerHTML = currentTextElement.innerHTML.replace("-", "");
    } else if(currentTextElement.innerHTML !== "0"){
        currentTextElement.innerHTML = `-${currentTextElement.innerHTML}`;
    }
})