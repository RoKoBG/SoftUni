const {  assert } = require("chai");
const  lookupChar  = require("./charLookUp.js");

describe("LookUpChar", () => {
        it("Should return undefined if first argument is not a string", () => {
            assert.equal(lookupChar(1, 1), undefined);
        });

        it("Should return undefined if second argument is not an integer", () => {
            assert.equal(lookupChar('1', 1.5), undefined);
        });

        it("Should return 'Incorrect index' if index is zer0", () => {
            assert.equal(lookupChar('test', -1), 'Incorrect index');
        });

        it("Should return 'Incorrect index' if index is outside of the boundary of the array", () => {
            assert.equal(lookupChar('test', 10), 'Incorrect index');
        });

        it("Should return the correct character at index 0", () => {
            assert.equal(lookupChar('test', 0), 't');
        });
        
        it("Should return the correct character if the index is the last on the length", () => {
            assert.equal(lookupChar('test', 3), 't');
        });

        it("Should return the correct character", () => {
            assert.equal(lookupChar('string', 0), 's');
        });

        it("Should return the correct character", () => {
            assert.equal(lookupChar('Pesho', 4), 'o');
        });
        
    });
