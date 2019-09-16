let person = {
    lastName : "Johns",
    firstName : "bob",

    get fullName () {
        return this.firstName + ' ' + this.lastName; 
    }
}

person.name = "Karl";
console.log(person.fullName);

//define property
Object.defineProperty(person, 'age', {
    value: 18
})

//define getter

Object.defineProperty(person, 'nameage', {
    get()  {
        return this.fullName + " " +this.age;
    }
})

console.log(person.age);
console.log(person.nameage);


//Real getter and setters
let user = {
    get username() {
        return this._username;
    },

    set username(val) {
       this._username = val;
    }
}

user.username = "kjohnson";
console.log(user.username);