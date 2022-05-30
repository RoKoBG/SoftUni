function areaOfFigures(input) {
  const type = input[0];
  if (type === "square") {
    const a = Number(input[1]);
    const result = a * a;
    console.log(result.toFixed(3));
  } else if (type === "rectangle") {
    const a = Number(input[1]);
    const b = Number(input[2]);
    const result = a * b;
    console.log(result.toFixed(3));
  } else if (type === "circle") {
    const radius = Number(input[1]);
    const result = Math.PI * Math.pow(radius, 2);
    console.log(result.toFixed(3));
  } else {
    let a = Number(input[1]);
    let b = Number(input[2]);
    const result = (a * b) / 2;
    console.log(result.toFixed(3));
  }
}
areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
