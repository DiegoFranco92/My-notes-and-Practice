function Car(marca, cv, color) {
    this.marca = marca || "Kia";
    this.cv = cv || 1400;
    this.color = color || "blanco";
}

var audi = new Car("audi", 1500, "verde")
var bmw = new Car("BMW", 1800, "negro")

var mercedez = new Car ("mercedes",2100,"negro");


Car.prototype.getMarca = function() {
    return this.marca;
}

console.log(mercedez.getMarca());