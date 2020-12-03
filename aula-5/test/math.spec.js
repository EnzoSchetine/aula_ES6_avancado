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

/*const assert = require('assert');
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
});*/

// Chai

/*const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
let value = 0;
describe('Math class', function() {
    beforeEach(function() {
        value = 0;
    });
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);
        value = 5
        math.sum(5, 5, (value) => {
            expect(value).to.equal(10);
            done();
        })
    });
    it.only('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Enzo Schetine'
        }
        const obj2 = {
            name: 'Enzo Schetine'
        }
        expect(obj).to.deep.equal(obj2);
        //expect(obj)
        //    .to.have.property('name')
        //    .equal('Enzo Schetine');
        //expect(math.multiply(value, 5)).to.equal(0);
    })
});*/

// Sinon

const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');
let value = 0;
describe('Math class', function() {
    beforeEach(function() {
        value = 0;
    });
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);
        value = 5
        math.sum(5, 5, (value) => {
            expect(value).to.equal(10);
            done();
        })
    });
    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Enzo Schetine'
        }
        const obj2 = {
            name: 'Enzo Schetine'
        }
        expect(obj).to.deep.equal(obj2);
    });
    it.only('Calls res with sum and index values', function() {
        const req = {};
        const res = {
            //load: sinon.spy()
            load: function load() {
                console.log('Called!')
            }
        }
        sinon.spy(res,'load');
        /*sinon.stub(res,'load').returns('xpto');*/
        const math = new Math();
        math.printSum(req, res, 5, 5);
        //expect(res.load.args[0][0]).to.equal('index');
        expect(res.load.args[0][1]).to.equal(10);
    });
});