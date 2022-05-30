function cake(input) {
  const cakeWidth = Number(input[0]);
  const cakeLength = Number(input[1]);
  const cakeSize = cakeLength * cakeWidth;
  const pieceOfCake = 1;
  const totalCakePieces = cakeSize / pieceOfCake;

  index = 2;
  let command = input[index];
  index++;
  let counterTakenPieces = 0;

  while (command !== "STOP") {
    let currentTakenPieces = Number(command);
    counterTakenPieces += currentTakenPieces;
    if (counterTakenPieces >= totalCakePieces) {
      break;
    }
    command = input[index];
    index++;
  }
  let difference = Math.abs(totalCakePieces - counterTakenPieces);
  if (counterTakenPieces < totalCakePieces) {
    console.log(`${difference} pieces are left.`);
  } else {
    console.log(`No more cake left! You need ${difference} pieces more.`);
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
