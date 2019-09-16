//Passing this - this is passed by the dot notation of the object which calls it.
let obj =  {
    name: "Karl",
    this : this
}

console.log(obj.this.name);

let obj2  = {
    name : "Karl",
    this : function () {
        return this;
    }
}

//here we call the method this on the object, this gets passed to the internal method so we can use it.
console.log(obj2.this().name);

let obj3  = {
    name : "Karlos",
    getName : function () {
        console.log(this.name);
    }
}

//Returns name as this is passed to the method, obj3 is calling and is bound by the dot notation
obj3.getName();

//here we create a reference to the function
let getName = obj3.getName
//The method returns undefined as there is no this passed.
getName();


///Create this chaining
let runner = {    
    run: function() {
        console.log("running");
        return this;
    },
    walk : function () {
        console.log("walking");
        return this;
    }
}

runner.walk().run().walk();
