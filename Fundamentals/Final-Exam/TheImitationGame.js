function imitationGame(input) {
  let word = input.shift();
  for (let element of input) {
    if (element === "Decode") {
        console.log(` The decrypted message is: ${word}`);
    }
    let [command, first, second] = element.split("|");
    switch (command) {
      case "ChangeAll":
        while(word.includes(first)){
            word = word.replace(first, second);
        }
        break;
      case "Insert":
        word = word.slice(0, first) +second+word.slice(first);
        
        break;
        case "Move":
            word = word.substr(first) + word.substr(0, first);
            break;
    }
  }
  
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
