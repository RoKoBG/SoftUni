function triangleOfNum(n) {
  for (let row = 1; row <= n; row++) {
    let textLine = "";
    for (let col = 1; col <= row; col++) {
      textLine += `${row} `;
    }
    console.log(textLine);
  }
}
triangleOfNum(20);
