function negPosNums(arr) {
  let result = [];
  for (const num of arr) {
    if (num < 0) {
      result.unshift(num);
    } else if (num >= 0) {
      result.push(num);
    }
  }
  result.forEach((a) => {
    console.log(a);
  });
}

negPosNums([7, -2, 8, 9]);

//-2
// 7
// 8
// 9
negPosNums([3, -2, 0, -1]);

//-1
//-2
// 3
// 0
