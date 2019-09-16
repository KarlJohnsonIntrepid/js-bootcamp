import {cloneDeep } from 'lodash';


//Shallow clone.....
let obj = {name : "karl"};
let obj2 = {};
Object.assign(obj2, obj);
console.log(obj2);


//For deepl clone use loadash dep clone..npm

export function deepClone () {
    let obj = {name : "karl",
                details : {
                    age : 12,
                    height: 154
                }
    };
    let obj2 = cloneDeep(obj)
    
    console.log(obj2);
}