/**
STATEMENT:
Given an unsorted array of positive numbers, nums, such that the values lie in the range [1,n],
inclusive, and that there are n+1 numbers in the array, find and return the duplicate number present in nums.
There is only one repeated number in nums.

CONSTRAINTS:
    1 <= n <= 10^3
    nums.length = n + 1
    1 <= nums[i] <= n
    All the integers in nums are unique, except for one integer that will appear more than once.

SOLUTIONS:
    Brute force: Sort the array, and then iterate through the array
                 t = O(O(n log n) + O(n)) = O(n log n), s = O(1)

    Another solution: Make a hashmap, and store the values and keys, 
    and then iterate through the hashmap to find the key with value greater than 1
    t = O(n), s = O(n)

    Two pointers: 
        Find the intersection point
            -   initialize slow = nums[0], fast = nums[0]
            -   iterate while slow !== fast
                -   slow = nums[slow]
                -   fast = nums[nums[fast]]
        Find the repeated element in the loop
            -   initialize slow = nums[0] and fast stays at what it was in the previous loop
            -   while slow !== fast
                -   slow = nums[slow]
                -   fast = nums[fast]
        In the end we return the position of fast
                  t = O(O(nXx) + O(n)) = O(n), s = O(1) where x = iterations through the array till we hit the loop intersection
 */

export function findDuplicate(nums) {
    let slow = nums[0], fast = nums[0], len = nums.length;

    // find repeating element
    while(true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (fast === slow)
            break;
    }

    // find the first instance of the repeated element to return
    slow = nums[0]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return fast
}
