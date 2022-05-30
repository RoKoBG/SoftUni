function cleverLily(input) {
  const age = Number(input[0]);
  const washingMachine = Number(input[1]);
  const toyPrice = Number(input[2]);
  let money = 0;
  let tempMoney = 10;
  let toyCounter = 0;

  for (let i = 1; i <= age; i++)
    if (i % 2 === 0) {
      money += tempMoney;
      tempMoney += 10;
      money -= 1;
    } else {
      toyCounter++;
    }
  money += toyCounter * toyPrice;
  if (money >= washingMachine) {
    moneyLeft = money - washingMachine;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    moneyNeed = washingMachine - money;
    console.log(`No! ${moneyNeed.toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
