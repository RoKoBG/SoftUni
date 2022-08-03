function replaceChars(input) {
    
    let i = 1;
    let end = input.length ;
    let text = input[0]
while(i < end){
    if(input[i] !== input[i-1]){
        text+=input[i];
    }
    i++;
}
console.log(text);
   
}
replaceChars("aaaaabbbbbcdddeeeedssaa");
replaceChars("qqqwerqwecccwd");
