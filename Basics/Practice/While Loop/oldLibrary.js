function oldLibrary(input) {
  let wantedBook = input[0];
  let index = 1;
  let bookIsFound = false;
  let book = input[index];
  while (book !== "No More Books") {
    if (book === wantedBook) {
      bookIsFound = true;
      break;
    }
    index++;
    book = input[index];
  }
  if (bookIsFound) {
    console.log(`You checked ${index - 1} books and found it.`);
  } else {
    console.log("The book you search is not here!");
    console.log(`You checked ${index - 1} books.`);
  }
}
oldLibrary([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
