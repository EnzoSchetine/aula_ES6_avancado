// Destructuring Assingment

/*var arr = ['Apple', 'Banana', 'Orange',['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0]; //Antes ES6

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']]; //ES6
console.log(apple, apple2);
console.log(tomato, tomato2);*/// ES6

/*var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue'] 
    }
};
var nameOld = obj.name; 
var age = obj.props.age; //Antes ES6
var color1 = obj.props.favoriteColors[0];
var color2 = obj.props.favoriteColors[1];

var { name: name2 } = obj; // ES6
console.log(nameOld + ' ' + name2);
name2 = 'Enzo'; // Não altera o obj inicial
console.log(nameOld + ' ' + name2);
var { props: { age: age2, favoriteColors: [color3, color4] }} = obj;
console.log(age + ' ' + age2);
console.log(color1 + ' ' + color2 + ' ' + color3 + ' ' + color4);*/

/* var arr = [{name: 'Apple', type: 'fruit'}];
var fruit = arr[0].name;
var [{name}] = arr;
console.log(fruit + ' ' + name); */

// Destructuring functions

/*function sum(arr) {
    var a = arr[0]
    var b = arr[1]
    return a + b;
}
console.log(sum([5,5]));*/ // Sem destructuring

function sum([a, b] = [0, 0]) {
    return a + b;
}
function sumobj({a = 0, b = 0}) {
    return a + b;
}
console.log(sum([5,5]));// Com destructuring e default values
console.log(sumobj({a: 5, b: 5}));// Usando objetos

