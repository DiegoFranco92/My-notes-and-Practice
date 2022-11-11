
// Data type of an array = OBJECT
//the ARRAY are objects that contain multiples items under the same "variable" name. 
// you can put, take items of diferent types at any moment.
//ARRAYS are created with a "variable" then the name of the ARRAY,  then the "=" and "[]"

//empty array
let arreglo1 = [];
    console.log(arreglo1);

//3 element array (0 , 1 , 2) a number, a boolean and a string
let b = [1, true, "Hola"];
    console.log(b);

//4 element array (0=a, 1=b, 2=c, 3=3 element array) 3 strings and 1 array
let c = ["a", "b", "c", [1, 2, 3]];
    console.log(c);

//print letter "b" of the array c:
    console.log(c[1])

//imprime el numero 2 del elemento(otro array) 3 del array c:
    console.log(c[3][1]);

//agrega el numero 1 al array a:
    a.push(1);

// .push  agrega un elemento AL FINAL del array

//agrega un "string" al array a:
    a.push("hola");

//obten la cantidad de elementos en el array c:
    c.length; //method .length

//agrega un elementos al inicio del array c:
    c.unshift("inicio"); 

// If we want to overight an array item we use the =
let nombres = ["Diego", "Fabio", "Jesus"];
// lets overight "Jesus"
nombres[2] = "Pepe";

//ARRAY METHODS.

nombres.join(',');  //will separate with a ,  the strings 
nombres.indexOf("Diego"); // will print the index (number) of "Diego" in the array. 0 in this case.
let nuevosNombres = nombres.concat(["Miguel", "Nina"]); //.concat adds element to the array with a new variable name


