
let calculator = {
    read() { //prompts for two values and saves them as object properties
        this.firstNum = +prompt("First number", "");
        this.secondNum = +prompt("Second number", "");
    },
    sum() { //returns the sum of saved values
        return this.firstNum + this.secondNum;
    },
    mult() { //multiplies saved values and returns the result
        return this.firstNum * this.secondNum;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mult());