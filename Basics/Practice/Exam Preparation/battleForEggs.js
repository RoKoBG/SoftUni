function battleForEggs(input) {
  index = 0;
  let player1 = Number(input[index]); // "5"
  index++;
  let player2 = Number(input[index]); // "4"
  index++;
  let winner = input[index]; // "one"
  index++;
  while (winner !== "End of battle") {
    if (winner === "one") {
      player2--;
    } else if (winner === "two") {
      player1--;
    }
    if (player1 === 0) {
      console.log("Player one is out of eggs.");
      console.log(`Player two has ${player2} eggs left.`);
      break;
    } else if (player2 === 0) {
      console.log("Player two is out of eggs.");
      console.log(`Player one has ${player1} eggs left.`);
      break;
    }
    winner = input[index];
    index++;
  }
  if (winner === "End of battle") {
    console.log(`Player one has ${player1} eggs left.`);
    console.log(`Player two has ${player2} eggs left.`);
  }
}
battleForEggs(["6", "3", "one", "two", "two", "one", "one"]);
battleForEggs(["2", "6", "one", "two", "two"]);
battleForEggs(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
