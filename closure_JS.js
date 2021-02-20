
/*
Closure: Function along with it lexical scope bundle together forms a closure.
*/

console.info('Closure Example');

// Simple example
function outer() {
    var a = 10;
    var b = 20;

    function inner() {
        console.log(a);
        console.log(b);
    }
    inner();
}
// outer();

// Another example with return fun

function x() {
    var num = 10;

    function y() {
        console.log(num);
    }
    return y;
}

var inner = x();
inner();

