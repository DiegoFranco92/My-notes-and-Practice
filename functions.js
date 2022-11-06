
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
let comida = function () {};
var meGusta = function() {};
// se debe terminar una FUNCTION EXPRESSION con ;


//Diferencias entre FUNCTION DECLARATION vs FUNCTION EXPRESSION.
// su ejecucion se cumple de la misma manera. la diferencia es el  fenomeno HOISTED
//las FUNCTION DECLARATION tienen HOISTED, significa que al momento de declararlas. su codigo se ejecuta desde el inicio (se va hasta arriba) (HOSTED = Levantar, ALZAR)
//FUNCTION EXPRESSIONs. Se ejecutaran solo para declaraciones despues de su creacion.
//Se considera mejor practica usar FUNCTION EXPRESSIONS. para no causar resultados no deseados en el futuro de tu codigo.

//añade un codigo a la variable "Ladrar":
const Ladrar = function() {
    console.log("Guau! Guau! 🐶")
};