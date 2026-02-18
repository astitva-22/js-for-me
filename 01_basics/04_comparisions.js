console.log(null > 0);   //false 
console.log(null == 0);  //false
console.log(null >= 0);  //true

// the reason is that an eqaulity check (==)  and comparision check (>,<,>=,<=) treat null differently. 
// comparision convertes null to number 0 that's why null >= 0 is true but null > 0 is false because null is converted to 0 and 0 is not greater than 0.