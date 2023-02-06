function smallestTwoNums(arr) {
    const sliced = arr.sort((a,b) => a-b).slice(0, 2).join(' ');
    console.log(sliced);
}
smallestTwoNums([30, 15, 50, 5]);
// 5 15
smallestTwoNums([3, 0, 10, 4, 7, 3]);
// 0 3