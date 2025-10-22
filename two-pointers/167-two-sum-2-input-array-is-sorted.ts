function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length -1;

    while(numbers[left] + numbers[right] !== target) {
        if(numbers[left] + numbers[right] > target) {
            right--;
        } else {
            left++;
        }
    }

    return [left + 1, right + 1];
};


console.log(twoSum([2,7,11,15], 9));
