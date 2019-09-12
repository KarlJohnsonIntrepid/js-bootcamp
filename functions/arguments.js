//Challenge
//Calculate tip -total, tip percecnt
//Using undefined and default arguments

let calculateTip = function calculateTip(total, tip = 10){
    if(total == undefined) {
        total = 100;
    }    
    
    return total /100 * tip;
}

console.log(calculateTip(undefined, 20));