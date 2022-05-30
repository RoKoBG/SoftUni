function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  let count = 0;
  let i = 1;
  let sumGrade = 0;
  let isExcluded = false;
  while (i <= 12) {
    grade = Number(input[index]);
    index++;
    if (grade < 4) {
      count++;
      if (count > 1) {
        isExcluded = true;
        console.log(`${name} has been excluded at ${i} grade`);
        break;
      }
      continue;
    }
    sumGrade += grade;
    i++;
  }
  if (!isExcluded) {
    let avgGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
  }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
