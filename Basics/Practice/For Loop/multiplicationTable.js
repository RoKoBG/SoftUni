function multiplicationTable(input) {
  const num = Number(input[0]);
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = i * num;
    console.log(`${i} * ${num} = ${sum}`);
  }
}
multiplicationTable(["5"]);
