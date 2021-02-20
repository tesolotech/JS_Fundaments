
// Function and it type in js

//  - Function Statement
function name() {   // this way of creating function is call function statements
    console.info('console logging');
}

// - Function Expressions
const fun = function () {  // this way of creating function are called function expressions.
    console.log('function expressions');
}

// Function Expression treated as varialbe in js engine and keeping default value is undefined.

// What is difference between function statement and function expression
//  - Ans: The major differences is only hoisting.


// - Function Declaration

//  Function Statement is also known as function declaration. 

// - Arrow Function


// - First Class Function
//  - The ablity to user function as an values and
//    that can be pass it as an argumnet and can we return it 
//    from another function is called first class function. 

// - Name Function
//  A function with name is call named function

// - Anonymous Function

//    - A function wothout name is call anonymous function.

// function () {

// }
//  It is generally user where we need function as value like:

const func = () => console.log('anonymous function');

// - Parameter vs Arguments

// Parameter: 
    // function sum(param1, param2){

    // }

// Arguments:
    // sum(argument1, argument2)