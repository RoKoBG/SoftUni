function skiTrip(input) {
  const days = Number(input[0] - 1);
  const typeRoom = input[1];
  const rating = input[2];
  const roomOne = 18;
  const apartment = 25;
  const presidenApart = 35;
  let totalPrice = 0;
  if (days < 10) {
    switch (typeRoom) {
      case "apartment":
        totalPrice = apartment * days;

        totalPrice -= totalPrice * 0.3;
        break;
      case "president apartment":
        totalPrice = presidenApart * days;

        totalPrice -= totalPrice * 0.1;
        break;
      default:
        totalPrice = roomOne * days;
        break;
    }
  } else if (days >= 10 && days <= 15) {
    switch (typeRoom) {
      case "apartment":
        totalPrice = apartment * days;

        totalPrice -= totalPrice * 0.35;
        break;
      case "president apartment":
        totalPrice = presidenApart * days;

        totalPrice -= totalPrice * 0.15;
        break;
      default:
        totalPrice = roomOne * days;
        break;
    }
  } else if (days > 15) {
    switch (typeRoom) {
      case "apartment":
        totalPrice = apartment * days;

        totalPrice -= totalPrice * 0.5;
        break;
      case "president apartment":
        totalPrice = presidenApart * days;
        totalPrice -= totalPrice * 0.2;
        break;
      default:
        totalPrice = roomOne * days;
        break;
    }
  }
  if (rating == "positive") {
    totalPrice += totalPrice * 0.25;
  } else {
    totalPrice -= totalPrice * 0.1;
  }
  console.log(totalPrice.toFixed(2));
}
skiTrip(["2", "apartment", "positive"]);
