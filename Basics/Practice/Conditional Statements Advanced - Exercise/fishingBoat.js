function fishingBoat(input) {
  const budget = Number(input[0]);
  const season = input[1];
  const fisherman = Number(input[2]);
  let rentBoat = 0;
  let finalMoney = 0;
  switch (season) {
    case "Spring":
      rentBoat = 3000;
      break;
    case "Summer":
      rentBoat = 4200;
      break;
    case "Autumn":
      rentBoat = 4200;
      break;
    case "Winter":
      rentBoat = 2600;
      break;
  }
  if (fisherman <= 6) {
    finalMoney = rentBoat - (rentBoat *= 0.1);
  } else if (fisherman >= 7 && fisherman <= 11) {
    finalMoney = rentBoat - (rentBoat *= 0.15);
  } else if (fisherman >= 12) {
    finalMoney = rentBoat - (rentBoat *= 0.25);
  }
  if (fisherman % 2 == 0 && season != "Autumn") {
    finalMoney = finalMoney - (finalMoney *= 0.05);
  }
  const difference = Math.abs(finalMoney - budget);
  if (budget < finalMoney) {
    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
  } else if (budget >= finalMoney) {
    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
  }
}
fishingBoat(["3600", "Autumn", "6"]);
