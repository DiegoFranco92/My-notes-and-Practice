
//sTRINGS
let email = "diegofranco.daft@gmail.com";

console.log("hello, Diego"); //this will print a "string"


//STRING CONCATENATION: 
let firstName = "Diego";
let lastName = "Franco";

let fullName = firstName + lastName;  //this concatenate (joins) both variables in one 

console.log(fullName);  // expect: DiegoFranco
//ADD spaces as strings:
let fullName1 = firstName + " " + lastName;
console.log(fullName1);  // expect: Diego Franco


// GETING CHARACTERS
// you can print especific catacter of a string:
console.log(fullName[0]);  // expect the letter "D"

//STRING LENGTH
//String also have "metoths" and "properties" on is Length
console.log(firstName.length); // expect : 5

//STRING METHODS
//strings have "fuctions" associated to them, called "methods"
firstName.toUpperCase(); //.toUpperCase() is a "method" that changes letters to upper case. expect : DIEGO 

//COMMON STRING METHODS 

let result = email.lastIndexOf("m"); // its going to give me the last "M" in the email variable.

let result1 = email.slice(0,5); //cut or slices the selected indexes, in this case 0 to 5 will print diego.

let result3 = email.replace("d", "b"); // replace one caracter with another


//TEMPLATE STRINGS or TEMPLATE LITERALS.  uses ` `
// better way to concatenate variables.
let title = "best reads of 2020";
let author = "Mario";
let likes = 30;

    let blog = `the blog called ${title} ny ${author} has ${likes} likes`;  
    
// creating HTML with templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span> This blog has ${likes}</span>
`;
