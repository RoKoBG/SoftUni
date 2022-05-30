function trainTheTrainers(input) {
  let index = 0;
  let countJury = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let countGrades = 0;
  let avgGrade = 0;

  while (command !== "Finish") {
    countGrades++;
    let presentationName = command;
    let tempAvgGrade = 0;
    for (i = 1; i <= countJury; i++) {
      let tempGrade = Number(input[index]);
      index++;
      tempAvgGrade += tempGrade;
    }
    tempAvgGrade = tempAvgGrade / countJury;
    let presentationResult = `${presentationName} - ${tempAvgGrade.toFixed(
      2
    )}.`;
    console.log(presentationResult);
    avgGrade += tempAvgGrade;
    command = input[index];
    index++;
  }
  avgGrade = avgGrade / countGrades;
  console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
