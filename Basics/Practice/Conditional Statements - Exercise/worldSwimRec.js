function worldSwimRec(input) {
  const recInSecs = Number(input[0]);
  const distMeters = Number(input[1]);
  const timeSecs1Met = Number(input[2]);
  const waterResistance = Math.floor(distMeters / 15) * 12.5;
  const totalTime = distMeters * timeSecs1Met + waterResistance;
  if (totalTime >= recInSecs) {
    const secondsSlower = totalTime - recInSecs;
    console.log(
      `No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  }
}
worldSwimRec(["10464", "1500", "20"]);
worldSwimRec(["55555.67", "3017", "5.03"]);
