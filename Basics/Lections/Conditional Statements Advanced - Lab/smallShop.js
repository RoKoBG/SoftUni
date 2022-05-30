function smallShop(input) {
  const product = input[0];
  const city = input[1];
  const amount = input[2];
  let price = 0;
  switch (city) {
    case "Sofia":
      switch (product) {
        case "coffee":
          price = amount * 0.5;
          break;
        case "water":
          price = amount * 0.8;
          break;
        case "beer":
          price = amount * 1.2;
          break;
        case "sweets":
          price = amount * 1.45;
          break;
        case "peanuts":
          price = amount * 1.6;
          break;
      }
      break;
    case "Plovdiv":
      switch (product) {
        case "coffee":
          price = amount * 0.4;
          break;
        case "water":
          price = amount * 0.7;
          break;
        case "beer":
          price = amount * 1.15;
          break;
        case "sweets":
          price = amount * 1.3;
          break;
        case "peanuts":
          price = amount * 1.5;
          break;
      }
      break;
    case "Varna":
      switch (product) {
        case "coffee":
          price = amount * 0.45;
          break;
        case "water":
          price = amount * 0.7;
          break;
        case "beer":
          price = amount * 1.1;
          break;
        case "sweets":
          price = amount * 1.35;
          break;
        case "peanuts":
          price = amount * 1.55;
          break;
      }
      break;
  }
  console.log(price);
}
smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "2"]);
smallShop(["water", "Plovdiv", "2"]);
smallShop(["sweets", "Sofia", "2.23"]);
