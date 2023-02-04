function createCalculator() {
    let sum = 0;
    return {
        add(value) {
            sum += Number(value);
        },
        subtract(value) {
            sum -= value;
        },
        get() {
            return sum;
        },
    };
}
module.exports = createCalculator;