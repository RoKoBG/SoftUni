function solve(dataAsJson) {
  const result = [];
  result.push("<table>");
  const data = JSON.parse(dataAsJson);

  // Collect property names (keys)

  const props = Object.keys(data[0]);

  // Create table headers from names
result.push(`  <tr>${props.map(p =>`<th>${p}</th>`).join('')}</tr>`);

  // Create rows for entry in collection

  for (const entry of data) {
    result.push(`  <tr>${props.map(p =>`<th>${entry[p]}</th>`).join('')}</tr>`);

  }
  result.push("</table>");

  // Output table

  return result.join('\n')
}
console.log(solve(`[{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}]`));
