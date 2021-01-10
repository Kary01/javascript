let salaries = {
    John: 100,
    Ann: 170,
    Pete: 120
};

let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}

alert(sum);