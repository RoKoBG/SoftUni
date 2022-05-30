function centToMins(cent) {
  let years = cent * 100;
  let days = Math.trunc(years * 365.2422);
  let hours = 24 * days;
  let mins = 60 * hours;
  console.log(
    `${cent} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`
  );
}
centToMins(1);
centToMins(5);
