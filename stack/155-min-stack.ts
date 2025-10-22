type StackItem = {
    value: number;
    minValue: number;
}

class MinStack {
    private stack: StackItem[];
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        const lastItem = this.stack.at(-1);

        if(!lastItem) {
            this.stack.push({
                value: val,
                minValue: val
            });
            return;
        }

        this.stack.push({
            value: val,
            minValue: Math.min(val, lastItem?.minValue)
        })
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack.at(-1)!.value;
    }

    getMin(): number {
        return this.stack.at(-1)!.minValue;
    }
}

const stack = new MinStack()
stack.push(-2);
stack.push(-2);
stack.push(-1);
console.log(stack.getMin());
stack.top();
stack.pop();
console.log(stack.getMin());