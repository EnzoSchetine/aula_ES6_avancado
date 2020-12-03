const uniqueId = Symbol('Hello');
const arr = [1, 2, 3, 4];
const str = 'String de Teste';
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
      for (var i = 0; i < this.values.length; i++) {
          yield this.values[i];
      }
    }
};
for (let value of obj) {
    console.log(value);
}// Simplificando Iterators com Generators

// Generators

/*function* hello() {
    console.log('Hello');
    yield 1; // pausa a função e passa valor como iterador
    console.log('From');
    const value = yield 2;
    //console.log('Function!');
    console.log(value);
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));*/ // Passa um valor para dentro da função

/*function* naturalNumbers(){
    let number = 0;
    while (1){
        yield number;
        number++;
    }
}// gera numeros infinitamnte
const it = naturalNumbers();
console.log(it.next());*/