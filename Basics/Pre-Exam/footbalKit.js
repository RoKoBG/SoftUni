function footbalKit(input) {
  const priceShirt = Number(input[0]);
  const priceToAchieve = Number(input[1]);
  let priceShorts = priceShirt * 0.75;
  let priceSocks = priceShorts * 0.2;
  let priceShoes = (priceShirt + priceShorts) * 2;
  let totalPrice = priceShirt + priceShorts + priceSocks + priceShoes;
  totalPrice *= 0.85;

  if (totalPrice >= priceToAchieve) {
    console.log("Yes, he will earn the world-cup replica ball!");
    console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
  } else {
    let diff = priceToAchieve - totalPrice;
    console.log("No, he will not earn the world-cup replica ball.");
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
  }
}
footbalKit(["25", "100"]);
footbalKit(["55", "310"]);
footbalKit(["59.99", "500"]);
