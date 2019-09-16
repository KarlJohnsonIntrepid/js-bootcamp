//Constructor function is used to create an object.
//Captial letter added at the beginning.

function User(name) {
    
    //Callinig new adds this = {}
    
    this.name = name;
    this.run = function () {
        console.log(this.name + 'is' + ' running');
    }

    //return  this....
}


//without using New - -not recomended
let karl = new User("Karl")
karl.run();

function user(name) {
    this.name = name;
    this.run = function () {
        console.log(this.name + 'is' + ' running');
    }
    return this;
}

user("john").run();
