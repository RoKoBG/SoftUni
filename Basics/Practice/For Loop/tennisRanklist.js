function tennisRanklist(input) {
  let index = 0;
  let numberTour = Number(input[index]);
  index++;
  let startPoints = Number(input[index]);
  index++;
  let tempPoints = 0;
  let winCount = 0;
  for (let i = 0; i < numberTour; i++) {
    let score = input[index];
    index++;
    switch (score) {
      case "W":
        tempPoints += 2000;
        winCount++;
        break;
      case "F":
        tempPoints += 1200;
        break;
      case "SF":
        tempPoints += 720;
        break;
    }
  }
  let avgPoints = tempPoints / numberTour;
  let percentWin = (winCount / numberTour) * 100;
  let points = tempPoints + startPoints;
  console.log(`Final points: ${points}`);
  console.log(`Average points: ${Math.floor(avgPoints)}`);
  console.log(`${percentWin.toFixed(2)}%`);
}
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
