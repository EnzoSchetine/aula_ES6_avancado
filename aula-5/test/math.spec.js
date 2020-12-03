/*const assert = require('assert');
const Math = require('../src/math.js');
describe('Math class', function() {
    it('Sum two numbers', function() {
        const math = new Math();
        assert.equal(math.sum(5, 5), 10);
    });
});*/ // Síncrono

/*const assert = require('assert');
const Math = require('../src/math.js');
describe('Math class', function() {
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);
        math.sum(5, 5, (value) => {
            assert.equal(value, 10);
            done();
        })
    });
    it('Multiply two numbers')
});*/// Assincrono

/*const assert = require('assert');
const Math = require('../src/math.js');
describe('Math class', function() {
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);
        math.sum(5, 5, (value) => {
            assert.equal(value, 10);
            done();
        })
    });
    //it.only('Multiply two numbers', function() {
    it.skip('Multiply two numbers', function() {
        const math = new Math();
        assert.equal(math.multiply(5, 5), 25);
    })
});*/// o unico 'it' executado é com o only, skip pula o teste

const assert = require('assert');
const Math = require('../src/math.js');
let value = 0;
describe('Math class', function() {
    //hooks
    beforeEach(function() {// existe também o before, after, afterEach
        value = 0;
    });
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);
        value = 5
        math.sum(5, 5, (value) => {
            assert.equal(value, 10);
            done();
        })
    });
    it('Multiply two numbers', function() {
        const math = new Math();
        assert.equal(math.multiply(value, 5), 0);
    })
});