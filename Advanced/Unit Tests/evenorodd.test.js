const{expect, assert}=require('chai');
const isOddOrEven = require('./evenorodd.js');

describe("isOddOrEven", ()=>{
    it('Should return even when string length is even', ()=>{
        assert.equal(isOddOrEven('even'), 'even');
    })
    it('Should return odd when string length is odd', ()=>{
        assert.equal(isOddOrEven('odd'), 'odd');
    })
    it('Should return undefined when the input is not a string', ()=>{
        assert.equal(isOddOrEven(1), undefined);
    })
})