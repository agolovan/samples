export const reverseWords = (input: string) => {
    // Constants
    const inputArray = input.split('');
    let savedStartPointer = 0;
    
    const reverseArray = (start: number, end: number) => {
        while (end > start) {
            const temp = inputArray[start];
            inputArray[start] = inputArray[end];
            inputArray[end ]  = temp;
            start = start + 1;
            end = end - 1;
        }
    }

    const processToReverse = (start: number, end: number) => {
        reverseArray(start, end);
        // Get position of next space, using saved start pointer as a start of the search
        const indexOfSpace = inputArray.indexOf(' ', savedStartPointer)
        if (typeof savedStartPointer !== 'undefined') {
            const startPointer = savedStartPointer;
            let endPointer;
            if (indexOfSpace !== -1) {
                // Next space found - position will be used as a end for reverse
                // Starting search from saved start pointer - it was end of the search from last time
                // Save starting point for next time
                savedStartPointer = indexOfSpace + 1;
                endPointer = indexOfSpace - 1;
            } else {
                // Set savedStartPointer to undefined - to stop reversing process
                savedStartPointer = undefined;
                // end pointer - end of array
                endPointer = inputArray.length - 1;
            }
            processToReverse(startPointer, endPointer);
        }
    }

    processToReverse(0 , inputArray.length - 1);
    return inputArray.join('');
}