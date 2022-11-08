
//PRACTICE FUNCTIONS
//check two numbers and return true if one of the numbers is 100 or if the sum of both = 100: WORKING
function ej1(a,b){
    if (a === 100 || b === 100 || a + b === 100)
    return true;
    else return false;
}





//PRACTICE MAKING ARRAYS

let nombres = ["Diego", "Fabio", "Daniel", "Toño",]
//print Diego
nombres[0];


//add a pet
let mascotas = ["Nina", "Suri", "Pepita"]
    mascotas.push("michi"); 







//PRACTICE LOOPS:

//create a loop that counts from 1 to 100
for (let i = 0; i<= 100; i++) {
    console.log(i)
}

// Create and array of "to do list" and print the array items:

let toDoList = ["shower", "clean", "exercise", "study"];

    for(let i = 0; i< toDoList.length; i++)
    console.log(toDoList[i])