/**
STATEMENT:
Write a function that takes a string, s, as an input and determines whether or not it is a palindrome.

CONSTRAINTS:
    1 ≤ s.length ≤ 2 × 10^5
    The string s will contain English uppercase and lowercase letters, digits, and spaces.

SOLUTIONS:
    Brute force: Reverse the string and then check if reversed string is the same as input string. t = O(n), s = O(n)
 
    Two pointers: Compare the characters from both the ends of the string and loop until start <= end (might result in an extra comparison of the center character)
                -   if we find the first mismatch, 
                    -   skip and adjust one of the pointers
                    -   continue
                -   if another mistake is found, return false
                -   return true if no more mistakes are found at the end of iteration
                  t = O(n/2) = O(n), s == O(1)
 */


export function isPalindrome(s) {
    
    let start = 0, end = s.length - 1, firstMistake = false;

    while (start <= end) {
        console.log("comparing " + s[start] + " and " + s[end])
        if (s[start] !== s[end]) {
            if (!firstMistake) {
                console.log("first mistake found at " + start + " " + end)
                firstMistake = true;
                if (s[start] === s[end - 1]) {
                    end--
                    console.log("first mistake, reducing end " + end)
                }
                else {
                    start++
                    console.log("first mistake, incrementing start " + end)
                }
            }
            else {
                return false
            }
        } else {
            start++
            end--
        }
    }
    
    return true

}
