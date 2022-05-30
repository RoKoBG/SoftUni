function reqReading(numPages, pagesPerHour, numDays) {
  let totalTime = numPages / pagesPerHour;
  let reqHours = totalTime / numDays;
  console.log(reqHours);
}
reqReading(212, 20, 2);
reqReading(432, 15, 4);
