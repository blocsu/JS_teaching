const soldier = {
    halth: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

//Object.setPrototypeOf(john, soldier);
const john = Object.create(soldier);
john.sayHello();