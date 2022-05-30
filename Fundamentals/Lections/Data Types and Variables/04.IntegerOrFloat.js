function intOrFloat(first, sec, third) {
  let sum = first + sec + third;
  if (sum % 1 === 0) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}
intOrFloat(9, 100, 1.1);
intOrFloat(100, 200, 303);
