function rightPlace(str1, char, str2) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    let currChar = str1[i];
    if (currChar === "_") {
      result += char;
    } else {
      result += currChar;
    }
  }
  if (result === str2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "i", "String");
