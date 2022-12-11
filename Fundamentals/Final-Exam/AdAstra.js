function adAstra(input) {
  let regEx =
    /(#|\|)(?<name>[A-Z][a-z]+(?: [A-Z]?[a-z]+)*)\1(?<date>\d\d\/\d\d\/\d\d)\1(?<calories>\d+)\1/g;
  let allMatches = input[0].matchAll(regEx);
  let totalCal = 0;
  for (const element of allMatches) {
    totalCal += Number(element.groups.calories);
  }
  let days = Math.floor(totalCal / 2000);
  console.log(`You have food to last you for: ${days} days!`);
  allMatches = input[0].matchAll(regEx);
  for (const element of allMatches) {
    console.log(
      `Item: ${element.groups.name}, Best before: ${element.groups.date}, Nutrition: ${element.groups.calories}`
    );
  }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
