function newHouse(input) {
  const rosePrice = 5;
  const dahliaPrice = 3.8;
  const tulipPrice = 2.8;
  const narcissPrice = 3;
  const gladiolusPrice = 2.5;
  const type = input[0];
  const numFlowers = input[1];
  const budget = input[2];
  let finalPrice = 0;
  switch (type) {
    case "Roses":
      if (numFlowers > 80) {
        finalPrice -= numFlowers * rosePrice * 0.1;
      }
      finalPrice += numFlowers * rosePrice;
      break;
    case "Dahlias":
      if (numFlowers > 90) {
        finalPrice -= numFlowers * dahliaPrice * 0.15;
      }
      finalPrice += numFlowers * dahliaPrice;
      break;
    case "Tulips":
      if (numFlowers > 80) {
        finalPrice -= numFlowers * tulipPrice * 0.15;
      }
      finalPrice += numFlowers * tulipPrice;
      break;
    case "Narcissus":
      if (numFlowers < 120) {
        finalPrice += numFlowers * narcissPrice * 0.15;
      }
      finalPrice += numFlowers * narcissPrice;
      break;
    case "Gladiolus":
      if (numFlowers < 80) {
        finalPrice += numFlowers * gladiolusPrice * 0.2;
      }
      finalPrice += numFlowers * gladiolusPrice;
      break;
  }
  if (budget >= finalPrice) {
    const moneyLeft = budget - finalPrice;
    console.log(
      `Hey, you have a great garden with ${numFlowers} ${type} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    const moneyNeeded = finalPrice - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}

newHouse(["Narcissus", "119", "360"]);
