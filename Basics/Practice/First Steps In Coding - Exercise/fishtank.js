function fishTank(input) {
  const lenght = Number(input[0]);
  const width = Number(input[1]);
  const height = Number(input[2]);
  const percent = Number(input[3] / 100);
  const capacity = lenght * width * height;
  const capacityInLitres = capacity * 0.001;
  const neededLitres = capacityInLitres * (1 - percent);
  console.log(neededLitres);
}
fishTank(["85", "75", "47", "17"]);
fishTank(["105", "77", "89", "18.5"]);
