function cencoredWords(text, word) {
    while(text.includes(word)){
      text= text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}
cencoredWords(
  "A small sentence with some words",

  "small"
);
