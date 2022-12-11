function heroes(arr) {
  let n = Number(arr.shift());
  let commands = arr.slice(n);
  let heroObj = {};
  for (let i = 0; i < n; i++) {
    let [heroName, hp, mana] = arr[i].split(" ");
    heroObj[heroName] = { ["health"]: Number(hp), [`mana`]: Number(mana) };
  }
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" - ");
    if (command[0] === "CastSpell") {
      let hero = command[1];
      let manaSpell = command[2];
      let spellName = command[3];
      if (heroObj[hero]) {
        let oldMana = heroObj[hero]["mana"];
        if (oldMana >= manaSpell) {
          heroObj[hero]["mana"] = oldMana - manaSpell;
          console.log(
            `${hero} has successfully cast ${spellName} and now has ${heroObj[hero]["mana"]} MP!`
          );
        }else{
            console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        }
      }
    }
    if (command[0] === "TakeDamage") {
      let hero = command[1];
      let dmg = Number(command[2]);
      let attacker = command[3];
      if (heroObj[hero]) {
        let oldHp = heroObj[hero]["health"];
        if (oldHp - dmg > 0) {
          heroObj[hero]["health"] = oldHp - dmg;
          console.log(
            `${hero} was hit for ${dmg} HP by ${attacker} and now has ${heroObj[hero]["health"]} HP left!`
          );
        } else {
          delete heroObj[hero];
          console.log(`${hero} has been killed by ${attacker}!`);
        }
      }
    }
    if (command[0] === "Recharge") {
      let hero = command[1];
      let amount = Number(command[2]);
      if (heroObj[hero]) {
        let oldMana = heroObj[hero]["mana"];
        heroObj[hero]["mana"] = oldMana + amount;
        if (heroObj[hero]["mana"] > 200) {
          heroObj[hero]["mana"] = 200;
          let rechargedMana = heroObj[hero]["mana"] - oldMana;
          console.log(`${hero} recharged for ${rechargedMana} MP!`);
        } else {
          console.log(`${hero} recharged for ${amount} MP!`);
        }
      }
    }
    if (command[0] === "Heal") {
      let hero = command[1];
      let amount = Number(command[2]);
      if (heroObj[hero]) {
        let oldHp = heroObj[hero]["health"];
        heroObj[hero]['health'] = oldHp + amount;
        if(heroObj[hero]['health'] >100){
            heroObj[hero]['health'] = 100;
            let recharged = heroObj[hero]['health'] - oldHp;
            console.log(`${hero} healed for ${recharged} HP!`);
        }else{
            console.log(`${hero} healed for ${amount} HP!`);
        }
      }
    }else if(command[0] === "End"){
        let sortedHeroes = Object.entries(heroObj).sort((a,b)=>{
            let firstHero = Object.values(a[1]);
            let secondHero = Object.values(b[1]);
            if(secondHero[0] - firstHero[0] != 0){
                return secondHero[1]-firstHero[1];
            }else{
                return a[0].localeCompare(b[0]);
            }
        })
        sortedHeroes.forEach(hero =>{
            console.log(`${hero[0]}`);
            let result =Object.entries(hero[1]);
            console.log(`   HP: ${result[0][1]}`);
            console.log(`   MP: ${result[1][1]}`);
        })
    }
  }
}
heroes([
  4,
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
