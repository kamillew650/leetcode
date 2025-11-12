export function subsets(nums: number[]): number[][] {
    const results: number[][] = [[]];

    for(const num of nums) {
        let partialResults = [];
        for(let sublist of results) {
            partialResults.push([...sublist, num])
        }
        results.push(...partialResults)
    }

    return results;
};