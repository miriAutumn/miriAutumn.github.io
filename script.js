const coffeeIcon = document.getElementById("☕");
const copyrightText = document.getElementById("copy");
const coffeeCounterElement = document.querySelector(".coffee-counter");
let coffeeCounter = 0;
let changeText = "You really love coffee this much? :O";


coffeeIcon.addEventListener("click", () => {
    coffeeCounter++;
    coffeeCounterElement.innerHTML = coffeeCounter;
    if(coffeeCounter != 0) coffeeCounterElement.classList.add("visible");

    if(coffeeCounter >= 50) {
        copyrightText.innerHTML = changeText;
    }
});