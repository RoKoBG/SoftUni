function specNumbs(num) {
  let sum = 0;
  let res = "";
  for (i = 1; i <= num; i++) {
    i = i.toString();
    for (let x = 0; x < i.length; x++) {
      sum += Number(i[x]);
    }
    res = sum === 5 || sum === 7 || sum === 11;
    console.log(res ? `${i} -> True` : `${i} -> False`);
    sum = 0;
  }
}
specNumbs(15);
specNumbs(20);
