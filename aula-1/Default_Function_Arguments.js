// function multiply(a, b) {
//     return a * b;
// };

// console.log(multiply(5, 5));

//retorna NaN
// console.log(multiply(5));

//operador OU para garantir que realize a multiplicação
// function multiply(a, b) {
//     b = b || 1;

//     return a * b;
// };

// console.log(multiply(5));
// console.log(multiply(5, 0)); //retorna 5

//validação de tipo
// function multiply(a, b) {
//     b = typeof b === 'undefined' ? 1 : b;

//     return a * b;
// };

// function multiply(a, b) {
//     if (typeof b === 'undefined') {
//         b = 1;
//     };

//     return a * b;
// };

// console.log(multiply(5, 0));

//função com valor default
function multiply(a, b = 1) { //atribuir 1 para b quando b for 'undefined'
    return a * b;
};

console.log(multiply(5));
console.log(multiply(5, 0));

//referenciar valor
// function multiply(a, b = a) { 
//     return a * b;
// };

//erro de declaração
// function multiply(b = a, a) { 
//     return a * b;
// };

//lazy evaluation
function randomNumber() {
    console.log('Generating a random number...');

    return Math.random() * 10;
}

function multiplyLazy(a, b = randomNumber()) { 
    return a * b;
};

console.log(multiplyLazy(5));
console.log(multiplyLazy(5));