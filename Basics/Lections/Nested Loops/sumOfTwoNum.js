function sumOfTwoNumbers(input) {
  const start = Number(input[0]);
  const end = Number(input[1]);
  const magicNum = Number(input[2]);
  let flag = false;
  let counter = 0;
  for (let x = start; x <= end; x++) {
    for (let y = start; y <= end; y++) {
      counter++;
      let result = x + y;
      if (result === magicNum) {
        console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`);
        flag = true;
      }
    }
    if (flag) {
      break;
    }
  }
  if (flag === false) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}
sumOfTwoNumbers(["88", "888", "1000"]);
