
console.log('Shadowing exmaple');

var temp = 10;

{
    var temp = 20;  // shadowing of temp, which is already availabe in global scope.
    const a = 20;
    let b = 30;
    console.log(temp); // 20 --  due to last one is shadowing to first one.
}

console.log(temp);   // 20  --  shadowing is applyed by js compiler