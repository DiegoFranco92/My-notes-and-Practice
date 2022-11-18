// function buscandoAWally(array) {
    // La función llamada 'buscandoAWally' recibe como argumento un arreglo de 'string' y debe devolver un 'string' que diga
    // 'Encontre a Wally en la posicion [indice del arreglo donde esta]'
    // Ej:
    // buscandoAWally(['Dobby', 'Harry', 'Dementor', 'Wally', 'Sirius']) debe retornar 'Encontre a Wally en la posicion 3'
    // ya que 'Wally' se encuentra en la posicion 3 del arreglo.
    // Tu código aca:

        //FINISHED!

    function buscandoAWally(names = ["diego", "jesus","nina", "wally" ]) {
        for (name of names) {
            if (name === "wally")
            console.log("encontre a wally en la posicion " + names.indexOf("wally"))
            
        }
    }



    ///////////////


    // function vegan(invitados) {
        // La funcion llamada "vegan" recibe como argumento un objeto 'invitados', en el objeto tenemos objetos que representan los invitados
        // a una fiesta en donde todos tienen una propiedad "vegan" con un boolean.
        // debe retornar la cantidad de invitados que son vegan.
        // Por ej:
        // let invitados = {
        //     Luna: {
        //         vegan: false
        //     },
        //     Sebas: {
        //         vegan: false
        //     },
        //     Marce: {
        //         vegan: false
        //     },
        //     Nicky: {
        //         vegan: true
        //     }
        // };
        // vegan(invitados) devuelve 1
        // Tip: Podes usar el metodo for...in
        // Tu código aca:   

        //NOT FINISHED

    var invitados = {
        Diego: {
            vegan: false
        },
        Jesus: {
            vegan: true
        },
        Karen: {
            vegan: true
        },
        Fabio: {
            vegan: false
        },
        Miguel: {
            vegan: false
        }
    };

  //
    function vegan(invitados) {
        for(var elem in invitados);
        console.log()
    }

for (const elem in invitados) {
    if (Object.hasOwnProperty.call(invitados, elem)) {
        const element = invitados[elem];
        
    }
}



///////////////////

// function ideas(array) {}
    // La funcion llamada 'ideas' recibe un array 'array' de strings como parametro
    // entre estas ideas hay algunas buenas y otras no, si no encontramos una 'buena' retornamos 'Fail!'
    // si encontramos por lo menos una 'buena' retornamos 'Activa!'
    // y si encontramos al menos 3 'buena' retornamos 'Jackpot!'
    // Por ej:
    // ideas(['hola', 'palabra']) debe devolver 'Fail!'
    // ideas(['hola', 'buena', 'hi']) debe devolver 'Activa!'
    // Tu código aca:

    //UNFINISHED
  
  //Iniciar con 3 arrays, un fail, un activa y un jack pot:

  ideas1 = ["hola", "jesus", "diego", "perro", "mamá"];

  ideas2 = ["nombre", "buena", "mala", "Nina", "mascota"];

  ideas3 =["martes", "enero," ,"buena", "buena", "buena"];


  //definir funcion ideas(array) {}

  function ideas(Array) {
    if(!(Array.includes("buena"))){
        return("Fail!")};
    if(Array.filter(Array => Array.includes("buena") >=3)){   
        return("Jackpot!")}
    else if(Array.includes("buena" =1)){
        return("Activa!")};  
     
  };

  



  /////////////////////

//create constructor class "crearClasePersona"

function crearClasePersona() {
    class Persona {
        constructor(nombre,edad,hobbies,amigos) {
            this.nombre = nombre || "Diego";
            this.edad = edad || 29;
            this.hobbies = hobbies || ["box", "gym"];
            this.amigos = amigos || [amigos = {nombre: "jorge", edad: 30}, {nombre: "Toño", edad:29}]
        }
        



    };
}