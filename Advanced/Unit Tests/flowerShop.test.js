const flowerShop = require("./flowerShop");
const assert = require("chai").assert;

describe("flowerShop", function () {
    it("Calculate price", () => {
        assert.equal(
            flowerShop.calcPriceOfFlowers("aa", 1, 1),
            "You need $1.00 to buy aa!"
        );
        assert.equal(
            flowerShop.calcPriceOfFlowers("aa", 2, 1),
            "You need $2.00 to buy aa!"
        );
        assert.equal(
            flowerShop.calcPriceOfFlowers("aa", 2, 2),
            "You need $4.00 to buy aa!"
        );
        assert.equal(
            flowerShop.calcPriceOfFlowers("aa", 3, 2),
            "You need $6.00 to buy aa!"
        );
    });
    it("Calculates ERROR", () => {
        assert.throw(
            () => flowerShop.calcPriceOfFlowers("aa", "p", 1),
            "Invalid input"
        );
        assert.throw(
            () => flowerShop.calcPriceOfFlowers("aa", "1", "p"),
            "Invalid input"
        );
        assert.throw(
            () => flowerShop.calcPriceOfFlowers(1, 1, 1),
            "Invalid input"
        );
    });
    it("checkFlowersAvailable", () => {
        assert.equal(
            flowerShop.checkFlowersAvailable("a", ["a", "a", "a"]),
            "The a are available!"
        );
        assert.equal(
            flowerShop.checkFlowersAvailable("pp", ["a", "b", "c"]),
            "The pp are sold! You need to purchase more!"
        );
    });
    it('sellFlowers', ()=>{
        assert.throw(()=>flowerShop.sellFlowers(1,2),'Invalid input!');
        assert.throw(()=>flowerShop.sellFlowers(['a','b','c'],'2'),'Invalid input!');
        assert.equal(flowerShop.sellFlowers(['a','b','c'],0), 'b / c')
        assert.equal(flowerShop.sellFlowers(['a','b','c','d'],1), 'a / c / d')
        assert.equal(flowerShop.sellFlowers(['a','b','c','d'],3), 'a / b / c')
    })
    
});
