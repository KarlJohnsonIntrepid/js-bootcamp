class Person {
    static type = "person";
    height = "red";
    
    constructor (name, height, speed) {
        this.name = name;
        this.altName = "person";
        this.height = height;
        this.speed = speed
    }

    sayName () {
        console.log(this.name);
    }

    sayHeight() {
        console.log(this.height);
    }

    saySpeed () {
        console.log(this.speed)
    }

    get speed() {
        return this._speed;
    }

    set speed (value) {
        this._speed = value;
    }


    static say(value){
        console.log(value);
    }
}

class Xman extends Person {
    fly () {
        console.log("fly");
    }

    //Override height
    sayHeight () {
       console.log("I am a tall super man");
    }

    saySpeed () {
        super.saySpeed();
        console.log("But i can go very fast aswell");
    }
}

let karl = new Person("Karl", "189", "100km/h");
karl.saySpeed();

console.log(Object.getPrototypeOf(karl))
console.log(Object.getOwnPropertyNames(karl))

let superman = new Xman("Karl", 100, 100);
superman.fly()
superman.sayHeight();
superman.saySpeed();


//Undefined
console.log(superman.type);
//Static properties is on class
console.log(Xman.type);

Person.say("Woo hoo");


