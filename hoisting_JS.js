// Hoisting : Hoisting is the concept in js by which you can access
//            these variable and function even before you have initlize it or you have put some 
//            value on it. we can access it without any error.


console.info(x); // undefined
console.info(z); // undefined
var total = sum(x, z);
console.log('total', total); // NaN
function sum(a, b) {
    return a + b; // undefined + undefined  = NaN
}

var x = 100;
var z = 100;
// var s =  sum(x,z);
// console.log(s) // 200