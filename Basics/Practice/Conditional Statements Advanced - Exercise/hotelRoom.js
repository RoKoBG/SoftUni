function hotelRoom(input) {
  const mayOctoberStudio = 50;
  const mayOctoberApart = 65;
  const juneSepStudio = 75.2;
  const juneSepApart = 68.7;
  const julyAugustStudio = 76;
  const julyAugustApart = 77;
  const month = input[0];
  const days = Number(input[1]);
  let totalMoneyStudio = 0;
  let totalMoneyApart = 0;
  switch (month) {
    case "May":
    case "October":
      totalMoneyStudio = days * mayOctoberStudio;
      totalMoneyApart = days * mayOctoberApart;
      if (days > 7 && days < 14) {
        totalMoneyStudio -= totalMoneyStudio * 0.05;
      } else if (days > 14) {
        totalMoneyStudio -= totalMoneyStudio * 0.3;
      }
      break;
    case "June":
    case "September":
      totalMoneyStudio = days * juneSepStudio;
      totalMoneyApart = days * juneSepApart;
      if (days > 14) {
        totalMoneyStudio -= totalMoneyStudio * 0.2;
      }
      break;
    case "July":
    case "August":
      totalMoneyStudio = days * julyAugustStudio;
      totalMoneyApart = days * julyAugustApart;
      break;
  }
  if (days > 14) {
    totalMoneyApart -= totalMoneyApart * 0.1;
  }
  console.log(`Apartment: ${totalMoneyApart.toFixed(2)} lv.`);
  console.log(`Studio: ${totalMoneyStudio.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);
