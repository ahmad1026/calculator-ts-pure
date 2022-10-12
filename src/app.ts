import { Calculator } from "./classes/classes.js";

const btns = document.querySelectorAll(".button");
const inputEle = document.getElementById("input") as HTMLInputElement;

btns.forEach((btn) => {
  btn.addEventListener("click", (e: Event) => handleClick(e));
});
const calculator: Calculator = new Calculator();

function handleClick(event: Event) {
  const { target } = event;
  if (target) {
    const value = (target as HTMLDivElement).innerHTML;
    inputEle.value = calculator.actionPressed(value).slice(0,15);
  }
}
