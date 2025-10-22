// Solution does not pass leetcode, tiem limit exceeded
function dailyTemperaturesV1(temperatures: number[]): number[] {
    const response: number[] = [];
    let globalIndex = 0;
    for (const temp of temperatures) {
        let index = 0;
        let foundTemperature = false;
        for (let i = globalIndex; i < temperatures.length; i++) {
            if (temp < temperatures[i]) {
                foundTemperature = true;
                break;
            } else {
                index++;
            }
        }
        response.push(foundTemperature ? index : 0);
        globalIndex++;
    }

    return response;
};

type StackItem = {
    value: number;
    index: number;
}

function dailyTemperatures(temperatures: number[]): number[] {
    const responses = new Array(temperatures.length).fill(0);
    const stack: StackItem[] = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack && stack.length > 0 && stack.at(-1)?.value < temperatures[i]) {
            let element = stack.pop();
            if (!element) {
                throw Error();
            }

            responses[element.index] = i - element?.index;
        }
        stack.push({
            value: temperatures[i],
            index: i,
        })
    }

    return responses;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
