const accountId = 12563;
let accountMail = "abc@gmail.com";
var accountPass = "1245";
accountCity = "Noida"; // it occupied the memory but it's not a good idea to declare a variable
let accountState; // undefined


// accountId = 2; // Not Allowed
console.log(accountId);

/* Don't Use var Because it have a issue in Block Space & function Space;*/

accountMail = "cba@gmail.com";
accountPass = "5432";
accountCity = "Pune"; 
console.table([accountMail,accountPass,accountCity,accountState]);



