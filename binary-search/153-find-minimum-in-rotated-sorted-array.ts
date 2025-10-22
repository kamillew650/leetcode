function findMin(nums: number[]): number {
    if (nums.length === 1 || nums[0] < nums[nums.length - 1]) {
        return nums[0];
    }

    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2); 
        console.log(mid);       

        if (nums[mid] > nums[nums.length]) {
            left = mid - 1;
        } else {
            right = mid + 1;
        }
    }

    return nums[left];
}

console.log(findMin([2,1]));
