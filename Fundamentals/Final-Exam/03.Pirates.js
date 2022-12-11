function pirates(arr) {
  let input = arr.shift();
  let townsObj = {};
  while (input !== "Sail") {
    let [town, people, gold] = input.split("||");
    people = Number(people);
    gold = Number(gold);
    if (!townsObj.hasOwnProperty(town)) {
      townsObj[town] = { people, gold };
    } else {
      townsObj[town].people += people;
      townsObj[town].gold += gold;
    }

    input = arr.shift();
  }
  input = arr.shift();
  while (input !== "End") {
    let [command, town, ...rest] = input.split("=>");
    if (command === "Plunder") {
      let people = Number(rest[0]);
      let gold = Number(rest[1]);
      console.log(
        `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
      townsObj[town].people -= people;
      townsObj[town].gold -= gold;
      if (townsObj[town].people <= 0 || townsObj[town].gold <= 0) {
        console.log(`${town} has been wiped off the map!`);
        delete townsObj[town];
      }
    } else if (command === "Prosper") {
      let gold = Number(rest[0]);
      if (gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        townsObj[town].gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${townsObj[town].gold} gold.`
        );
      }
    }

    input = arr.shift();
  }
  let workArr = Object.entries(townsObj);
  let sorted = workArr.sort((a, b) => {
    if (a[1].gold == b[1].gold) {
      return b[0].localeCompare(a[0]);
    }
    else{
        return a[0].gold - b[0].gold;
    }
  });
  if(sorted.length<=0){
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
  }else{
    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
    for(const ele of sorted){
        console.log(`${ele[0]} -> Population: ${ele[1].people} citizens, Gold: ${ele[1].gold} kg`);
    }
  }
  console.table(townsObj)
}
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
