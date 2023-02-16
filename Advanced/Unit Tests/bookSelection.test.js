const bookSelection = require("./bookSelection");
const { assert, expect } = require("chai");

describe("bookSelection", () => {
    describe("isGenreSuitable", () => {
        it("Genre True", () => {
            assert.equal(
                bookSelection.isGenreSuitable("Thriller", 13),
                "Those books are suitable"
            );
            assert.equal(
                bookSelection.isGenreSuitable("Horror", 13),
                "Those books are suitable"
            );
        });

        it("Genre False", () => {
            assert.equal(
                bookSelection.isGenreSuitable("Thriller", 12),
                "Books with Thriller genre are not suitable for kids at 12 age"
            );
            assert.equal(
                bookSelection.isGenreSuitable("Thriller", 9),
                "Books with Thriller genre are not suitable for kids at 9 age"
            );
            assert.equal(
                bookSelection.isGenreSuitable("Horror", 12),
                "Books with Horror genre are not suitable for kids at 12 age"
            );
            assert.equal(
                bookSelection.isGenreSuitable("Horror", 9),
                "Books with Horror genre are not suitable for kids at 9 age"
            );
        });
    });

    describe("isItAffordable", () => {
        it("Validate input", () => {
            assert.throw(
                () => bookSelection.isItAffordable("1", "1"),
                "Invalid input"
            );
        });
        it("Not affordable", () => {
            assert.equal(
                bookSelection.isItAffordable(2, 1),
                "You don't have enough money"
            );
            assert.equal(
                bookSelection.isItAffordable(5, 0),
                "You don't have enough money"
            );
        });
        it("Affordable", () => {
            assert.equal(
                bookSelection.isItAffordable(1, 1),
                "Book bought. You have 0$ left"
            );
            assert.equal(
                bookSelection.isItAffordable(1, 5),
                "Book bought. You have 4$ left"
            );
        });
    });
    describe("suitableTitles", () => {
        it("Validate input", () => {
            assert.throw(
                () => bookSelection.suitableTitles("test", "test"),
                "Invalid input"
            );
            assert.throw(
                () => bookSelection.suitableTitles(123, "test"),
                "Invalid input"
            );
            assert.throw(
                () => bookSelection.suitableTitles(["dsaads", "2", "3"], 1),
                "Invalid input"
            );
        });
        it("Same", () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "asd", genre: "qwe" }], "qwe")).to.be.deep.equal(["asd"]);
        });
    });
});
