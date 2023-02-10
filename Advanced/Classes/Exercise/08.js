if (
    !Object.values(juice)
        .map((x) => x.juice)
        .includes(juice)
) {
    currJuice = {
        juice,
        quantity: currQuantity,
    };
} else {
    currJuice = juices[juice];
    currJuice.quantity += currQuantity;
}
let currBottles = 0;
while (currJuice.quantity >= 1000) {
    currBottles++;
    currBottles.quantity -= 1000;
}
if (
    !Object.values(bottles)
        .map((x) => x.juice)
        .includes(juice) &&
    currBottles !== 0
) {
    currJuice = {
        juice,
        bottles: currBottles,
    };
    bottles[juice] = currJuice;
} else if (
    Object.values(bottles)
        .map((x) => x.juice)
        .includes(juice)
) {
    currJuice = bottles[juice];
    currJuice.bottles += currBottles;
}
}
for (const juice of Object.entries(bottles)) {
console.log(`${juice[0]} => ${juice[1].bottles}`);
}