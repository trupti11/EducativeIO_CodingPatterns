/**
STATEMENT:
Given an array of integers, nums, and an integer value, target, determine if there are any three integers in 
nums whose sum is equal to the target, that is, nums[i] + nums[j] + nums[k] == target.
Return TRUE if three such integers exist in the array. Otherwise, return FALSE.
Note: A valid triplet consists of elements with distinct indexes.

CONSTRAINTS:
    3 <= nums.length <= 500
    -10^3 <= nums[i] <= 10^3
    -10^3 <= target <= 10^3

SOLUTIONS:
    Brute force: Use 3 nested loops to determine the 3 indices to check all possible triplets in the given array.
                 t = O(n^3), s = O(1)
 
    Two pointers: Sort the array, and then loop through the array with 2 nested loops, 1 for the ith index, and 2nd for low-th and high-th indices
                  t = O(O(nlog n) + O(n^2)) = O(n^2), s = O(1)
 */

 export function findSumOfThree(nums, target) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        let low = i + 1, high = nums.length - 1;
        while (low < high) {
            let sum = (nums[i] + nums[low] + nums[high]);
            console.log("sum = " + sum);
            if (sum === target) return true;
            else if (sum < target) low++;
            else high--;
        }
    }

    return false;
}

export { findSumOfThree };