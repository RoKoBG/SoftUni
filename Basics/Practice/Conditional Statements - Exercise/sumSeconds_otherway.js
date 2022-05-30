function sumSeconds(input) {
  const firstTime = Number(input[0]);
  const secondTime = Number(input[1]);
  const thirdTime = Number(input[2]);
  const totalTime = firstTime + secondTime + thirdTime;
  let mins = 0;
  let secs = 0;
  if (totalTime >= 120) {
    mins = 2;
    secs = totalTime - 120;
  } else if (totalTime >= 60) {
    mins = 1;
    secs = totalTime - 60;
  } else {
    secs = totalTime;
  }
  if (secs < 10) {
    console.log(`${mins}:0${secs}`);
  } else {
    console.log(`${mins}:${secs}`);
  }
}
sumSeconds(["35", "45", "44"]);
