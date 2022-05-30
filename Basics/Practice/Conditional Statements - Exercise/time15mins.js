function time15Mins(input) {
  let hours = Number(input[0]);
  let mins = Number(input[1]);
  mins += 15;
  if (mins >= 60) {
    hours += 1;
    mins -= 60;
  }
  if (hours >= 24) {
    hours = 0;
  }
  if (mins < 10) {
    console.log(`${hours}:0${mins}`);
  } else {
    console.log(`${hours}:${mins}`);
  }
}
time15Mins(["0", "01"]);
