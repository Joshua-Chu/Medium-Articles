//Using the var keyword to declare a variable
//Example 1

var firstName = 'Joshua'; //Declaring a variable using the var keyword

function nameCall(){
    var lastName = 'Chu'; // Declaring a variable using a var keyword inside a function
    console.log(firstName);
    console.log(lastName);
}

nameCall();
//Output: 
// Joshua
//Chu

console.log(firstName); // Output = Joshua
console.log(lastName); // ReferenceError

// Example 2

var firstName = 'Joshua'; //Declaring a variable using the var keyword

if(firstName == 'Joshua'){
    var lastName = 'Chu';
    console.log(firstName, lastName); // Output = Joshua Chu
}

console.log(firstName) // Output = Joshua
console.log(lastName) // Output = Chu

//Declaring a variable using the keywords let and const
//You can change the keywords used and still have the same result
// Take note though, the let and const have different functionalities but this is outside
//The scope of the tutorial

//Example 3 & 4
let firstName = 'Joshua'; //Declaring a variable using the let keyword

function nameCall(){
    let lastName = 'Chu'; // Declaring a variable using a let keyword inside a function
    console.log(firstName);
    console.log(lastName);
}

nameCall();
//Output: 
// Joshua
//Chu

console.log(firstName); // Output = Joshua
console.log(lastName); // ReferenceError

//Example 5

let firstName = 'Joshua'; //Declaring a variable using the let keyword

if(firstName == 'Joshua'){
    let lastName = 'Chu';
    console.log(firstName, lastName); // Output = Joshua Chu
}

console.log(firstName) // Output = Joshua
console.log(lastName) // ReferenceError

//Example 6
let firstName = 'Joshua'; //Declaring a variable using the let keyword

{
    let lastName = 'Chu';
    console.log(firstName, lastName); // Output = Joshua Chu
}

console.log(firstName) // Output = Joshua
console.log(lastName) // ReferenceError

