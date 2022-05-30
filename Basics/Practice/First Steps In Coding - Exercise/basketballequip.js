function basketballEquip(input) {
  const priceTrainYear = Number(input[0]);
  const shoePrice = priceTrainYear - (40 / 100) * priceTrainYear;
  const outfitPrice = shoePrice - (20 / 100) * shoePrice;
  const ballPrice = outfitPrice / 4;
  const accPrice = ballPrice / 5;
  const totalPrice =
    priceTrainYear + shoePrice + outfitPrice + ballPrice + accPrice;
  console.log(totalPrice);
}
basketballEquip(["365"]);
