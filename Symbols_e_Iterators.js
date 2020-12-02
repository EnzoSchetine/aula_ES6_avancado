//Symbols

/*const uniqueId = Symbol('Hello')//valor do symbol serve apenas para debug
const uniqueId2 = Symbol('Hello')// uniqueId2 !== uniqueId 
cont obj = {
    [uniqueId]: 'Hello', //não acessivel por Object.keys(), mas sim por getOwnPropertySymbols
}
console.log(obj);*/

const uniqueId = Symbol('Hello')
// Well known symbols

Symbol.iterator

const arr = [1, 2, 3, 4];
const str = 'String de teste';
/*const it = arr[Symbol.iterator]();
while(1){
    let {value,done} = it.next();
    if (done){
        break;
    }
    console.log(value);
}*/ //Não iterado

/*for (let value of arr){
    console.log(value);
}*/ //Iterado

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () =>{
                i++;
                return{
                    value: this.values[i-1],
                    done: i > this.values.length
                };
            }
        };
    }
};

/*const it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/ // Não iterado

/*for (let value of obj){
    console.log(value);
}*/ // Iterado

const arr2 = [...obj];
console.log(arr2);// usando Spread com objetos iteraveis