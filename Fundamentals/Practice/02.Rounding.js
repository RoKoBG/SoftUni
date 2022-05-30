function rounding(num, precision) {
  if (precision > 15) {
    precision = 15;
  }
  let roundNum = num.toFixed(precision);
  console.log(parseFloat(roundNum));
}
rounding(10.5, 3);
