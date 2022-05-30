function cinema(input) {
  type = input[0];
  rows = Number(input[1]);
  columns = Number(input[2]);
  let income = 0;
  if (type == "Premiere") {
    let income = rows * columns * 12;
    console.log(`${income.toFixed(2)} leva`);
  } else if (type == "Normal") {
    let income = rows * columns * 7.5;
    console.log(`${income.toFixed(2)} leva`);
  } else if (type == "Discount") {
    let income = rows * columns * 5;
    console.log(`${income.toFixed(2)} leva`);
  }
}
cinema(["Premiere", "10", "12"]);
