function yardGreening(input) {
  let yardSize = input[0] * 7.61;
  let discount = 0.18 * yardSize;
  let endPrice = yardSize - discount;

  console.log(`The final price is: ${endPrice} lv.
The discount is: ${discount} lv.
   `);
}
yardGreening(["550"]);
