//Pass by Value, Pass by reference
// primitive type are pass by value 

// let a = 10;  //pass by value
// let b = "b"; // pass by value
// let c = a; // pass by value


// objects and everything else is pass by reference
 //c = c + 1; // is now pass by reference


 //examples
 let a = 10;
let b = "hi";
let c = [1,2];
let d = [3,4,5];
d.push(6);

console.log('a = ' + a);
console.log('b = ' + b);
console.log('c = ' + c);
console.log('d = ' + d);