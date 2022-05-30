function catDiet(input) {
  const procentFat = Number(input[0]);
  const procentProtein = Number(input[1]);
  const procentCarbohydrate = Number(input[2]);
  const totalCalories = Number(input[3]);
  const procentWater = Number(input[4]);

  let totalFat = ((procentFat / 100) * totalCalories) / 9;
  let totalProtein = ((procentProtein / 100) * totalCalories) / 4;
  let totalCarbohydrate = ((procentCarbohydrate / 100) * totalCalories) / 4;

  let totalFood = totalFat + totalProtein + totalCarbohydrate;

  let caloriesForGram = totalCalories / totalFood;

  let waterInFood = 100 - procentWater;

  let calories = (waterInFood / 100) * caloriesForGram;

  console.log(calories.toFixed(4));
}
catDiet(["20", "60", "20", "1800", "50"]);
