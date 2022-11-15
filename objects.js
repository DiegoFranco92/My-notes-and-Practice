// big part of the JS languaje

// objects have "properties" and things they can do (methods) 

//object literals Notations:

let User2 = {
    name: "Megan",
    age: 25,
    location: "Mexico",
    email: "megan.mex@gmail.com",
    login: function () {
        console.log("the user logged in"); // THIS is the method inside the object. in this case a log in function.
    }
}

//Anatomy of this Object:
 // let User ={}  -- this is how we name the new object
 // name: age: location: email: hobbies: //are the "properties" of this User object known as "KEYs".
 // name:  = KEY
 // "Diego" = VALUE
 // the "value" of this properties is defined with ":" then the value.

//Use "dot notation" to access the properties. ex:
console.log(User.name) //will print only "Diego"

// also use "dot notation" to change the property. ex:
User.age = 30; // will change the age from 29 to 30

//HOW TO ADD METHODS TO THE OBJECTS.
// We do it the same way. we add a "KEY" and the value is going to be a "function" ex.


let User = {
    name: "Diego",
    age: 29,
    location: "Mexico",
    email: "diegofranco.daft@gmail.com",
    favbooks: ["extreme ownership", "deep work"],
    hobbies: "gym and box",
    login: function() {
        console.log('the user logeed in');
    },
    logBooks: function(){
        console.log('My favorite books are:');
        this.favbooks.forEach(favbook => {
            console.log(favbook);
        })
    }
}
User.logBooks();


//Math Object
// MATH is a built-in object that has properties and methids for mathematical constants and functions
// console.log(Math);  to see all the methods of Math ex:
const area = 7.8;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));