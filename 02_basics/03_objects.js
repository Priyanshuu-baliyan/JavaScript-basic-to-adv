// singleton make by constructor
// Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
  name : "Priyanshu",
  [mySym] : "myKey1",
  "full name" : "Priyanshu Baliyan",
  age : 20,
  location : "Noida",
  email : "xyz@example.com",
  isLoggedIn : false,
  lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "abc@chatgpt.com"
// Object.freeze(JsUser)

// JsUser.email = "abc@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS Users");
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS User, ${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());










