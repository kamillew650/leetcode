function sleep(ms: number) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
  }

function lastStoneWeight(stones: number[]): number {
    let sortedArray = [...stones].sort((el1, el2) => el1 - el2);

    while(sortedArray.length > 1) {
        console.log(sortedArray);
        let max1 = sortedArray.at(sortedArray.length - 1)!;
        let max2 = sortedArray.at(sortedArray.length - 2)!;
        console.log(max1, max2);

        sleep(1000);

        if(max1 === max2) {
            sortedArray.splice(sortedArray.length - 2);
        } else {
            sortedArray.splice(sortedArray.length - 2);
            
            const newValue = Math.abs(max1 - max2);

            const indexOfHigherElement = sortedArray.findLastIndex(el => el < newValue);
            sortedArray.splice(indexOfHigherElement + 1, 0, newValue);
        }
    }
    
    return sortedArray.at(0) ?? 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1]));