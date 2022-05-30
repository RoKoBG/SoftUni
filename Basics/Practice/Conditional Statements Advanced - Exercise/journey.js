function journey(input) {
  const budget = Number(input[0]);
  const season = input[1];
  let destination = 0;
  let totalMoney = 0;
  let typeVacation = 0;
  if (budget <= 100) {
    destination = "Bulgaria";
    switch (season) {
      case "summer":
        typeVacation = "Camp";
        totalMoney = budget * 0.3;
        break;
      case "winter":
        typeVacation = "Hotel";
        totalMoney = budget * 0.7;
        break;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    switch (season) {
      case "summer":
        typeVacation = "Camp";
        totalMoney = budget * 0.4;
        break;
      case "winter":
        typeVacation = "Hotel";
        totalMoney = budget * 0.8;
        break;
    }
  } else if (budget > 1000) {
    destination = "Europe";
    typeVacation = "Hotel";
    totalMoney = budget * 0.9;
  }
  console.log(`Somewhere in ${destination}
  ${typeVacation} - ${totalMoney.toFixed(2)}`);
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);
