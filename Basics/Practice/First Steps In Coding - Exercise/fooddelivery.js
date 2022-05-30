function foodDelivery(input) {
  const chickenMenu = 10.35;
  const fishMenu = 12.4;
  const vegyMenu = 8.15;
  const deliveryFee = 2.5;
  const numberChicken = Number(input[0]);
  const numberFish = Number(input[1]);
  const numberVegy = Number(input[2]);
  const foodPrice =
    numberChicken * chickenMenu + numberFish * fishMenu + numberVegy * vegyMenu;
  const dessertPrice = foodPrice * (20 / 100);
  const totalPrice = foodPrice + dessertPrice + deliveryFee;
  console.log(totalPrice);
}

foodDelivery(["2", "4", "3"]);
foodDelivery(["9", "2", "6"]);
