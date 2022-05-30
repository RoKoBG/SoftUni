function hairSalon(commands) {
  let goal = Number(commands.shift());
  let moneyEarn = 0;
  while (commands !== "closed") {
    if (goal == moneyEarn) {
      console.log("You have reached your target for the day!");
      console.log(`Earned money ${moneyEarn}lv.`);
      break;
    }
    switch (commands) {
      case "haircut":
        if (haircut == "mens") {
          moneyEarn += 15;
        } else if (haircut == "ladies") {
          moneyEarn += 20;
        } else if (haircut == "kids") {
          moneyEarn += 10;
        }
        break;
      case "color":
        if (color == "touch up") {
          moneyEarn += 20;
        } else if (color == "full color") {
          moneyEarn += 30;
        }
        break;
    }
  }
}
hairSalon([
  "300",
  "haircut",
  "ladies",
  "haircut",
  "kids",
  "color",
  "touch up",
  "closed",
]);
