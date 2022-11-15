
// What is Object-Oriented Programing?
// its a programming paradigm or style, centered around OBJECTS rather that functions.

//very popular on interviews and good resumes.


// 4 PILLARS of OOP

// 1. Encapsulation, 2. Abstraction, 3.Inheritance, 4. Polimorphism.

//1. ENCAPSULATION:
// In OPP we conbine a group of related functions and variables into a unit. that we call "object"
//we refer to the functions as "methords" and the variables as "property" ex.

localStorage

// example of ENCAPSULATION.

// we refer as this implementation as procedual. with the variables on one side and the function in another
// they are separated, decoupled
let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary,overTime,rate) {
    return baseSalary + (overTime * rate);
}

//the next, is the OOP way of the same problem:

let employee = { //"employee" is the object
    baseSalary: 30000, // this is the "property"
    overTime: 10, // this is the "property"
    rate: 20, // this is the "property" 
    getWage: function() { // this function is the "method" it has no parameters
        return this.baseSalary + (this.overTime * this.rate);
    }
}

employee.getWage(); // this will return the result


//ABSTRACTION
//WE hide all but the relevant data about an object in order to reduce complexity and increase efficiency.
//BENEFITS :simpler interface, reduce the impact of change


//INHERITANCE
//Mecanism allows to eliminate redundant code

//Polymorphism
// means many forms
// refactor ugly switch/case statements