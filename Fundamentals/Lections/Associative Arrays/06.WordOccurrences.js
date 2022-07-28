function wordOccurrences(data) {
  let map = new Map();
  for (let element of data) {
    let counter = 0;

    if (map.has(element)) {
      continue;
    }
    data.forEach((word) => {
      if (word === element) {
        counter++;
      }
    });
    map.set(element, counter);
  }
  let sorted = Array.from(map).sort((a,b)=>b[1]-a[1]);
  for([k,v]of sorted){
      console.log(`${k} -> ${v} times`);
  }
 
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
