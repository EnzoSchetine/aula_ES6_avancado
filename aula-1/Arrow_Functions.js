function log (value) {
    console.log(value);
}

log('test');

//funções anônimas
var sumOld = function (a, b) {
    return a + b;
}

console.log(sumOld(5, 5));

//arrow functions
var sum = (a, b) => a + b;

console.log(sum(5 , 5));

// var sum = a => a + 5;
// var sum = ({ a }) => a;
// var sum = (...a) => a;
// var sum = (a = 5) => a;

// var obj = {
//     test: '123'
// };

//return implícito de um objeto
var createObj = () => ({ test: 123 });
console.log(createObj);

//função construtora
function Car() {
    this.foo = 'bar';
};

console.log(new Car());

//erro
// var Car = () => {
//     this.foo = 'bar';
// };

// console.log(new Car());

// var obj = {
//     showContext: function showContext() {
//         console.log(this);
//     },
//     log: function(value) {
//         console.log(value);
//     }
// };

// obj.showContext();

// var obj = {
//     showContext: function showContext() {
//         this.log('test');
//     },
//     log: function(value) {
//         console.log(value);
//     }
// };

// obj.showContext();

// var obj = {
//     showContext: function showContext() {
//         this.log('test');

//         setTimeout(function() {
//             this.log('after 1000ms');
//         }, 1000);
//     },
//     log: function(value) {
//         console.log(value);
//     }
// };

// obj.showContext();

//fixar o contexto para apontar para o objeto
var obj = {
    showContext: function showContext() {
        this.log('test');

        setTimeout(
            function() {
                this.log('after 1000ms');
            }.bind(this), 
            1000
        );
    },
    log: function(value) {
        console.log(value);
    }
};

obj.showContext();

var obj = {
    showContext: function showContext() {
        var _that = this;

        setTimeout(function() {
            _that.log('after 1000ms');
        }, 1000);
    },
    log: function(value) {
        console.log(value);
    }
};

obj.showContext();

//com arrow function
var obj = {
    showContext: function showContext() {
        //this = objs

        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function(value) {
        console.log(value);
    }
};

obj.showContext();