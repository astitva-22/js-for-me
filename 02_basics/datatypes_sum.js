// Primitve data types in JavaScript include:

// 1. Number: Represents both integer and floating-point numbers.
let num1 = 10;
let num2 = 20.5;
let sum = num1 + num2;
console.log("The sum of num1 and num2 is: " + sum);

// 2. String: Represents a sequence of characters.
let str1 = "Hello, ";
let str2 = "world!";
let greeting = str1 + str2;
console.log(greeting);

// 3. Boolean: Represents a logical entity that can have two values: true or false. 
let isJavaScriptFun = true;
let isCodingHard = false;
console.log("Is JavaScript fun? " + isJavaScriptFun);
console.log("Is coding hard? " + isCodingHard);

// 4. Null: Represents the intentional absence of any object value.

// 5. Undefined: Represents a variable that has been declared but has not yet been assigned a value.

// 6. Symbol: Represents a unique identifier, often used for object properties to avoid name collisions.

// 7. BigInt: Represents integers with arbitrary precision, allowing for numbers larger than the maximum safe integer in JavaScript.

// Note: In JavaScript, there are also non-primitive data types such as Objects and Arrays, which can hold multiple values and have properties and methods.

// function
function add(a, b) {
    return a + b;
}

let result = add(5, 10);
console.log("The result of adding 5 and 10 is: " + result);

// object
let person = {
    name: "Astitva",
    age: 25,
    city: "New York"
};
console.log(person);

console.table([person.age,person.name,person.city]);


// Stack (Primitive) , Heap(Non-Primitive)  

// jo primitive data type hote h uski value stack me store hoti h jisse value change karne par originial value me change nhi aata;

// jabki non-primitive data type me value heap me store hoti h jisse value change karne par original value me change aata h;

//example

let a = 10; // a is stored in stack
let b = a; // b is stored in stack and gets the value of a
console.log("Value of a: " + a); // 10
console.log("Value of b: " + b); // 10

let obj1 = { name: "Astitva" }; // obj1 is stored in heap 
let obj2 = obj1; // obj2 is stored in heap and gets the reference of obj1
console.log("Value of obj1: " + obj1.name); // Astitva
obj2.name= "shukla ji"; // change karne pe obj1 me bhi change aata h.

console.log("Value of obj1 after change: " + obj1.name); // shukla ji   

