function exam(input) {
  let numStudents = Number(input[0]);
  let failStudents = 0;
  let avgStudents = 0;
  let goodStudents = 0;
  let excellentStud = 0;
  let avgGrade = 0;
  for (i = 1; i <= numStudents; i++) {
    let grade = Number(input[i]);
    if (grade >= 2 && grade <= 2.99) {
      failStudents++;
      avgGrade += grade;
    } else if (grade >= 3 && grade <= 3.99) {
      avgStudents++;
      avgGrade += grade;
    } else if (grade >= 4 && grade <= 4.99) {
      goodStudents++;
      avgGrade += grade;
    } else if (grade >= 5.0) {
      excellentStud++;
      avgGrade += grade;
    }
  }
  console.log(
    `Top students: ${((excellentStud / numStudents) * 100).toFixed(2)}%`
  );
  console.log(
    `Between 4.00 and 4.99: ${((goodStudents / numStudents) * 100).toFixed(2)}%`
  );
  console.log(
    `Between 3.00 and 3.99: ${((avgStudents / numStudents) * 100).toFixed(2)}%`
  );
  console.log(`Fail: ${((failStudents / numStudents) * 100).toFixed(2)}%`);
  console.log(`Average: ${(avgGrade / numStudents).toFixed(2)}`);
}
exam(["6", "2", "3", "4", "5", "6", "2.2"]);
