/**
STATEMENT:
Write a function that takes a string, s, as an input and determines whether or not it is a palindrome.

CONSTRAINTS:
    1 ≤ s.length ≤ 2 × 10^5
    The string s will contain English uppercase and lowercase letters, digits, and spaces.

SOLUTIONS:
    Brute force: Reverse the string and then check if reversed string is the same as input string. t = O(n), s = O(n)
 
    Two pointers: Compare the characters from both the ends of the string, and if we find a mismatch, string is not a valid palidrome
                  t = O(n), s == O(1)
 */


export function isPalindrome(s) {
    var str = s.toLowerCase(s);

    var left = 0, right = str.length - 1;
    while(left <= right) {
        if (str[left++] !== str[right--]) return false;
    }
    return true;
}

export { isPalindrome };