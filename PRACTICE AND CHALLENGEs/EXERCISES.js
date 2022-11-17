
//PRACTICE FUNCTIONS
//check two numbers and return true if one of the numbers is 100 or if the sum of both = 100: WORKING
function ej1(a,b){
    if (a === 100 || b === 100 || a + b === 100)
    return true;
    else return false;
}




////////


//PRACTICE MAKING ARRAYS

let nombres = ["Diego", "Fabio", "Daniel", "Toño",]
//print Diego
nombres[0];


//add a pet
let mascotas = ["Nina", "Suri", "Pepita"]
    mascotas.push("michi"); 

// Create and array of "to do list" and print the array items:

let toDoList = ["shower", "clean", "exercise", "study"];

    for(let i = 0; i< toDoList.length; i++)
    console.log(toDoList[i])



////////////



//PRACTICE LOOPS:

//create a loop that counts from 1 to 100: WORKING
for (let i = 0; i<= 100; i++) {
    console.log(i)
}

// loop for multiples of 9: WORKING
for (let i = 9; i<= 90; i++) {  
    if (i % 9 ===0)
        console.log(i)
}

//crea una funcion que reciba un numero y imprima su tabla del 10: NOT FINISHED

function multiplos(num) 




// Funcion "soloNumeros" saca los numeros de un array:

prueba = [1,2,"hola","perro",3,4,7];

function soloNumeros(array) {
    let output = [];
    array.forEach (e => {if (typeof(e)==="number"){output.push(e)}})
    return output;
 }


soloNumeros([1,2,7,"jesus","miguel", null])

console.log(soloNumeros(prueba));

//ANATOMY 
function onlyNumbers(arr) {
    //  We create an array to output
    let output = [];
    //  We use forEach() to check if the type of every element is the string 'number'
    //  because we know that it outputs a lowercase string with the type.
    //  If true, we push the element to the output.
    arr.forEach(e => { if (typeof (e) === 'number') { output.push(e) } })
    return output
}

console.log(onlyNumbers(array));

//  Wich outputs [ 1 , 2 , 3 ]