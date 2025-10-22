function search(nums: number[], target: number): number {
    let [left, right] = [0, nums.length - 1];


    while(left <= right) {
        const middle = Math.floor(right - left);
    
        if(nums[middle] === target) {
            return middle;
        }
    
        if(target > nums[middle] ) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
};

console.log(search([-1,0,5], 5))