function maxArea(height: number[]): number {
    function calculateArea(a: number, b: number) {
      return Math.min(height[a], height[b]) * (b - a);
    }
  
    let max = calculateArea(0, height.length - 1);
    let left = 0;
    let right = height.length;
  
    while (left < right) {
      const newMax = calculateArea(left, right);
  
      if (newMax > max) {
        max = newMax;
      } 

    const shouldMoveLeftPointer = height[left] < height[right];
    
      if (shouldMoveLeftPointer) {
        left++;
      } else {
        right--;
      }
    }
  
    return max;
  }

  console.log(maxArea([1,8,6,2,5,4,8,3,7]));