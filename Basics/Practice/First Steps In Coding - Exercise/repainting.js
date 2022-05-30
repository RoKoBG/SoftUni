function repainting(input) {
  const priceNylon = 1.5;
  const pricePaint = 14.5;
  const priceThinner = 5;
  const extraPaint = 0.1;
  const extraNylon = 2;
  const bagprice = 0.4;
  const neededNylon = Number(input[0]);
  const neededPaint = Number(input[1]);
  const neededThinner = Number(input[2]);
  const neededHours = Number(input[3]);
  const materialPrice =
    (neededNylon + 2) * 1.5 +
    (neededPaint + neededPaint * extraPaint) * pricePaint +
    neededThinner * priceThinner +
    bagprice;
  const workmanPrice = ((materialPrice * 30) / 100) * neededHours;
  const totalPrice = materialPrice + workmanPrice;
  console.log(totalPrice);
}
repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);
