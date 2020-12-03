class app{
    constructor(){
        this.bind();
    }

    bind() {
        document.querySelector('.add-button').addEventListener('click', () => {
            this.handleClick(1);
        });
        //debugger;
        document.querySelector('.sub-button').addEventListener('click', () => {
            this.handleClick(-1);
        });
    }
    handleClick(val) {
        const counterEl = document.querySelector('.counter');
        const value = parseInt(counterEl.innerText);
        counterEl.innerText = value + val;
    }
}
new app();

// Console

// console.log('Black text');
// console.warn('Yellow text with alert');
// console.error('Red error text');

// console.trace();

/*console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');*/

/*console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000);*/

//console.table(['Enzo Schetine', 'Test Text']);
//console.assert(1 === 1, 'Ops');
//console.log('%c styled log', 'color: blue;');