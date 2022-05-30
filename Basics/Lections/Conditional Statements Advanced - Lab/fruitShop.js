function fruitShop(input) {
  const fruit = input[0];
  const day = input[1];
  const amount = input[2];
  let price = 0;
  let weekend = day == "Saturday" || day == "Sunday";
  let week =
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday";
  if (weekend) {
    switch (fruit) {
      case "banana":
        price = 2.7 * amount;
        console.log(price.toFixed(2));
        break;
      case "apple":
        price = 1.25 * amount;
        console.log(price.toFixed(2));
        break;
      case "orange":
        price = 0.9 * amount;
        console.log(price.toFixed(2));
        break;
      case "grapefruit":
        price = 1.6 * amount;
        console.log(price.toFixed(2));
        break;
      case "kiwi":
        price = 3 * amount;
        console.log(price.toFixed(2));
        break;
      case "pineapple":
        price = 5.6 * amount;
        console.log(price.toFixed(2));
        break;
      case "grapes":
        price = 4.2 * amount;
        console.log(price.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (week) {
    switch (fruit) {
      case "banana":
        price = 2.5 * amount;
        console.log(price.toFixed(2));
        break;
      case "apple":
        price = 1.2 * amount;
        console.log(price.toFixed(2));
        break;
      case "orange":
        price = 0.85 * amount;
        console.log(price.toFixed(2));
        break;
      case "grapefruit":
        price = 1.45 * amount;
        console.log(price.toFixed(2));
        break;
      case "kiwi":
        price = 2.7 * amount;
        console.log(price.toFixed(2));
        break;
      case "pineapple":
        price = 5.5 * amount;
        console.log(price.toFixed(2));
        break;
      case "grapes":
        price = 3.85 * amount;
        console.log(price.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    console.log("error");
  }
}
fruitShop(["grape", "Workday", "0.5"]);
