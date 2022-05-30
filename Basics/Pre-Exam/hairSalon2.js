function hairSalon(input) {
  let goal = Number(input[0]);
  let index = 0;
  let command = input[index];
  index++;
  let moneyEarn = 0;
  let price = 0;
  while (moneyEarn < goal) {
    command = input[index];
    index++;
    if (command != "closed");
    {
      let type = input[index];

      if (command == "haircut") {
        if (type == "mens") {
          moneyEarn += 15;
        }
        if (type == "ladies") {
          moneyEarn += 20;
        }
        if (type == "kids") {
          moneyEarn += 10;
        }
      }
      if (command == "color") {
        let type = input[index];
        if (type == "touch up") {
          moneyEarn += 20;
        }
        if (type == "full color") {
          moneyEarn += 30;
        }
      }
    }
    if (command == "closed") {
      break;
    }
    command = input[index];
    index++;
  }
  if (moneyEarn >= goal) {
    console.log("You have reached your target for the day!");
    console.log(`Earned money: ${moneyEarn}lv.`);
  } else {
    let diff = Math.abs(goal - moneyEarn);
    console.log(`Target not reached! You need ${diff}lv. more.`);
    console.log(`Earned money: ${moneyEarn}lv.`);
  }
}
hairSalon(["50", "color", "full color", "haircut", "ladies"]);
