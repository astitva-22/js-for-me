const num = 20;

console.log(num.toString());
console.log(num.toFixed(2));
console.log(num.valueOf());

// 20.toString();   // ❌ Error
(20).toString();
20 .toString();

const x = new Number(0);

if (x) {
  console.log("Runs!");
} 
// this gives wrong result because x is object and is always truthy, even though it represents the number 0.

const y = 0;
// this gives correct result because y is falsy, as it represents the number 0.
if (y) {
  console.log("Won't run");
}


// ++++++++++++++++++++  Maths ++++++++++++++++++++

console.log(Math.random());
console.log(Math.random()*10); // random number between 0 and 10
console.log((Math.random()*10+1));  // value between 1 and 11;
console.log(Math.floor(Math.random()*10)+1); // value between 0 and 9);

// if you want a no between 2 no. then use this 
// ex make a dice ;
const max =6;
const min =1;

console.log(Math.floor( Math.random()* (max - min + 1) + min));

// this formula will print a no between 2 desired values.