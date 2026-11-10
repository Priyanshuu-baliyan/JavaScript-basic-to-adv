
function sayMyName(){
  console.log("P");
  console.log("R");
  console.log("I");
  console.log("Y");
  console.log("A");
  console.log("N");
  console.log("S");
  console.log("H");
  console.log("U");
}

// sayMyName // function reference

// sayMyName() // execution

// function addTwoNum(num1, num2){ // parameters
//   console.log(num1 + num2);
// }

function addTwoNum(num1, num2){ // parameters

  // let result = num1 + num2
  // return result
  
  return num1 + num2
  
}

const result = addTwoNum(3, 4) // arguments

// console.log("Result: ", result);

function loginUserMessage(username = "You"){ // here "You" is default value of parameter, that value overwrite by argument value 

  // if(username === undefined){
  //   console.log("Please enter a username");
  //   return
  // }

  if(!username){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("Priyanshu"));
// console.log(loginUserMessage("Tom"));

function calculateCartPrice(val1, val2, ...num1){
  return num1;
}

// console.log(calculateCartPrice(200,500,1000, 1500))

const user = {
  username : "Priyanshu",
  prices : 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user) // problem occurs if we change something in Object. suppose price to prices then it will give Undefined

handleObject({
  username: "Bruce",
  price: 499
})

const myNewArr = [200, 400, 800, 100]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 400, 500, 100]));
