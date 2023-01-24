function solve() {
  const input = document.getElementById("text").value;
  const convent = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  const toPascal = (text) =>
    text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join("");

  const toCamel = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  };
  if (convent === "Camel Case") {
    result.textContent = toCamel(input);

  } else if (convent === "Pascal Case") {
    result.textContent = toPascal(input);
  } else {
    result.textContent = "Error!";
  }
}
