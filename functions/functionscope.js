//Global scope - convert function
////Loal scope inside function - s;
///////Local scope c

let convert = function(a) {
    let s = a + 1;

    if(s = a){
        var c = 1;
        let d = 2;
    }
    console.log(c);
    console.log(d);
    return s;
}

let one = convert(1);
let two = convert(2);


