var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

function add(a, b){
    let sum = a + b 
    return sum;
}

function subtract(a, b){
    let difference = a -b 
    return difference;
}

function multiply(a, b){
    let product = a * b 
    return product;
}

function divide(a, b){
    let quotient = a / b 
    return quotient;
}

function increment(n){
    let addition = n + 1
    return addition;
}

function decrement(n){
    let subtraction = n - 1
    return subtraction;
}

function makeInt(x){
    return (parseInt(x, 10));
}

function preserveDecimal(string){
    return (parseFloat(string));
}
preserveDecimal();
