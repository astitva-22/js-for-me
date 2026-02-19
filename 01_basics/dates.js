// dates 

let myDate = new Date();

console.log(myDate.toJSON);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.table([myDate.toJSON,myDate.toDateString(),myDate.toLocaleString()]);

let timeStamp = Date.now();
console.log(timeStamp);

