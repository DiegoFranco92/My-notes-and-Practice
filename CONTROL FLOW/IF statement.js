//another time of control flow
//conditional statement

//if Statement
// if a condition is true, we do something

const age = 25;

if(age > 20){
    console.log("you are over 20 years old");
}
//becouse the condition is true. the code block is going to run.

//ELSE statement

let password = "diego1992";

if (password.length >= 8) {
    console.log('that paswoord is long!');
}   else { //this will only apply if the condition above is False
    console.log('this password is short :(');
}


//switch statements
// it evaluates an expresion.
//matching the expression's value agains a series of CASEs:

const fruits = "Papaya";
switch (fruits) {
    case "Orange":
        console.log('Oranges are $0.60 a pound');
        break; //BREAK is use to stop the code from loging the bellow coditions
    case "Mango":
        console.log('Mangos are $1 a pound');
        break
    case "Banana":
        console.log('Bananas are $.80 a pound');
        break
    case "Papaya":
        console.log('Papayas are $0.40 a pound');
        break;    
    default:
        console.log('Sorry, we are out of ' + fruits + ".");
}