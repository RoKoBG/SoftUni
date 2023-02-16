const carService = require("./03.CarService");
const { expect, assert } = require("chai");

describe("carService", () => {
    it("isItExpensive", () => {
        assert.equal(
            carService.isItExpensive("Engine"),
            "The issue with the car is more severe and it will cost more money"
        );
        assert.equal(
            carService.isItExpensive("Transmission"),
            "The issue with the car is more severe and it will cost more money"
        );
        assert.equal(
            carService.isItExpensive("Test"),
            "The overall price will be a bit cheaper"
        );
    });
    it("discount", () => {
        assert.throw(() => carService.discount("2", "2", "Invalid input"));
        assert.equal(carService.discount(2, 2), "You cannot apply a discount");
        assert.equal(carService.discount(1, 2), "You cannot apply a discount");
        assert.equal(
            carService.discount(3, 10),
            "Discount applied! You saved 1.5$"
        );
        assert.equal(
            carService.discount(7, 10),
            "Discount applied! You saved 1.5$"
        );
        assert.equal(
            carService.discount(8, 10),
            "Discount applied! You saved 3$"
        );
    });
    it("partsToBuy", () => {
        assert.throw(() => carService.partsToBuy("2", 2), "Invalid input");
        assert.throw(() => carService.partsToBuy(2, "2"), "Invalid input");
        assert.throw(
            () => carService.partsToBuy([1, 2, 3, 4], 2),
            "Invalid input"
        );
        assert.throw(
            () => carService.partsToBuy(["1", "2", "3"], 2),
            "Invalid input"
        );
        assert.throw(
            () => carService.partsToBuy(2, ["1", "2", "3"]),
            "Invalid input"
        );
        assert.equal(carService.partsToBuy([{}],['blowoff valve','injectors']),0)
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"])).to.be.deep.equal(375);
    });
    });
