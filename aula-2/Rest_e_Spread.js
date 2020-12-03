// Rest Operator ...
// pega os parâmetros restantes.

/*function sum(a, b){
    var value = 0;
    for (var i = 0; i < arguments.length; i++)
    {
        value += arguments[i];
    }
    return value;
}
console.log(sum(1, 2, 10, 9, 12, 3, 5));*/ //antigamente

/*function sum(...args){
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(1, 2, 10, 9, 12, 3, 5))*/ //ES6

// Spread operator ...
// Quebra listas e passa como parâmetros.
// funciona também com strings, arrays, objects e objetos iteraveis

/*const sum = (...rest) => {
    return multiply.apply(undefined, rest);
};
const multiply = (...args) => args.reduce((acc, value) => acc*value, 1);
console.log(sum(1, 2, 10, 9, 12, 3, 5));*/ //antigamente

/*const sum = (...rest) => {
    return multiply(...rest);
};
const multiply = (...args) => args.reduce((acc, value) => acc*value, 1);
console.log(sum(1, 2, 10, 9, 12, 3, 5));*/ // ES6

/*const str = 'String de Exemplo';
function logArgs(...args){
    console.log(args);
}
logArgs(...str);*/

/*const arr = [1, 2, 3, 4];
function logArgs(a, b, c, d){
    console.log(a, b, c, d);
}
logArgs(...arr);*/

/*const arr = [1, 2, 3, 4];
const arr2 = [5, 6, 7];
const arr3 = [...arr, ...arr2, 8, 9, 0];
console.log(arr3);*/

/*const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test2: 'hello'
};
console.log(obj2);*/ 
//OBS: spread com objetos literais só funcionam para construir objetos
