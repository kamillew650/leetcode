function productExceptSelfV1(nums: number[]): number[] {
    const zeroIndexesRaw = nums.map((num: number, index: number) => num === 0 ? index : null);
    const zeroIndexes = zeroIndexesRaw.filter(index => index !== null);

    if(zeroIndexes.length > 1) {
        return nums.map(_ => 0);
    }

    let result = 1
    nums.forEach((num: number, index: number) => {
        if(!zeroIndexes.includes(index)) {
            result *= num;
        }
    });

    if(zeroIndexes.length === 1) {
        return nums.map((num: number, index: number) => zeroIndexes.includes(index) ? result : 0);
    }

    return nums.map((num: number) => result / num);
};

function productExceptSelfV2(nums: number[]): number[] {
    const results = nums.map(_ => 1);

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i !== j) {
                results[i] *= nums[j];
            }
        }
    }

    return results;
};

function productExceptSelfV3(nums: number[]): number[] {
    const numsLength = nums.length
    const prefix = Array(numsLength).fill(1);
    const suffix = Array(numsLength).fill(1);

    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            prefix[i] *= nums[i];
            suffix[numsLength - 1] = nums[numsLength - 1];
        } else {
            prefix[i] *= nums[i] * prefix[i - 1];
            suffix[numsLength - i - 1] *= nums[numsLength - i - 1] * suffix[numsLength - i];
        }
    }
    console.log("prefix", prefix);
    console.log("sufix", suffix);

    const results = Array(numsLength).fill(1);
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            results[i] *= suffix[i + 1];
        } else if(i === nums.length - 1) {
            results[i] *= prefix[i - 1];
        } else {
            results[i] *= prefix[i - 1] * suffix[i + 1];
        }
    }

    return results;
};

const result = productExceptSelfV3([1,2,3,4]);

console.log(result);