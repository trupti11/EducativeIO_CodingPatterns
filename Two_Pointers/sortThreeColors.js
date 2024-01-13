/**
STATEMENT:
Write a function that takes a string, s, as an input and determines whether or not it is a palindrome.Given an array, colors, which contains a combination of the following three elements:

0 (representing red)
1 (representing white)
2 (representing blue)

Sort the array in place so that the elements of the same color are adjacent, with the colors in the order of red, white, and blue. The function should return the same array.
Note: The function should only return the modified colors array.

CONSTRAINTS:
    1 ≤ colors.length ≤ 300
    colors[i] can only contain 0s, 1s, 2s.

SOLUTIONS:
    Brute force: Sort the array. t = O(n log n), s = O(1)
 
    Two pointers: Choose a pivot color, let's say 1 (white).
                  Initialize red = white = 0, blue = colors.length - 1
                  Loop through the array until the white-th index is less than blue-th index:
                    - if white-th index is 0(red)
                        - if red-th index is not 0, then swap white-th and red-th element
                    - advance white and red
                    - if white-th index is 1(white)
                        - advance white, nothing to do here
                    - if white-th index is 2(blue)
                        - if blue-th index is not blue, then swap white-th and blue-th element
                        - advance only blue index
                  t = O(n), s == O(1)
 */

function sortColors(colors) {

    let red = 0;
    let white = 0;
    let blue = colors.length - 1;

    while (white <= blue) {
        
        if (colors[white] === 0) {

            if (colors[red] !== 0) {
                [colors[red], colors[white]] = [colors[white], colors[red]];
            }

            white++;
            red++;
        }

        else if (colors[white] === 1) {
            white++;
        }

        else {

            if (colors[blue] !== 2) {
                [colors[white], colors[blue]] = [colors[blue], colors[white]];
            }

            blue--;
        }
    }

    return colors;
}

// Driver code
const inputs = [
    [0, 1, 0],
    [1, 1, 0, 2],
    [2, 1, 1, 0, 0],
    [2, 2, 2, 0, 1, 0],
    [2, 1, 1, 0, 1, 0, 2]
];

// Iterate over the inputs and print the sorted array for each
for (let i = 0; i < inputs.length; i++) {

    console.log(i + 1 + ".\tcolors:", arrayToString(inputs[i]),
                "\n\n\tThe sorted array is:", arrayToString(sortColors(inputs[i])));

    console.log("-".repeat(100));
}