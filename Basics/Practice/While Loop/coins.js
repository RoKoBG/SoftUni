function coins(input) {
  let change = input[0];
  let convertedChange = parseInt(change * 100);
  let coins = 0;
  while (convertedChange > 0) {
    if (convertedChange - 200 >= 0) {
      convertedChange -= 200;
    } else if (convertedChange - 100 >= 0) {
      convertedChange -= 100;
    } else if (convertedChange - 50 >= 0) {
      convertedChange -= 50;
    } else if (convertedChange - 20 >= 0) {
      convertedChange -= 20;
    } else if (convertedChange - 10 >= 0) {
      convertedChange -= 10;
    } else if (convertedChange - 5 >= 0) {
      convertedChange -= 5;
    } else if (convertedChange - 2 >= 0) {
      convertedChange -= 2;
    } else if (convertedChange - 1 >= 0) {
      convertedChange -= 1;
    }
    coins++;
  }
  console.log(coins);
}
coins(["2.73"]);
