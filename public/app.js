import { Calculator } from "./classes/classes.js";
const btns = document.querySelectorAll(".button");
const inputEle = document.getElementById("input");
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => handleClick(e));
});
const calculator = new Calculator();
function handleClick(event) {
    const { target } = event;
    if (target) {
        const value = target.innerHTML;
        inputEle.value = calculator.actionPressed(value);
    }
}
