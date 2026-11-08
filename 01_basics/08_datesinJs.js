// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let createdDate = new Date(2026, 9, 16)
// console.log(createdDate.toDateString());

// let createdDate = new Date(2006, 9, 16, 15, 20)
// console.log(createdDate.toLocaleString());

// let createdDate = new Date("2026-10-16")
let createdDate = new Date("10-16-2026")
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000)) // milisec to sec


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay()); // 0(sun) to 6 (sat)

console.log(newDate.toLocaleString('default',{weekday : "long"})); // ' intl ', { ctrl space }



