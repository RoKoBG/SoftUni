function emojiDetector(arr) {
  let pattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/gm;
  let numPattern = /\d/;
  let input = arr.shift();
  let cool = 1;
  let match = pattern.exec(input);
  let box = [];
  let emojiCount = 0;
  let emojiPoints = 0;
  input.split("").forEach((n) => {
    if (n.match(numPattern)) {
      cool *= Number(n.match(numPattern)[0]);
    }
  });
  console.log(`Cool threshold: ${cool}`);
  while (match) {
    let word = match.groups.emoji;
    emojiCount++;
    for (let i = 0; i < word.length; i++) {
      let currEmoji = word[i];
      let emojiCoolness = currEmoji.charCodeAt();
      emojiPoints += emojiCoolness;
    }
    if (emojiPoints > cool) {
      box.push(match[0]);
    }
    emojiPoints = 0;
    match = pattern.exec(input);
  }
  console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
  box.forEach((word) => console.log(word));
}
emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);
