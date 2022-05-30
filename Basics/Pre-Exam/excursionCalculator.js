function excursionCalculator(input) {
  const numPeople = Number(input[0]);
  const season = input[1];
  let pricePerPerson = 0;

  if (numPeople <= 5) {
    switch (season) {
      case "spring":
        pricePerPerson = 50;
        break;
      case "summer":
        pricePerPerson = 48.5;
        break;
      case "autumn":
        pricePerPerson = 60;
        break;
      case "winter":
        pricePerPerson = 86;
        break;
    }
  } else if (numPeople > 5) {
    switch (season) {
      case "spring":
        pricePerPerson = 48;
        break;
      case "summer":
        pricePerPerson = 45;
        break;
      case "autumn":
        pricePerPerson = 49.5;
        break;
      case "winter":
        pricePerPerson = 85;
        break;
    }
  }
  let totalSum = numPeople * pricePerPerson;
  if (season === "summer") {
    totalSum *= 0.85;
  } else if (season === "winter") {
    totalSum /= 0.925928;
  }
  console.log(`${totalSum.toFixed(2)} leva.`);
}
excursionCalculator(["5", "spring"]);
excursionCalculator(["10", "summer"]);
excursionCalculator(["15", "autumn"]);
excursionCalculator(["20", "winter"]);
