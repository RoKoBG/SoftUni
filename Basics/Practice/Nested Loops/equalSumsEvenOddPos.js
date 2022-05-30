function equalSumsEvenOddPos(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let printLine = "";

  for (let index = start; index <= end; index++) {
    let currNum = "" + index;
    let evenSum = 0;
    let oddSum = 0;

    for (let j = 0; j < currNum.length; j++) {
      let currDigit = Number(currNum.charAt(j));
      if (j % 2 == 0) {
        evenSum += currDigit;
      } else {
        oddSum += currDigit;
      }
    }
    if (oddSum === evenSum) {
      printLine += `${index} `;
    }
  }
  console.log(printLine);
}
equalSumsEvenOddPos(["123456", "124000"]);
