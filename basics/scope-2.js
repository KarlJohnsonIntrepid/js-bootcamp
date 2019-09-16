let name = "karl";


if(true){

        //local variable shadows the global one
        //global shadowing
        let name = "karl"


        //This is automatcailly declared globally,
        //It is "leaked variable"
        //NOtice we can use this later
        leaked = "leakedvariable"
    if(true){
        console.log(name);
    }
}

if(true){
    console.log(name);
    console.log(leaked);
}  