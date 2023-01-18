function lastKNumSeq(n, k) {
  let arr = [1];
  let sum = 0;
  for (let i = 1; i < n; i++) {
   let lastK = arr.slice(-k);
   let sum = 0;
   for(const num of lastK){
    sum+=Number(num);
   }
   arr.push(sum)
  }
  return arr;
}
lastKNumSeq(6, 3);
// [1, 1, 2, 4, 7, 13]
lastKNumSeq(8, 2);
// [1, 1, 2, 3, 5, 8, 13, 21]
