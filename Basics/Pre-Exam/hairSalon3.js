function hairSalon(input) {
  let goal = Number(input[0]);
  let index = 0;
  let command = input[index];
  index++;
  let moneyEarn = 0;
  let price = 0;
  while (command !== "closed") {
    switch (command) {
      case "haircut":
        if (haircut === "mens") {
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
