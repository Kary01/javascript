function Calculator() {
    this.read = function() {
        this.number1 = +prompt("First number?", 0);
        this.number2 = +prompt("Second number?", 0);
    };

    this.sum = function() {
        return this.number1 + this.number2;
    };

    this.mult = function() {
        return this.number1 * this.number2;
    };
};

let calculator = new Calculator();
calculator.read();

alert('Sum: ' + calculator.sum());
alert('Mult: ' + calculator.mult());