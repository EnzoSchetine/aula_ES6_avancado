var obj = {
    prop1: 'Digital Innovation One'
};

console.log(obj);

var prop2 = 'Digital Innovation One';

var obj = {
    prop1: 'Digital Innovation One',
    prop2: prop2
};

console.log(obj);

//es6
var obj = {
    prop1: 'Digital Innovation One',
    prop2 //omitir a atribuição
};

console.log(obj);

function method1() {
    console.log('method called');
};

var obj = {
    method1
};

obj.method1();

var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(1, 5));

var obj = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(1, 5));
console.log(obj);

var propName = 'test';
var obj = {};
obj[propName] = 'prop value';
console.log(obj);

var obj = {
    [propName + 'concat']: 'prop value'
};

console.log(obj);