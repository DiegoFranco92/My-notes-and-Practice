// function buscandoAWally(array) {
    // La función llamada 'buscandoAWally' recibe como argumento un arreglo de 'string' y debe devolver un 'string' que diga
    // 'Encontre a Wally en la posicion [indice del arreglo donde esta]'
    // Ej:
    // buscandoAWally(['Dobby', 'Harry', 'Dementor', 'Wally', 'Sirius']) debe retornar 'Encontre a Wally en la posicion 3'
    // ya que 'Wally' se encuentra en la posicion 3 del arreglo.
    // Tu código aca:

    function buscandoAWally(names = ["diego", "jesus","nina", "wally" ]) {
        for (name of names) {
            if (name === "wally")
            console.log("encontre a wally en la posicion " + names.wally)
            
        }
    }