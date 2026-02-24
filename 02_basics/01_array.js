// Array 

const myArr = [1,2,3,4,5];
const arr1 = new Array("Astitva", "Shukla");

myArr.push(6); // pushes in last
console.log(myArr);
console.log(arr1);


myArr.pop(); // pops last element;

const Arr1 = myArr.join(); // coverts arr to string 
console.log(Arr1);

let Arr2 = Arr1.split(","); // coverts string to arr

console.log("A:" ,myArr);
// console.log(Arr2);

let Arr3 = myArr.slice(1,4); // slice(start,end) end is exclusive 

console.log(Arr3);
console.log("B:" ,myArr);

let Arr4 = myArr.splice(1,3); // splice(start,no. of elements to be removed

console.log("C" , myArr);
console.log(Arr4);


