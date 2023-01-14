function sameNums(number) {
  //let numToString = number.toString();
  // let sum = 0;
  // let isSame = true;
  // let firstLetter = numToString[0];
  // for(let i =0;i<numToString.length;i++){
  //    if(firstLetter !== numToString[i]){
  //        isSame=false;
  //    }
  //     sum+=Number(numToString[i]);
  //  }
  let arr = String(number)
    .split("")
    .map((n) => Number(n));
  let isSame = arr.filter((n) => n !== arr[0]).length ? false : true;
  let sum = arr.reduce((acc, num) => acc + num);
  console.log(isSame);
  console.log(sum);
}
sameNums(2222222);
sameNums(1234);
