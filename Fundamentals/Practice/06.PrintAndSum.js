function printAndSum(start, end) {
  let sum = 0;
  let textLine = "";
  for (let currentNum = start; currentNum <= end; currentNum++) {
    sum += currentNum;
    textLine += `${currentNum} `;
  }
  console.log(textLine);
  console.log(`Sum: ${sum}`);
}
printAndSum(0, 26);
