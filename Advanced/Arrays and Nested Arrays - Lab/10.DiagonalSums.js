function diagonalSums(arr) {
  let main = 0;
  let sec = 0;
  for (let i = 0; i < arr.length; i++) {
    main += arr[i][i];
    sec += arr[i][arr.length - i - 1];
  }
  console.log(`${main} ${sec}`);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
// 80 50
console.log("-------------------");
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
// 99 25
