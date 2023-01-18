function sumFirstLast(arr) {
    const first = Number(arr.shift());
    const last = Number(arr.pop());
    const sum = first + last;
    console.log(sum);
    
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);