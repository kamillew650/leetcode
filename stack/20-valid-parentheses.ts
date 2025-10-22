function isValid(s: string): boolean {
    const stack: string[] = [];
    const startScope = ["[", "(", '{'];
    const corespondingScope = {
        "{": "}",
        "[": "]",
        "(": ")"
    };

    for (const letter of s) {
        if(startScope.includes(letter)) {
            stack.push(letter);
        } else {
            if(stack.length === 0) {
                return false;
            }

            const lastScope = stack.at(-1);
            if(!lastScope) return false;

            const isCorrectEndScope = corespondingScope[lastScope] === letter;
            if(!isCorrectEndScope) {
                return false;
            }
            stack.pop();
        }
    }

    if(stack.length > 0) {
        return false;
    }

    return true;
};


const result = isValid("");

console.log(result);
