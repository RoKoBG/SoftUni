function concatenateData(input) {
  let firstName = input[0];
  let familyName = input[1];
  let age = input[2];
  let homeTown = input[3];
  let info = `You are ${firstName} ${familyName}, a ${age}-years old person from ${homeTown}.`;
  console.log(info);
}
concatenateData(["Rosen", "Koychev", 26, "Burgas"]);
