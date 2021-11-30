import {identifyVariable, removeKeyNonDestructive, removeKeys} from "./src/mild/mild_2.js";
import {identifyArray} from "./src/mild/mild_2.js";
import {removeKey} from "./src/mild/mild_2.js";


let test = {
    a: 100,
    b: 200,
    c: 300
};

let keys = ['b','c'];
console.log(test)
console.log(removeKeyNonDestructive(test, 'a'))
console.log(removeKeys(test, keys))

