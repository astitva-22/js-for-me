const marvel =["thor" , "ironman" , "hulk" ];
const dc =["superman" , "batman" , "flash"];

const all=marvel.concat(dc); // this concat two array and return new array
console.log(all);

const allHero =[...marvel, ...dc]; // this is also same as concat but this is more modern way to do it.

const anotherArr =[1,2,3,[4,5,6],7,[8,9,[10,11]]];
const real_another_arr = anotherArr.flat(Infinity); // this will flat the array to any level of nesting
console.log(real_another_arr);

console.log(Array.isArray("Astitva")); // an array or not
console.log(Array.from("Astitva")); // make new array

const score1=200;
const score2=300;
const score3=100;

console.log(Array.of(score1,score2,score3)); // make array from given values

