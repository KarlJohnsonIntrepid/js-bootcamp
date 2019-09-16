//javascript uses lexical scoping

//In a scop you can access variables in the defined scope and any parent scope

//global scope
let varOne = 'varOne';

if(true){
    console.log(varOne);

    //Local scope - defined in a code block
    let varTwo = 'varTwo';
    console.log(varTwo)

    if(true){
        let varfour = 'varfour';
    }
}


if(true){
    let varThree =  'varthree';
}
console.log(varTwo)