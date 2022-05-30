function suppForSchool(input) {
  const pricePens = 5.8;
  const priceMarker = 7.2;
  const priceDet = 1.2;
  const penPacks = Number(input[0]);
  const packPriceMarkers = Number(input[1]);
  const detLitres = Number(input[2]);
  const discPercent = Number(input[3]);
  const totalPrice =
    penPacks * pricePens +
    packPriceMarkers * priceMarker +
    detLitres * priceDet;
  const priceWithDisc = totalPrice - (discPercent / 100) * totalPrice;
  console.log(priceWithDisc);
}
suppForSchool(["2", "3", "4", "25"]);
suppForSchool(["4", "2", "5", "13"]);
