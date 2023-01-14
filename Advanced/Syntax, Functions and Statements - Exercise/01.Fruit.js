function fruit(fruit, weight, pricePerKg) {
    let weightInKg = weight /1000;
    let result = weightInKg * pricePerKg;
    console.log(`I need $${result.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
    
}fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);