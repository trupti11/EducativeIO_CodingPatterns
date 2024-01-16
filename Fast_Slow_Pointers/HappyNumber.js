/**
STATEMENT:
Write an algorithm to determine if a number n is a happy number.

We use the following process to check if a given number is a happy number:

Starting with the given number n, replace the number with the sum of the squares of its digits.
Repeat the process until:
The number equals 1, which will depict that the given number n is a happy number.
It enters a cycle, which will depict that the given number n is not a happy number.
Return TRUE if nis a happy number, and FALSE if not.

CONSTRAINTS:
    1 <= n <= 2^31 - 1

SOLUTIONS:
    Brute force:  Calculate the sum of squares of all the digit in the number and store them in a HashSet to compare if we have seen the calculated sum before
                 t = O(log n), s = O(n) for the HashSet
 
    Two pointers: Initialize one pointer to n, and the other to sum of squares of all the digits in a number
                    -   slowPointer moves at getSquaredSum(n) speed
                    -   fastPointer moves at getSquaredSum(getSquaredSum(n)) speed
                    -   we iterate until fastPointer !== 1 && slowPointer !== fastPointer
                    -   if the fastPointer === 1 by the end of this loop, we return true, else false
                  t = O(O(n) + O(n)) = O(1)
 */

export function isHappyNumber(n) {
    let fastPointer = getSquaredSum(n),
        slowPointer = n;

    while (fastPointer !== 1 && fastPointer !== slowPointer) {
        slowPointer = getSquaredSum(slowPointer);
        fastPointer = getSquaredSum(getSquaredSum(fastPointer));
    }

    if (fastPointer === 1)
        return true;

    return false;
}

function getSquaredSum(n) {
    let sum = 0;
    while (n > 0) {
        let remainder = n % 10;
        let digit = Math.floor(n / 10);
        sum += (remainder) * (remainder);
        n = digit;
    }

    return sum;
}