function calcDeposits(input) {
  const depositSum = Number(input[0]);
  const depositTerm = Number(input[1]);
  const depositRate = Number(input[2]);
  const rate = (depositSum * depositRate) / 100;
  const rateMonth = rate / 12;
  const totalSum = depositSum + depositTerm * rateMonth;
  console.log(totalSum);
}
calcDeposits(["2350", "6", "7"]);
