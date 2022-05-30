function pyramid(input) {
  let num = Number(input[0]);
  let current = 1;
  let isBigger = false;
  let printCurrentLine = "";

  for (let rows = 1; rows <= num; rows++) {
    for (let col = 1; col <= rows; col++) {
      if (current > num) {
        isBigger = true;
        break;
      }
      printCurrentLine += current + " ";
      current++;
    }
    console.log(printCurrentLine);
    printCurrentLine = "";
    if (isBigger) {
      break;
    }
  }
}
pyramid(["12"]);
