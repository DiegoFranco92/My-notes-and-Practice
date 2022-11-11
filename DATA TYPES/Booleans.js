
//BOOLEANS
//they represent 2 especial values "true" "false"
true
false

//use to evaluate conditios in our code

//use "methods" to return a boolean:
let email = "diegofranco.daft@gmail.com";
let isAEmail = email.includes("@");
console.log(isAEmail);  /// this will return the boolean "true".

//comparison operators that return booleans
// === , i< , i>, !
let age = 29;
console.log(age === 29); // this will return true
console.log(age === 30); // this will return false
console.log(age != 26); // this will return true. ! is the "not" operator
console.log(age < 35); // will return true, 29 is less than 35
console.log( age > 15); // will return true