// if
const isUSerLoggedIn = true

const temperature = 41

// if(temperature === 40){
//     console.log("Less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");



// if("2" == 2){
// 	console.log("executed");
// }

// if("2" === 2){
// 	console.log("executed");
// }

// if(2 != 3 ){
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===, !==



// const score = 200

// if(score > 100){
//     // const power = "fly"
//     // var power = "fly" // it will print the value outside the scope too, so we have to use let or const to prevent this kind of mistake

//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);


// const balance = 1000
// implicit scope
// if(balance > 500) console.log("test");

// if (balance > 500) console.log("test"), console.log("test2"); // not a good practice avoid it

// if(balance < 500){
//     console.log(`Less than 500`);
// } else if(balance < 750){
//     console.log(`Less than 750`);
// } else if(balance < 950){
//     console.log(`Less than 950`);
// } else {
//     console.log(`less than 1200`);
// }


const uSerLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(uSerLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in");
}
