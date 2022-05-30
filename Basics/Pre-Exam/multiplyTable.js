function multiplyTable([n]) {
  let hundreds = n % 10;
  let left = (n - hundreds) / 10;
  let decimals = left % 10;
  let units = (left - decimals) / 10;

  for (let a = 1; a <= hundreds; a++) {
    for (let b = 1; b <= decimals; b++) {
      for (let c = 1; c <= units; c++) {
        let result = a * b * c;

        console.log(`${a} * ${b} * ${c} = ${result};`);
      }
    }
  }
}

multiplyTable(["324"]);
