/**
STATEMENT:
Given a sentence, reverse the order of its words without affecting the order of letters within a given word.

CONSTRAINTS:
    1 <= sentence.length <= 10^4
    The order of the letters within a word is not to be reversed.
    Sentence contains English uppercase and lowercase letters, digits, and spaces.

SOLUTIONS:
    Brute force:  Use 2 nested loops, one to iterate over the string array to detect the space, then second loop to reverse it
                 t = O(n^2), s = O(n) (the string is immutable in js)
 
    Two pointers: Reverse the entire array, and then loop through detecting the start and end of word and reverse each words individually
                  t = O(O(n) + O(n)) = O(n), s = O(n) (since the string itself is immutable in js)
 */

export function reverseWords(sentence) {
    sentence = sentence.trim().replace(/  +/g, ' ');
    let strArr = [...sentence]
    console.log("creating an arr out of the immutable string")
    // strArr.forEach(x => console.log(x))

    console.log("reverse the sentence array...")
    strArr = revStrArr(strArr, 0, strArr.length - 1)
    console.log("reversed the sentence array!")
    strArr.forEach(x => console.log(x))

    let left = 0, right = 0
    while (left < strArr.length) {
        while (right < strArr.length && strArr[right] !== " ") {
            right++
        }
 
        console.log("end of word found, reversing word...")
        strArr = revStrArr(strArr, left, right - 1)
        right++
        left = right
    }
    sentence = strArr.join("")
    console.log("sentence reversed: " + sentence)
    return sentence
}

export function revStrArr(strArr, left, right) {
    while (left <= right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
        left++
        right--
    }
    return strArr
}
