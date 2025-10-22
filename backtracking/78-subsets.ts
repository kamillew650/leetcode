export function subsets(nums: number[]): number[][] {
    if (nums.length === 1) return [nums];

    const results: number[][] = [];
    results.push(nums);

    for(const num of nums) {
        results.push(...subsets(nums.filter(n => n !== num)));
    }

    return results;
};

console.log(subsets([1,2,3]));