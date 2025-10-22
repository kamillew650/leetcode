function isPalindromeV1(s: string): boolean {
    const parsedString = s.replace(/[^A-Za-z0-9]/g, ' ').replace(/\s/g, "").toLocaleLowerCase();

    const size = parsedString.length;

    if(size === 0) {
        return true;
    }

    const halfSize = Math.ceil(size / 2);

    for(let i = 0; i <= halfSize; i++) {
        if(parsedString[i] !== parsedString[size - 1 - i]) {
            return false;
        }
    }
    
    return true;
};

function isPalindrome(s: string): boolean {
    const parsedString = s.replace(/[^A-Za-z0-9]/g, ' ').replace(/\s/g, "").toLocaleLowerCase();
    
    if(parsedString.length === 0) {
        return true;
    }

    let left = 0;
    let right = parsedString.length - 1;

    while(left < right) {
        if(parsedString[left] !== parsedString[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));
