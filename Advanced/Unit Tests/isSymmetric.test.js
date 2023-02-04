const { expect } = require("chai");

const isSymmetric = require("./isSymmetric");

describe("Symmetry checker", function () {
    it("returns true for symmetrics array", () => {
        const arr = [1, 2, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });
    it("returns false for non-symmetrics array", () => {
        const arr = [1, 2, 3];
        expect(isSymmetric(arr)).to.be.false;
    });
    it("returns false non-array argument", () => {
        const data = 121;
        expect(isSymmetric(data)).to.be.false;
    });
    it("returns true when length is odd", () => {
        const arr = [1, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });
    it("returns false for array-like arguments", () => {
        const data = "1221";
        expect(isSymmetric(data)).to.be.false;
    });
});
