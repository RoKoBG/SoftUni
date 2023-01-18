function biggerHalf(arr) {
    arr.sort((a,b) => a-b);
    const start = Math.floor(arr.length /2);
    const result = [];
    for (let i = start; i < arr.length; i++) {
        result.push(arr[i]);
        
    }
    return result;
}
biggerHalf([4, 7, 2, 5]);
// [5, 7]
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
// [7, 14, 19, 19]