// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
//     console.log(num);
}

const greetings = "Hello Duniya!"
for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);
}

// Maps (take unique value, and ordered)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")



// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":", value);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, obj] of myObj) {
//     console.log(key, ':' , obj );
    
// }  // In JavaScript, you cannot use a for...of loop directly on a plain object because objects are not iterable by default (doing so throws a TypeError)