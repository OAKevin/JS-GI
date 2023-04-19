var x = window.prompt("Type a number.");
let op = window.prompt("Type an operation(add,sub,mul,div)");
var y = window.prompt("Type a number.");
var a = parseInt(x);
var b = parseInt(y);
function add(a,b){
    return a + b;
};
function sub(a,b){
    return a - b;
};
function mul(a,b){
    return a * b;
};
function div(a,b){
    return a / b;
};
console.log(op);
if (op == "add"){
    document.write(a ," + ", b ," = ", add(a, b))
}else if(op == "sub"){
    document.write(a ," - ", b ," = ", sub(a, b))
}else if(op == "mul"){
    document.write(a ," x ", b ," = ", mul(a, b))
}else if(op == "div"){
    document.write(a ," / ", b ," = ", div(a, b))
}else{
    
        document.write("write a proper operation")
    
}
console.log( a ,"plus", b ,"equals", add(a, b));
console.log( a ,"minus", b ,"equals", sub(a, b));
console.log( a ,"times", b ,"equals", mul(a, b));
console.log( a ,"divided by", b ,"equals", div(a, b));
