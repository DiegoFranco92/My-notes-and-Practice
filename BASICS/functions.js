
// Data type de una function = Object

//las funciones siempre llevan un "parametro" entre () despues del nombre de la funcion y {} para definir lo que hacen {"aqui va el codigo"}
 //  las funciones usa()para ejecutarlas con los "argumentos" dentro  


 //FUNCTION DECLARATION 
 // se escribe iniciando con la keyword "function" seguido de un nombre. ej
function saltar() {}

// crea una funcion que imprima un "string":
    function imprimeString(string) {
        console.log(string)
    }

// Haz una funcion que salude: 
    function saludo() {
        console.log("Hola, ¿como te va?");
    }
// Agrega el parametro "nombre" a esta funcion:
    function saludo(nombre) {
        console.log("Hola, " + nombre + " ¿como te va?");
}
// ahora se puede agregar cualquier nombre en strings "" como "argumento" dentro de () de esta funcion 

// Agrega el "parametro" apellido a esta function:
    function saludo(nombre, apellido) {
        console.log("Hola, " + nombre + " " + apellido + " ¿como te va?");
}
//Ahora se deben agregar ambos "argumentos" separados por una , para que la funcion se ejecute correctamente


//FUNCTION EXPRESSION.  
// es asignarle a una "variable" una function. ej.
let Ladra = function() {};
const comida = function () {};
var meGusta = function() {};
// se debe terminar una FUNCTION EXPRESSION con ;


//Diferencias entre FUNCTION DECLARATION vs FUNCTION EXPRESSION.
// su ejecucion se cumple de la misma manera. la diferencia es el  fenomeno HOISTING
//las FUNCTION DECLARATION tienen HOISTED, significa que al momento de declararlas. su codigo se ejecuta desde el inicio (se va hasta arriba) (HOSTED = Levantar, ALZAR)
//FUNCTION EXPRESSIONs. Se ejecutaran solo para declaraciones despues de su creacion.
//Se considera mejor practica usar FUNCTION EXPRESSIONS. para no causar resultados no deseados en el futuro de tu codigo.

//añade un codigo a la variable "Ladrar":
const Ladrar = function() {
    console.log("Guau! Guau! 🐶")
};


//ARROW FUNCTION. manera mas limpia y corta de escribir funciones.
//no se usa la keyword "function"
//en caso de un solo "return" o "console.log" se pueden quitar los {}
//se escribe el nombre que se le quiere dar, seguido de = segudo de  () y ARROW '=>' resultado. 

//ej. fuction "imprimeString" y function "saludo" en estilo ARROW:
imprimeString1 = (string) => string;

saludo1 = (nombre) => "hola, " + nombre + " ¿como te va?";

//cuando se tiene un solo "parametro" se pueden eliminar los ():
imprimeString1 = string => string;

saludo1 = nombre => "hola, " + nombre + " ¿como te va?";

//en caso de mas de un "parametro" SI se necesitan los ()

//CALLBACK FUNCTIONS
//is a function passed as an argument to another function
//this technique allows a function to call another fuction 
let people = ["Diego", "Fabio", "Nina", "Suri", "Miguel", "jesus"];

people.forEach((person,index) => { //.forEach is a build-in callback function
    console.log(index, person);
});

// we can DEFINE the callback function outside the forEach method. like so:
//callback function name "LogPerson"
const LogPerson = (person,index) => {
    console.log(index + ' Hello ' + person);
};

people.forEach(LogPerson); //calling the fuction as callback



