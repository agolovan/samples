export const reverseWords2 = (input: string) => {
    if (typeof input === 'undefined' || typeof input !== 'string' || input.length === 0  ) {
        return input;
    }
    const inputArray = input.split('');
    let start = 0;
    
    const reverseArray = (start: number, end: number) => {
        while (end > start) {
            const temp = inputArray[start];
            inputArray[start] = inputArray[end];
            inputArray[end ]  = temp;
            start = start + 1;
            end = end - 1;
        }
    }
    
    reverseArray(start, inputArray.length - 1);
    let endPlusOne = inputArray.indexOf(' ');

    while ( endPlusOne !== -1  ) {
        reverseArray(start, endPlusOne - 1);
        start = endPlusOne + 1;
        endPlusOne = inputArray.indexOf(' ', start );
    }

    reverseArray(start, inputArray.length - 1);
    return inputArray.join('');
}