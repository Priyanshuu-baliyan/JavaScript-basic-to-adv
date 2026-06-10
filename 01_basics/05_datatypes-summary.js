// Primitive 
// 7 types 
// String, Number, Boolean, Symbol, null, undefined,BigInt

const score = 100;
const scoreVal = 103.4;

let name = "Priyanshu"
const isLoggedIn = false;

let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id === anotherId);

let outerTemp = null
let num;

// let bigNum = 11656454543215435n

// console.log(typeof bigNum);

// Reference   Non primitive
// Array, object, function

let arr = ["Mango", "Banana", "Orange"];
const obj = {
    name : "Priyanshu",
    age : 19
}

const myFunc = function(){
    console.log("Hello world")
}

console.log(typeof null)
console.log(typeof obj)
