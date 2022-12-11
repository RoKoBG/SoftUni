function thePianist(input) {
  let numPieces = input.shift();
  let obj = {};
  for (let i = 0; i < numPieces; i++) {
    let [piece, composer, key] = input.shift().split("|");
    if (!obj.hasOwnProperty(piece)) {
      obj[piece] = {};
    }
    obj[piece][composer] = key;
  }
  let line = input.shift();
  while(line !== "Stop"){
    let [action, piece, composer, key] = line.split("|");
    switch(action){
        case "Add":
        if(obj.hasOwnProperty(piece)){
            console.log(`${piece} is already in the collection!`);
            break;
        }    
        obj[piece] = {}
        obj[piece][composer] = key;
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        break;
        case "Remove":
        if(!obj.hasOwnProperty(piece)){
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            break;
        }    
        delete obj[piece];
        console.log(`Successfully removed ${piece}!`);
        break;
        case "ChangeKey":
        if(!obj.hasOwnProperty(piece)){
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            break;
        }    
        let newKey = composer;
        for(let [keyComposer, valueKey] of Object.entries(obj[piece])){
            obj[piece][keyComposer] = newKey;
        }
        console.log(`Changed the key of ${piece} to ${newKey}!`);
        break;
      
    }
    line = input.shift();
    
  }
  for(let [piece, composer] of Object.entries(obj)){
    for(let composerKey of Object.keys(obj[piece])){
        console.log(`${piece} -> Composer: ${composerKey}, Key: ${composer[composerKey]}`);
    }
}
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
