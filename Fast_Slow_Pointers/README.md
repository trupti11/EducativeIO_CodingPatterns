# FAST AND SLOW POINTERS CODING PATTERN
[educative.io](https://www.educative.io/courses/grokking-coding-interview-patterns-javascript/fast-and-slow-pointers-introduction)

# What is it?
- It also has 2 pointers like the Two Pointers coding pattern, except that they move at different speeds and are often unidirectional
- Used generally with directional data structures such as linked list and arrays
- Fast pointer moves twice as fast as slow pointer
- Used to direct any kind of cycles

# How to detect it?
- Solution involves detecting of cycles in the data structure or cycles within a sequence of symbols
- Input data cannot be traversed linearly
- Having 2 pointers traversing the data structure at the same pace do not solve the problem at hand

# When do we use it?
- Reversing an array, string or linked list
- Checking if a string is a palidrome
- Removing nth last node from linked list
- Sorting at most 3 colors

# Real world problems this pattern solves
- Symlinks : To ensure that shortcuts on an OS do not point at each other to create cyclic references
- Compilation dependencies: In OOPs languages, we include many libraries in different code files, while compiling it's necessary to check if there is no cyclic dependency of libraries on one another while compiling the program
