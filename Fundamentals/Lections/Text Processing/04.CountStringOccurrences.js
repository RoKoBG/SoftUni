function countStringOccur(text, search) {
    let count=0;
    let words = text.split(" ");
    for(let word of words){
        if(word === search){
            count++;
        }
    }
    console.log(count);
}
countStringOccur(
  "This is a word and it also is a sentence",

  "is"
);
