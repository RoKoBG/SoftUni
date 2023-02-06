function processOddPos(arr) {
  const filtered = arr
    .filter((a, b) => b % 2 == 1)
    .map((a) => a * 2)
    .reverse();

  return filtered;
}
processOddPos([10, 15, 20, 25]);
// 50 30
processOddPos([3, 0, 10, 4, 7, 3]);
// 6 8 0
