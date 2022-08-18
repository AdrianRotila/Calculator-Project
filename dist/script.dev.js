"use strict";

var numberButtons = document.querySelectorAll(".calculator__number");
var operationButtons = document.querySelectorAll(".calculator__operation");
var allClearButton = document.querySelector(".calculator__clear");
var percentageButton = document.querySelector(".calculator__percentage");
var signButton = document.querySelector(".calculator__sign");
var equalsButton = document.querySelector(".calculator__equals");
var currentTextElement = document.querySelector(".calculator__output--current");
var previousTextElement = document.querySelector(".calculator__output--previous");
var dot = document.querySelector(".document__dot");
numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (currentTextElement.innerHTML == "0") {
      currentTextElement.innerHTML = "";
    }

    currentTextElement.append(button.innerText);
  });
}); // Clear all the calculations

allClearButton.addEventListener("click", function () {
  currentTextElement.innerHTML = "0";
  previousTextElement.innerHTML = "0";
});