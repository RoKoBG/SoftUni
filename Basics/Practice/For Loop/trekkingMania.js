function trekkingMania(input) {
  const groups = Number(input.shift(0));

  let musalaGroup = 0;
  let monblanGroup = 0;
  let kilimanjaroGroup = 0;
  let k2Group = 0;
  let everestGroup = 0;

  for (let i = 0; i < groups; i++) {
    let number = Number(input[i]);
    if (number <= 5) {
      musalaGroup += number;
    } else if (number >= 6 && number <= 12) {
      monblanGroup += number;
    } else if (number >= 13 && number <= 25) {
      kilimanjaroGroup += number;
    } else if (number >= 26 && number <= 40) {
      k2Group += number;
    } else if (number >= 41) {
      everestGroup += number;
    }
  }
  let allPeople =
    musalaGroup + monblanGroup + kilimanjaroGroup + k2Group + everestGroup;
  let percentMusala = (musalaGroup * 100) / allPeople;
  let percentMonblan = (monblanGroup * 100) / allPeople;
  let percentKili = (kilimanjaroGroup * 100) / allPeople;
  let percentK2 = (k2Group * 100) / allPeople;
  let percentEverest = (everestGroup * 100) / allPeople;

  console.log(`${percentMusala.toFixed(2)}%`);
  console.log(`${percentMonblan.toFixed(2)}%`);
  console.log(`${percentKili.toFixed(2)}%`);
  console.log(`${percentK2.toFixed(2)}%`);
  console.log(`${percentEverest.toFixed(2)}%`);
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
