function stringSubstring(input, text) {
  let words = text.split(" ");
  for (let word of words) {
    if (word.toLowerCase() === input.toLowerCase()) {
      console.log(input);
      return;
    }
  }
  console.log(`${input} not found!`);
}
stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
