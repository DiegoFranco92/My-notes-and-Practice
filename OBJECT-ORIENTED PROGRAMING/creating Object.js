

let = circle1 = { //object
    radius: 1, //property
    location: { //property arrange as another oject with 2 properties
        x:1,
        y:1
    },
    draw: function() { //method
        console.log('draw');
    }
};  

circle1.draw();


// FACTORIES/CONSTRUCTORS method
// what if we want to create another circle?

//Factory function:
function createCircle (radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
let circle = createCircle(1);

// Constructor function:
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
let anotherCircle = new Circle(1)

//Iterate an Object

for (let key in anotherCircle) {
    console.log(key);
}
const keys = Object.keys(anotherCircle);
console.log(keys);
