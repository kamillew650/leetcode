function longestConsecutive(nums: number[]): number {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;

    const sortedNums = nums.sort((a: number, b: number) => a - b);

    let max = 1;
    let current = 1;
    
    for(let i = 1; i < nums.length; i++) {
        if(sortedNums[i - 1] === sortedNums[i]) {
            continue;
        } else {
            if((sortedNums[i - 1] + 1) === sortedNums[i]) {
                current++;
            } else {
                current = 1;
            }
    
            if(current > max) {
                max = current;
            }
        }
    }
    
    return max;
};

function longestConsecutiveV2(nums: number[]): number {
   const numsSet = new Set(nums);
   let max = 0;
   let current = 1;
   
   for(let num of nums) {
      if(!numsSet.has(num - 1)) {
         while(numsSet.has(num + current)) {
            current++;
         }
      }
      
      max = Math.max(max, current);
      current = 1;
   }

   return max;
};

const result = longestConsecutiveV2([1,2,0,1]);

console.log(result);