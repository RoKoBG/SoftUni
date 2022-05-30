function amazingNum(num) {
  let numString = String(num);
  let res = 0;
  for (let i = 0; i < numString.length; i++) {
    let num = Number(numString[i]);
    res += num;
  }

  console.log(
    `${num} Amazing? ${res.toString().indexOf("9") >= 0 ? "True" : "False"}`
  );
}
amazingNum(1233);
amazingNum(999);
