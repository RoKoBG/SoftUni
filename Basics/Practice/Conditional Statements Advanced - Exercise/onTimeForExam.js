function onTimeForExam(input) {
  const hourExam = Number(input[0]);
  const minExam = Number(input[1]);
  const hourArrived = Number(input[2]);
  const minArrived = Number(input[3]);
  let totalExamMin = hourExam * 60 + minExam;
  let totalMinArrived = hourArrived * 60 + minArrived;
  const differenceInTime = Math.abs(totalExamMin - totalMinArrived);
  const hourDiff = Math.floor(differenceInTime / 60);
  let minDiff = differenceInTime % 60;
  if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
    minDiff = `0${minDiff}`;
  }
  if (totalMinArrived === totalExamMin) {
    console.log(`On time`);
  } else if (totalMinArrived > totalExamMin && differenceInTime < 60) {
    console.log(`Late`);
    console.log(`${minDiff} minutes after the start`);
  } else if (totalMinArrived > totalExamMin && differenceInTime >= 60) {
    console.log(`Late`);
    console.log(`${hourDiff}:${minDiff} hours after the start`);
  } else if (differenceInTime <= 30) {
    console.log(`On time`);
    console.log(`${minDiff} minutes before the start`);
  } else if (differenceInTime > 30 && differenceInTime < 60) {
    console.log(`Early`);
    console.log(`${minDiff} minutes before the start`);
  } else {
    console.log(`Early`);
    console.log(`${hourDiff}:${minDiff} hours before the start`);
  }
}

onTimeForExam(["9", "30", "9", "50"]);
onTimeForExam(["9", "00", "8", "30"]);
onTimeForExam(["16", "00", "15", "00"]);
onTimeForExam(["9", "00", "10", "30"]);
onTimeForExam(["14", "00", "13", "55"]);
onTimeForExam(["11", "30", "8", "12"]);
onTimeForExam(["10", "00", "10", "00"]);
onTimeForExam(["11", "30", "10", "55"]);
onTimeForExam(["11", "30", "12", "29"]);
