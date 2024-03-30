// Find the missing number in a given array
export const findMissingNumber = (inputArray: Array<number>) => {
    const tempArray = new Array(inputArray.length - 1);
    inputArray.forEach ( arrayMember => {
        tempArray[arrayMember - 1] = true;
    })

    const index = tempArray.findIndex(element => element === undefined);
    return index + 1;
}

export const findMissingNumberUsingTotalSum = (inputArray: Array<number>) => {
    const n = inputArray.length + 1;
    const sumAll = (n * (n + 1)) / 2;
    const sumCurrent = inputArray.reduce ( (a, b) => a + b, 0);
    return  sumAll - sumCurrent; 
}