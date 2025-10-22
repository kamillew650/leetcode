class KthLargest {
    private sortedArray: number[];
    private kIndex: number;
    
    constructor(k: number, nums: number[]) {
        this.kIndex = k;
        this.sortedArray =nums.sort((el1, el2) => el1 - el2);
    }

    add(val: number): number {
        // binary search can be use
        const indexOfHigherElement = this.sortedArray.findLastIndex(el => el < val);
        this.sortedArray.splice(indexOfHigherElement + 1, 0, val);
        return this.sortedArray.at(this.sortedArray.length - this.kIndex)!;
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const obj = new KthLargest(3, [4,5,8,2]);
console.log(obj.add(3));
console.log(obj.add(5));
console.log(obj.add(10));
console.log(obj.add(9));
console.log(obj.add(4));
