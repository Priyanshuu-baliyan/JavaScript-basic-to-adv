// Immediately Invoked Function Expressions (IIFE)

(function burger (){
  // named IIFE
  console.log(`DB CONNECTED`);
}) ();



// () (); // 1st () works as function definition & 2nd () execution and use ';' to en iife, we use iife to prevents from global Scope pollution



( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
}
)("Priyanshu")