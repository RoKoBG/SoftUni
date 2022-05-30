function examPreparation(input) {
  let badGrade = Number(input[0]);
  let index = 1;
  let task = input[index];
  let numOfProblems = 0;
  let sumGrades = 0;
  let badGradeCount = 0;
  while (task !== "Enough") {
    numOfProblems++;
    index++;
    let currGrade = Number(input[index]);
    sumGrades += currGrade;
    if (currGrade <= 4) {
      badGradeCount++;
    }
    if (badGradeCount >= badGrade) {
      console.log(`You need a break, ${badGradeCount} poor grades.`);
      break;
    }
    index++;
    task = input[index];
  }
  if (task === "Enough") {
    let avgSum = (sumGrades / numOfProblems).toFixed(2);
    console.log(`Average score: ${avgSum}`);
    console.log(`Number of problems: ${numOfProblems}`);
    index -= 2;
    let task = input[index];
    console.log(`Last problem: ${task}`);
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
