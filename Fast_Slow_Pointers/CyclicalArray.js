/**
STATEMENT:
An input array, nums containing non-zero integers is given, where the value at each index represents the number of places to skip forward (if the value is positive) or backward (if the value is negative). When skipping forward or backward, wrap around if you reach either end of the array. For this reason, we are calling it a circular array. Determine if this circular array has a cycle. A cycle is a sequence of indices in the circular array characterized by the following:

The same set of indices is repeated when the sequence is traversed in accordance with the aforementioned rules.
The length of the sequence is at least two.
The loop must be in a single direction, forward or backward.
It should be noted that a cycle in the array does not have to originate at the beginning. A cycle can begin from any point in the array.

CONSTRAINTS:
    1 <= nums.length <= 10^4
    -5000 <= nums[i] <= 5000
    nums[i] != 0

SOLUTIONS:
    Brute force:  Calculate the sum of squares of all the digit in the number and store them in a HashSet to compare if we have seen the calculated sum before
                 t = O(n^2), s = O(n) for the visited elements
 
    Two pointers: Initialize direction, and first elem in nums as the beginning node to test for a cycle
                    -   Iterate through each elem as a test node for the beginning of the cycle with i
                        -   initialize slow to ith elem, fast to ith elem and direction to value of ith elem
                        -   iterate
                            -   calculate next slow using direction and current value of slow
                            -   if current value of slow breaks the cycle rules break loop
                            -   calculate next fast using direction and current value of fast
                            -   if current value of fast breaks the cycle rules break loop
                            -   calculate next fast using direction and current value of fast
                            -   if current value of fast breaks the cycle rules break loop
                            -   if slow and fast are equal, return true
                    - return false if no cycle is found
                  t = O(n^2) s = O(1)
 */

export function circularArrayLoop(nums){
    let size = nums.length

    for (let i = 0; i < size; i++) {
        let slow = i, fast = i, direction = nums[i] >= 0
        while (true) {
            slow = findNextPlace(slow, nums[slow], size)
            if (isNotCycle(nums, direction, slow)) break

            fast = findNextPlace(fast, nums[fast], size)
            if (isNotCycle(nums, direction, fast)) break

            fast = findNextPlace(fast, nums[fast], size)
            if (isNotCycle(nums, direction, fast)) break
            
            if (fast === slow) return true
        }
    }
    return false
}

export function findNextPlace(pointer, value, size) {
    let endIndex = (pointer + value) % size
    if (endIndex < 0) endIndex+= size
    return endIndex;
}

export function isNotCycle(nums, direction, pointer) {
    let len = nums.length,
        currDirection = nums[pointer] >= 0,
        mod = Math.abs(nums[pointer] % len)
    if (direction !== currDirection || mod === 0) return true
    return false
}