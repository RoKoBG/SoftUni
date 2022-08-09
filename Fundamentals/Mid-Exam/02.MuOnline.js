function muOnline(str) {
  let hp = 100;
  let tempHp = 0;
  let currHp = 0;
  let bitcoins = 0;
  let room = str.split("|");
  let roomCount = 0;

  for (let line = 0; line < room.length; line++) {
    roomCount++;
    let act = room[line];
    let [command, amount] = act.split(" ");

    switch (command) {
      case "potion":
        currHp = hp;
        tempHp = hp;
        currHp += Number(amount);
        if (currHp <= 100) {
          hp += Number(amount);
          console.log(`You healed for ${amount} hp.`);
          console.log(`Current health: ${hp} hp.`);
        } else if (currHp > 100) {
          let diff = 100 - tempHp;
          hp = 100;
          console.log(`You healed for ${diff} hp.`);
          console.log(`Current health: ${hp} hp.`);
        }
        break;

      case "chest":
        bitcoins += Number(amount);
        console.log(`You found ${amount} bitcoins.`);
        break;

      default:
        let monster = command;
        let dmg = amount;
        hp -= dmg;
        if (hp <= 0) {
          console.log(`You died! Killed by ${monster}.`);
          console.log(`Best room: ${roomCount}`);
          return;
        } else {
          console.log(`You slayed ${monster}.`);
        }
        break;
    }
    if (line === room.length - 1) {
      console.log("You've made it!");
      console.log(`Bitcoins: ${bitcoins}`);
      console.log(`Health: ${hp}`);
    }
  }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
//muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
