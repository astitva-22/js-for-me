const name = "Astitva";
const repo = 10;

console.log(`My name is ${name} and i have ${repo}repositories on github`);

// backticks hme string interpolation ka use karne me help krte h jisse hme string ke andar variable ko directly use karne ka mauka milta h.

const name1 = new String("Astitva22");

// String constructor se string banane par hme ek object milta h jisse hme string ke methods ko use karne ka mauka milta h.

console.log(name.toUpperCase());
console.log(name1.charAt(3));
console.log(name1.indexOf('t'));


const anotherString = name.substring(3, 4); // 'Asti' // 0 ind se leke 3 tk, 4 exclude hogi;
const anotherString2 = name.substring(2); // 'titva' // di gyi index se saari value aage ki print hogi
const anotherString3 = name.substring(-3, 2); //->AS //  agar start index negative h to usse 0 maan ke chlega aur end index positive   h                                                h to usse as it is maan ke chlega, 

const anotherString4 = name.substring(2, -3); //->'As' // js -ve value ko 0 treat karta h , to yaha (2,0) value di gyi hai                                            jab start > end hoga to js va;ues swap kar deta h mtlb final value (0,2) hogi.

const anotherString5 = name.substring(-3, -1); // yaha dono 0 honge iss liye empty aaegi -> ""

const anotherString6 = name.substring(0, -3); // empty

console.table([anotherString, anotherString2, anotherString3, anotherString4, anotherString5, anotherString6]);

const newString = name.slice(2, 5);  //same substring hai but difference is that -ve value leta hai uspe reverse direction me kaam karta h ;
const newString2 = name.slice(-4, -1); // -ve indexing jese python me thi same vhi hai -4 ind se -2 tk print hoga , -1 exclude kar denge; 

/* Dekho bhai -ve index ka mtlb hota h {length - no.} */

const newString3 = name.slice(2); // same as substring
const newString4 = name.slice(-3); // -3 se saari aage ki value print ->tva
const newString5 = name.slice(0, -3); // 0 se {7-3=4} tk print hoga ->Asti
const newString6 = name.slice(-3, 0); // 4 se 0 tk print hoga -> empty, kyuki start > end substring jese swap nhi hota;
 

console.table([newString, newString2, newString3, newString4, newString5, newString6]);

const String1 = "    Astitva   ";
console.log(String1.trim()); // string ke dono sides se extra spaces ko remove kar deta h


 const url = "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCDQ";
 console.log(url.includes("youtube"));
 console.log(url.replace('www.', 'j'));
 console.log(url.split('.'));
 