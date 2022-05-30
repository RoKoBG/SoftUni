function shopping(input) {
  const budget = Number(input[0]);
  const videoCard = Number(input[1]);
  const proccessor = Number(input[2]);
  const ram = Number(input[3]);
  const videoCardPrice = 250;
  const videoSum = videoCard * videoCardPrice;
  const proccPrice = videoSum * 0.35 * proccessor;
  const ramPrice = videoSum * 0.1 * ram;
  let totalPrice = videoSum + proccPrice + ramPrice;
  if (videoCard > proccessor) {
    //totalPrice = totalPrice - totalPrice * 0.15; - 15% от цената 1 начин
    totalPrice *= 0.85; // - Друг начин да изкараме 15% от цената
  }
  const difference = Math.abs(totalPrice - budget).toFixed(2);
  if (totalPrice <= budget) {
    console.log(`You have ${difference} leva left!`);
  } else {
    console.log(`Not enough money! You need ${difference} leva more!`);
  }
}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
