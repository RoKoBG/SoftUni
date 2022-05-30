function numFrom1ToNWithStep3(input) {
  const num = Number(input[0]);

  for (i = 1; i <= num; i += 3) {
    console.log(i);
  }
}
numFrom1ToNWithStep3(["10"]);
