const numberButtons = document.querySelectorAll(".calculator__number");
const operationButtons = document.querySelectorAll(".calculator__operation");
const allClearButton = document.querySelector(".calculator__clear");
const percentageButton = document.querySelector(".calculator__percentage");
const signButton = document.querySelector(".calculator__sign");
const equalsButton = document.querySelector(".calculator__equals");
const currentTextElement = document.querySelector(".calculator__output--current");
const previousTextElement = document.querySelector(".calculator__output--previous");
const dot = document.querySelector(".document__dot");


numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
    
        if(currentTextElement.innerHTML == "0") {
            currentTextElement.innerHTML = "";
        } 
        currentTextElement.append(button.innerText);   
    })
})


// Clear all the calculations
allClearButton.addEventListener("click", () => {
    currentTextElement.innerHTML = "0";
    previousTextElement.innerHTML = "0";
})
