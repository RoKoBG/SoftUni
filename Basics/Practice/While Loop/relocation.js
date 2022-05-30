function relocation(input) {
  const widthFree = Number(input[0]);
  const lengthFree = Number(input[1]);
  const heightFree = Number(input[2]);
  const freeSpace = widthFree * lengthFree * heightFree;

  let index = 3;
  let command = input[index];
  index++;
  let sumBoxes = 0;
  while (command !== "Done") {
    let boxes = Number(command);
    sumBoxes += boxes;
    if (sumBoxes > freeSpace) {
      break;
    }
    command = input[index];
    index++;
  }
  let diff = Math.abs(sumBoxes - freeSpace);
  if (sumBoxes < freeSpace) {
    console.log(`${diff} Cubic meters left.`);
  } else {
    console.log(`No more free space! You need ${diff} Cubic meters more.`);
  }
}
relocation(["10", "10", "2", "20", "20", "20", "20", "122"]);
