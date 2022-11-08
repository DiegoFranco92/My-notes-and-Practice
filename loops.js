
//los LOOPS se usan para repetir la misma accion muchas veces.
//Hay multiples tipos de "LOOPS"
// for , for..of, for..in, while, do..while, map, forEach.


//construcción Basica de un FOR LOOP
for(let i = 0; i < 5; i++) {
    console.log("loop");
}
//se espera como resultado "loop" 5 veces.

//usemos FOR loop para contar del 0 al 15:
for(let i = 0; i<= 15; i++) {
    console.log(i);
}

//ANATOMIA DEL "FOR LOOP"
//los FOR LOOPs tiene siempre 3 factores 
// 1. Starter or initializer or starting point
// 2. condicion de cuando el "loop" debe terminar
// 3. Incremento. ¿queremos que vaya hacia arriba o hacia abajo? 
// cada factor debe ir separado por ";"

var i = 0; // Starter. se puede usar la "variable " "let"  "const". De preferencia "let" por Scope.
// ¿Por que I? por conveniencia, signidica "index". Tu started puede ser cualquier numero
i<= 15; // condicion que se desea complir y terminar. pueden ser numeros, o methods 
i++ // Incremento. si deseas que tu incremento sea por mas de 1. cambiar "i++" por "i+=2", "i+=3", "i+=5" etc.


 //Ejemplo practico de un "for loop" para Sumar numeros:

 var suma = 0;

 for(var i = 1; i < 11; i++) {
    suma += i;
 }
 console.log("El total es :" + suma);
 // resultado esperado = El Total es : 55

 //LOOPs FOR de ARRAYS
 //En caso de querer imprimir los elementos de un array. podemos unas un "for loop":
 var frutas = ["piña", "melon", "sandia", "manzana"] //es el array

 for(let i = 0; i<frutas.length; i++) {
    console.log(frutas[i])
 }

 //LOOPS DE OBJETO
 


