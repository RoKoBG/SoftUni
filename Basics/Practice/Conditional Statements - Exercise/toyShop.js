function toyShop(input) {
  const holidayPrice = Number(input[0]);
  const puzzles = Number(input[1]);
  const dolls = Number(input[2]);
  const bears = Number(input[3]);
  const minions = Number(input[4]);
  const trucks = Number(input[5]);
  const puzzlePrice = 2.6;
  const dollsPrice = 3;
  const bearsPrice = 4.1;
  const minionsPrice = 8.2;
  const truckPrice = 2;
  let sumToys =
    puzzles * puzzlePrice +
    dolls * dollsPrice +
    bears * bearsPrice +
    minions * minionsPrice +
    trucks * truckPrice;
  let toysNum = puzzles + dolls + bears + minions + trucks;
  if (toysNum >= 50) {
    sumToys *= 0.75;
  }
  sumToys *= 0.9;
  const difference = Math.abs(sumToys - holidayPrice);
  if (sumToys >= holidayPrice) {
    console.log(`Yes! ${difference.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
  }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
