function townPopulation(arr) {
  const result = {};
  for (const ele of arr) {
    const [name, population] = ele.split(" <-> ");

    if (name in result==false) {
      result[name] = 0;
    }
    result[name] += Number(population);
  }
  console.log(
    Object.entries(result)
      .map(([name, population]) => `${name} : ${population}`)
      .join("\n")
  );
}

townPopulation([
  "Sofia <-> 1200000",

  "Montana <-> 20000",

  "New York <-> 10000000",

  "Washington <-> 2345000",

  "Las Vegas <-> 1000000",
]);
// Result
// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000
townPopulation([
  "Istanbul <-> 100000",

  "Honk Kong <-> 2100004",

  "Jerusalem <-> 2352344",

  "Mexico City <-> 23401925",

  "Istanbul <-> 1000",
]);
// Result
// Istanbul : 101000
// Honk Kong : 2100004
// Jerusalem : 2352344
// Mexico City : 23401925
