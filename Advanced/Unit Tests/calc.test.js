const { expect } = require("chai");
const createCalculator = require("./calc.js");

describe("Calculator", function () {
    let calc = null;
    beforeEach(() => {
        calc = createCalculator();
    });
    it("returns zero initial value", () => {
        expect(calc.get()).to.equal(0);
    });
    describe("number arguments", () => {
        it("can add numbers", () => {
            calc.add(1);
            expect(calc.get()).to.equal(1);
        });
        it("can add more than one numbers", () => {
            calc.add(1);
            calc.add(1);
            expect(calc.get()).to.equal(2);
        });
        it("can subtract nums", () => {
            calc.subtract(1);
            expect(calc.get()).to.equal(-1);
        });
        it("can add and subtract", () => {
            calc.add(2);
            calc.subtract(1);
            expect(calc.get()).to.equal(1);
        });
    });
    describe("string arguments", () => {
        it("can add nums as strings", () => {
            calc.add("1");
            expect(calc.get()).to.equal(1);
        });
        it("can subtract nums as strings", () => {
            calc.subtract("1");
            expect(calc.get()).to.equal(-1);
        });
        it("can add and subtract nums as strings", () => {
            calc.add('2');
            calc.subtract('1');
            expect(calc.get()).to.equal(1);
        });
    });
});
