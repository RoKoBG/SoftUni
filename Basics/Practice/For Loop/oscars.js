function oscars(input) {
  let isNominee = false;
  let index = 0;
  const nameActor = input[index];
  index++;
  let points = Number(input[index]);
  index++;
  let juryCount = Number(input[index]);
  index++;
  for (let i = 0; i < juryCount; i++) {
    let name = input[index];
    index++;
    let juryPoints = Number(input[index]);
    index++;
    points += (name.length * juryPoints) / 2;
    if (points > 1250.5) {
      console.log(
        `Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(
          1
        )}!`
      );
      isNominee = true;
      break;
    }
  }
  if (!isNominee) {
    let diff = Math.abs(points - 1250.5);
    console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
  }
}
oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
