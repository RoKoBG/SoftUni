function launchBreak(input) {
  const nameSeries = input[0];
  const seriesTime = Number(input[1]);
  const breakLenght = Number(input[2]);
  const launchTime = breakLenght / 8; // 1/8
  const restTime = breakLenght / 4; // 1/4
  const timeLeft = Math.abs(breakLenght - launchTime - restTime);
  const difference = Math.abs(timeLeft - seriesTime);
  if (timeLeft >= seriesTime) {
    console.log(
      `You have enough time to watch ${nameSeries} and left with ${Math.ceil(
        difference
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(
        difference
      )} more minutes.`
    );
  }
}
launchBreak(["Game of Thrones", "60", "96"]);
launchBreak(["Teen Wolf", "48", "60"]);
