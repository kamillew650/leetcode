export function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    if(nums.length < 1) {
        return -1;
    }

    while (left < right - 1) {
        let mid = left + Math.floor((right - left) / 2);

        if(nums[mid] === target) {
            return mid;
        } else if (nums[left] === target) {
            return left;
        } if (nums[right] === target) {
            return right;
        }

        if (nums[mid] < nums[right]) {
            if (target > nums[right]) {
                right = mid;
            } else if (nums[mid] > target) {
                right = mid;
            } else {
                left = mid;
            }
        } else {
            if (target < nums[left]) {
                left = mid;
            } else if(nums[mid] < target) {
                left = mid;
            } else {
                right = mid;
            }
        }
    }

    if (nums[left] === target) {
        return left;
    } else if(nums[right] === target) {
        return right;
    }

    return -1;
}
