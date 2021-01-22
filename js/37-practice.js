function sumInput() {
    let numbers = [];
    
    while(true) {
        let value = prompt('A number please:', 0);

        //should we calcel?
        if(value === '' || value === null || !isFinite(value)) break;

        //we would not be able to tell an empty string (stop sign) from the zero
        numbers.push(+value);
    }

    let sum = 0;
    for(let number of numbers){
        sum += number;
    }

    return sum;
}

alert(sumInput());