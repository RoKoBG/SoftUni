function sequence2K(input) {
  let num = Number(input[0]);
  let count = 1;
  while (num >= count) {
    console.log(count);
    count = count * 2 + 1;
  }
}

sequence2K(["31"]);
