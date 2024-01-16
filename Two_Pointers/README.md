# TWO POINTERS CODING PATTERN
[educative.io](https://www.educative.io/courses/grokking-coding-interview-patterns-javascript/two-pointers-introduction)

# What is it?
- Uses 2 pointers to iterate over a data structure until the same condition is met by elements at both the pointers
- Keeps track of 2 elements within the data structure at the same time
- Where the brute force approach has a time complexity of O(n^2), we can reduce it to O(n)
- Every step we are able to prune a set of possible solutions

# How to detect the pattern?
- Input data can be traversed linearly
- If we can limit our focus to a certain range based on the pointer positions within the input data, such that we can only concentrate on a subset
- When there is swapping, deletion and comparison of 2 elements in a data structure

# When do we use it?
- Reversing an array, string or linked list
- Checking if a string is a palidrome
- Removing nth last node from linked list
- Sorting at most 3 colors


