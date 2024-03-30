// Determine if the sum of two integers is equal to a given value 
export const twoIntegersSum = (inputArray: Array<number>, value: number) => {
    const numSet: Set<number> = new Set();

    for (let num of inputArray) {
        const complement = value - num;
        if (numSet.has(complement)) {
            return true;
        }
        numSet.add(num);
    }

    return false;
}

export const twoIntegersSumArrayVersion = (inputArray: Array<number>, value: number) => {
    const tempArray = []; 
    for (let num of inputArray) {
        const secondValue = value - num;
        if (tempArray.includes(secondValue)) {
            return true;
        }
        tempArray.push(num);
    }
    return false;
}

