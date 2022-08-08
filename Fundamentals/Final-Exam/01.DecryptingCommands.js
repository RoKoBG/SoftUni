function decrypt(arr) {
  let word = arr.shift();

  for (let element of arr) {
    if (element === "Finish") {
      break;
    }
    let [command, firstE, secondE] = element.split(" ");
    switch (command) {
      case "Replace":
        while (word.includes(firstE)) {
          word = word.replace(firstE, secondE);
        }
        console.log(word);
        break;

      case "Cut":
        let start = +firstE;
        let end = +secondE;
        if (start >= 0 && start <= end && end < word.length) {
          let cutA = word.substring(0, start);
          let cutB = word.substring(end + 1);
          word = cutA + cutB;
          console.log(cutA + cutB);
        } else {
          console.log(`Invalid indices!`);
        }
        break;

      case "Make":
        if (firstE === "Upper") {
          word = word.toUpperCase();
        } else if (firstE === "Lower") {
          word = word.toLowerCase();
        }
        console.log(word);
        break;

      case "Check":
        if (word.includes(firstE)) {
          console.log(`Message contains ${firstE}`);
        } else {
          console.log(`Message doesn't contain ${firstE}`);
        }
        break;
      case "Sum":
        let startI = +firstE;
        let endI = +secondE;
        if (startI >= 0 && startI <= endI && endI < word.length) {
          let cuttedWord = word.substring(startI, endI + 1);
          let sum = 0;
          cuttedWord.split("").forEach((el) => {
            sum += el.charCodeAt(0);
          });
          console.log(sum);
        } else {
          console.log(`Invalid indices!`);
        }
        break;
    }
  }
}
decrypt([
  "ILikeSoftUni",
  "Replace I We",
  "Make Upper",
  "Check SoftUni",
  "Sum 1 4",
  "Cut 1 4",
  "Finish",
]);
