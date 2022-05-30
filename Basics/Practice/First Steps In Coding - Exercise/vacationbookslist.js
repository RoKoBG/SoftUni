function vacBooksList(input) {
  const numberPages = Number(input[0]);
  const pagesPerHour = Number(input[1]);
  const numberDays = Number(input[2]);
  const totalTime = numberPages / pagesPerHour;
  const hoursPerDay = totalTime / numberDays;
  console.log(hoursPerDay);
}
vacBooksList(["212", "20", "2"]);
vacBooksList(["432", "15", "4"]);
