class User {
    constructor(name){ 
        this.name = name;
    };

    sayHi(){
        alert(`Hello, my name is ${this.name}`);
    };
}

let person1 = new User('Kary');
let person2 = new User('Nats');

person1.sayHi();
person2.sayHi();