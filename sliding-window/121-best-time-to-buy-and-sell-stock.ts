function maxProfitV1(prices: number[]): number {
    let profit = 0;

    if(prices.length < 2) return profit;

    let left = 0;
    let right = Math.min(prices.length, 1);

    while (left < right) {
        profit = Math.max(prices[right] - prices[left], profit);
        

        if(right === prices.length - 1)  left++;
        else if(right - left === 1) right++;
        else if(prices[left+1] < prices[left]) left++;
        else if(prices[left] > prices[right]) left++;
        else right++;
    }

    return profit;
};

function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minValue = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < prices.length; i++) {
        minValue = Math.min(minValue, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minValue);
    }

    return maxProfit;
};