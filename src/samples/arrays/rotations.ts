// [1, 2, 3, 4, 5, 6, 7]
// [7, 6, 5, 4, 3, 2, 1]
// [5, 6, 7, 4, 3, 2, 1]
// [5, 6, 7, 1, 2, 3, 4]
const rotate = (nums: number[], k: number) => {
    
    const n = nums.length;
    
    // Reverse the entire array
    reverse(nums, 0, n - 1);

    // Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Reverse the remaining elements
    reverse(nums, k, n - 1);

    return nums;
}

const reverse = (nums: number[], start: number, end: number) => {
    while ( start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start = start + 1;
        end = end - 1;
    }
}

// Example usage:
export const rotateArray = (nums: number[], k: number) => {
    if ( k > nums.length) {
        return nums;
    }
    const rotatedArray = rotate(nums, k);
    return rotatedArray;
}
