function building(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);

  for (let floor = x; floor > 0; floor--) {
    let res = "";
    for (let ap = 0; ap < y; ap++) {
      if (floor === x) {
        res += `L${floor}${ap} `;
      } else if (floor % 2 == 0) {
        res += `O${floor}${ap} `;
      } else {
        res += `A${floor}${ap} `;
      }
    }
    console.log(res);
  }
}
building(["6", "4"]);
