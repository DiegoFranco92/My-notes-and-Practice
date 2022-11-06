
//arreglo vacio
let a = [];
    console.log(a);

//arreglo de 3 elementos (0 , 1 , 2) un numero un booleano y un string
let b = [1, true, "Hola"];
    console.log(b);

//arreglo de 4 elementos (0=a, 1=b, 2=c, 3=array de 3elementos) 3 strings y 1 array
let c = ["a", "b", "c", [1, 2, 3]];
    console.log(c);

//imprime la letra "b" del array c:
    console.log(c[1])

//imprime el numero 2 del elemento 3 del arreglo c:
    console.log(c[3][1]);

//agrega un elemento al array a:
    a.push(1);

//agrega un "string" al array a:
    a.push("hola");

//obten la cantidad de elementos en el array c:
    c.length;

//agrega un elementos al inicio del array c:
    c.unshift("inicio");
