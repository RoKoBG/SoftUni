function histogram(input) {
  const nRow = Number(input[0]);
  let p1Count = 0;
  let p2Count = 0;
  let p3Count = 0;
  let p4Count = 0;
  let p5Count = 0;

  for (let i = 1; i <= nRow; i++) {
    let num = Number(input[i]);
    if (num < 200) {
      p1Count++;
    } else if (num >= 200 && num <= 399) {
      p2Count++;
    } else if (num >= 400 && num <= 599) {
      p3Count++;
    } else if (num >= 600 && num <= 799) {
      p4Count++;
    } else {
      p5Count++;
    }
  }
  let p1 = (p1Count / nRow) * 100;
  let p2 = (p2Count / nRow) * 100;
  let p3 = (p3Count / nRow) * 100;
  let p4 = (p4Count / nRow) * 100;
  let p5 = (p5Count / nRow) * 100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
