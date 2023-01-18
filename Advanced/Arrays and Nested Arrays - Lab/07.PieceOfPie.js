function pieceOfPie(arr, str1, str2) {
    let result = [];
    const firstI = arr.indexOf(str1);
    const secondI = arr.indexOf(str2);
    result=arr.slice(firstI,secondI+1)
    return result;
   
}
pieceOfPie(
  [
    "Pumpkin Pie",

    "Key Lime Pie",

    "Cherry Pie",

    "Lemon Meringue Pie",

    "Sugar Cream Pie",
  ],

  "Key Lime Pie",

  "Lemon Meringue Pie"
);
// ['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie']
pieceOfPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
// ['Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie']