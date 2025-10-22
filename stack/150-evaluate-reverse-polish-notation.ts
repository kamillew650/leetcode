function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    for(const token of tokens) {
        const paresedToken = parseInt(token);
        if(!Number.isNaN(paresedToken)) {
            stack.push(paresedToken)
            continue;
        } 
        const lastItem = stack.pop();
        const beforeLastItem = stack.pop()

        let result;
        switch(token) {
            case "+": {
                result = beforeLastItem! + lastItem!;
                break;
            }
            case "-": {
                result = beforeLastItem! - lastItem!;
                break;
            }
            case "*": {
                result = beforeLastItem! * lastItem!;
                break;
            }
            case "/": {
                result =beforeLastItem! / lastItem!;
                result = result > 0 ? Math.floor(result): Math.ceil(result);
                break;
            }
        }
        stack.push(result);
    }

    if(stack.length === 0) return 0;

    return stack.at(0)!;
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));