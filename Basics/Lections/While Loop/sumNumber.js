function sumNumbers(input) {
  let index = 0;
  let num = Number(input[index]);
  index++;
  let sum = 0;
  while (sum < num) {
    let tempNum = Number(input[index]);
    index++;
    sum += tempNum;
  }
  console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]);
