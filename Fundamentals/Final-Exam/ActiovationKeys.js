function activationKeys(arr) {
  let key = arr.shift();
  let input = arr.shift();
  while (input !== "Generate") {
    let [command, first, second, third] = input.split(">>>");
    switch (command) {
      case "Contains":
        let include = first;
        if (key.includes(include)) {
          console.log(`${key} contains ${include}`);
        } else console.log(`Substring not found!`);
        break;
      case "Flip":
        let comm = first;
        let startIndex = Number(second);
        let endIndex = Number(third);
        if (comm === "Upper") {
          let subStr = key.substring(startIndex, endIndex);
          let smallLetters = subStr;
          subStr = subStr.toUpperCase();
          key = key.replace(smallLetters, subStr);
          console.log(key);
        } else if (comm === "Lower") {
          let subStr = key.substring(startIndex, endIndex);
          let bigLetters = subStr;
          subStr = subStr.toLowerCase();
          key = key.replace(bigLetters, subStr);
          console.log(key);
        }
        break;
      case "Slice":
        let startI = first;
        let endI = second;
        key = key.split("");
        key.splice(startI, endI - startI);
        key = key.join("");
        console.log(key);
        break;
    }
    input = arr.shift();
  }
  console.log(`Your activation key is: ${key}`);
}
