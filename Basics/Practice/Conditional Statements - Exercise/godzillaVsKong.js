function godzillaVsKong(input) {
  const budget = Number(input[0]);
  const people = Number(input[1]);
  const priceCloth = Number(input[2]);
  const decor = budget * 0.1; //10%
  let priceCloths = people * priceCloth;
  let movieCost = 0;
  if (people > 150) {
    priceCloths *= 0.9;
  }
  movieCost = decor + priceCloths;
  const difference = Math.abs(movieCost - budget);
  if (movieCost > budget) {
    console.log(
      `Not enough money!
       Wingard needs ${difference.toFixed(2)} leva more.`
    );
  } else {
    console.log(
      `Action!
       Wingard starts filming with ${difference.toFixed(2)} leva left.`
    );
  }
}
godzillaVsKong(["9587.88", "222", "55.68"]);
