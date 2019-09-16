let animial =  {
    eats : true,
    run: function () {
        console.log('running');
    },
    food : [],
}

let rabbit = {
    runs :true,
    food : []
}

let dwarfRabbit = {
    isSmall :true,
    food : [],
}

//here we set aniaml as the prototype of rabbit so inherit is functions.
//Note __proto__ s=is historical
rabbit.__proto__ = animial;

//Overideing the parent
rabbit.run = function() {
    console.log("rabbit runnning")
}

//We should use the setter on object instead.. also use
Object.setPrototypeOf(dwarfRabbit, rabbit);

rabbit.run();

console.log(rabbit.eats);
console.log(dwarfRabbit.eats);

rabbit.food[0] = "carrot";
console.log(rabbit.food);
console.log(dwarfRabbit.food);

//Notce here that food is set on the protoype and all animal share the same food. so we need to set the same