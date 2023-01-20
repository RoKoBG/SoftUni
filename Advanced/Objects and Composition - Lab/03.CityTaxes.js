function taxes(name, pop, treasury) {
  let Obj = {
    name: name,
    population: pop,
    treasury: treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      this.population += Math.floor((this.population * percentage) / 100);
    },
    applyRecession(percentage) {
      this.treasury -= Math.ceil((this.treasury * percentage) / 100);
    },
  };
  return Obj;
}
const city = taxes("Tortuga", 7000, 15000);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(15);
console.log(city.treasury);
