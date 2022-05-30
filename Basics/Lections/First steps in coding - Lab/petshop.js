function petShop(input) {
  let dogPacks = input[0];
  let catPacks = input[1];
  let dogFood = 2.5 * dogPacks;
  let catFood = 4 * catPacks;
  let endPrice = dogFood + catFood;
  console.log(`${endPrice} lv.`);
}
petShop(["13", "9"]);
