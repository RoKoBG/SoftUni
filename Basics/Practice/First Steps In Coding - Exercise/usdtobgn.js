function usdToBgn(input) {
  const fixedValue = 1.79549;
  const usd = Number(input[0]);
  const bgn = usd * fixedValue;
  console.log(bgn);
}
usdToBgn(["100"]);
