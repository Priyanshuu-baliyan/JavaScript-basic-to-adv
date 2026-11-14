// const → reference cannot change
// object properties → can change

const user = {
    username : "Priyanshu",
    price : 1999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // this works as refer to the current context
        console.log(this);
        
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function burger(){
//     let username = "Priyanshu"
//     console.log(this.username); // it's return undefined 
// }
// burger()

// const buger = function(){
//     let username = "Priyanshu"
//     console.log(this.username); // it's return undefined 
// }

// buger();

const buger = () => {
    let username = "Priyanshu"
    console.log(this); // it return {} unlike normal function 
}

// buger();



// Explicit return

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));


// this is called implicit return

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) // when we used () with arrow function we doesn't need to write return but when we use {} then we have to write 'return' 

const addTwo = (num1, num2) => ({username : "Priyanshu"}) // declare object ({key: value})

console.log(addTwo(3,4));



// const myarr = [2, 3, 6, 9]

// myarr.forEach()


