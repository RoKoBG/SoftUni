function sumSeconds(input) {
  const timeFirst = Number(input[0]);
  const timeSecond = Number(input[1]);
  const timeThird = Number(input[2]);
  let totalTime = timeFirst + timeSecond + timeThird;
  let mins = Math.floor(totalTime / 60);
  let secs = totalTime % 60;
  if (secs < 10) {
    console.log(`${mins}:0${secs}`);
  } else {
    console.log(`${mins}:${secs}`);
  }
}
sumSeconds(["50", "50", "49"]);
