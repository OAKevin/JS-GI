var a = 10;
var b = 5;
function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function div(a,b){
    return a / b;
}
console.log( a ,"plus", b ,"equals", add(a, b));
console.log( a ,"minus", b ,"equals", sub(a, b));
console.log( a ,"times", b ,"equals", mul(a, b));
console.log( a ,"divided by", b ,"equals", div(a, b));
