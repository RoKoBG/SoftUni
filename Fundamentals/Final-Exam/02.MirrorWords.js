function mirrorWords(arr) {
  let count = 0;
  let mirrWords = [];
  let regex = /(@|#)(?<first>[A-za-z]{3,})\1\1(?<second>[A-za-z]{3,})\1/g;
  let allMatches = arr[0].matchAll(regex);
  for (let element of allMatches) {
    count++;
    reversedSecond = Array.from(element.groups.second).reverse().join("");
    if (reversedSecond === element.groups.first) {
      mirrWords.push(element.groups.first + " <=> " + element.groups.second);
    }
  }
  if (count === 0) {
    console.log(`No word pairs found!`);
    console.log(`No mirror words!`);
  } else {
    console.log(`${count} word pairs found!`);
    if (mirrWords.length === 0) {
      console.log(`No mirror words!`);
    } else {
      console.log(`The mirror words are:`);
      console.log(mirrWords.join(", "));
    }
  }
}
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
