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

console.log(this);
