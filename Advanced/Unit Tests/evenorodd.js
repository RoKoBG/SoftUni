function isOddOrEven(string) {
    if (typeof string !== "string") {
        return undefined;
    }
    return string.length % 2 === 0 ? "even" : "odd";
}
console.log(isOddOrEven(1));
module.exports = isOddOrEven;
