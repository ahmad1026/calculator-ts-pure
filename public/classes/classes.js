export class Calculator {
    constructor(Input = "", lastInput = "", result = 0, currentResult = 0, currentValue = "") {
        this.Input = Input;
        this.lastInput = lastInput;
        this.result = result;
        this.currentResult = currentResult;
        this.currentValue = currentValue;
        this.leftnum = 0;
        this.rightnum = 0;
    }
    actionPressed(value) {
        const ops = ["+", "-", "*", "/", "="];
        switch (value) {
            case ops[0]:
            case ops[1]:
            case ops[2]:
            case ops[3]:
            case ops[4]:
                if (ops.includes(this.lastInput)) {
                    this.rightnum = Number(this.currentValue.split(this.lastInput)[1]);
                    return this.currentValue + '=' + this.getResult().toString();
                }
                this.lastInput = value;
                this.currentValue += value;
                this.leftnum = Number(this.currentValue.split(this.lastInput)[0]);
                break;
            case "AC":
                this.lastInput = "";
                this.currentValue = "";
                return "";
            case "Back":
                this.lastInput = "";
                let temp = [...this.currentValue];
                temp.pop();
                this.currentValue = temp.join("");
                return this.currentValue;
            default:
                this.currentValue += value;
                break;
        }
        return this.currentValue;
    }
    getResult() {
        switch (this.lastInput) {
            case "*":
                this.result = this.leftnum * this.rightnum;
                break;
            case "/":
                this.result = this.leftnum / this.rightnum;
                break;
            case "+":
                this.result = this.leftnum + this.rightnum;
                break;
            case "-":
                this.result = this.leftnum - this.rightnum;
                break;
            default:
                break;
        }
        return this.result;
    }
}
