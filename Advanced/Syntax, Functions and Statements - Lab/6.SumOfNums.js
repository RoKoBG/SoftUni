function sumOfNums(n,m) {
    let result=0;
let start = Number(n);
let end = Number(m);
for(let i = start; i<= end; i++){
    result += i;
    
}
console.log(result);
    
}sumOfNums('1', '5');
sumOfNums('-8', '20');