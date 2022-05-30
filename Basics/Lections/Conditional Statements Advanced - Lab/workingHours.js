function workingHours(input) {
  const time = Number(input[0]);
  const dayOfWeek = input[1];
  let workHour = 0;
  let sunday = 0;
  if (time >= 10 && time <= 18 && dayOfWeek !== "Sunday") {
    console.log("open");
  } else {
    console.log("closed");
  }
}
workingHours(["11", "Sunday"]);
