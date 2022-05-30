function tradeComm(input) {
  const town = input[0];
  const amountSells = Number(input[1]);
  let sells = 0;
  let fiveHundred = amountSells >= 0 && amountSells <= 500;
  let oneThous = amountSells >= 500 && amountSells <= 1000;
  let tenThous = amountSells >= 1000 && amountSells <= 10000;
  let aboveTen = amountSells > 10000;

  if (fiveHundred) {
    switch (town) {
      case "Sofia":
        sells = amountSells * 0.05;
        console.log(sells.toFixed(2));
        break;
      case "Varna":
        sells = amountSells * 0.045;
        console.log(sells.toFixed(2));
        break;
      case "Plovdiv":
        sells = amountSells * 0.055;
        console.log(sells.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (oneThous) {
    switch (town) {
      case "Sofia":
        sells = amountSells * 0.07;
        console.log(sells.toFixed(2));
        break;
      case "Varna":
        sells = amountSells * 0.075;
        console.log(sells.toFixed(2));
        break;
      case "Plovdiv":
        sells = amountSells * 0.08;
        console.log(sells.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (tenThous) {
    switch (town) {
      case "Sofia":
        sells = amountSells * 0.08;
        console.log(sells.toFixed(2));
        break;
      case "Varna":
        sells = amountSells * 0.1;
        console.log(sells.toFixed(2));
        break;
      case "Plovdiv":
        sells = amountSells * 0.12;
        console.log(sells.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (aboveTen) {
    switch (town) {
      case "Sofia":
        sells = amountSells * 0.12;
        console.log(sells.toFixed(2));
        break;
      case "Varna":
        sells = amountSells * 0.13;
        console.log(sells.toFixed(2));
        break;
      case "Plovdiv":
        sells = amountSells * 0.145;
        console.log(sells.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    console.log("error");
  }
}
tradeComm(["Kaspichan", "-50"]);
