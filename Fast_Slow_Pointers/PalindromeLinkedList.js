/**
STATEMENT:
Given the head of a linked list, your task is to check whether the linked list is a palindrome or not. Return TRUE if the linked list is a palindrome; otherwise, return FALSE.

Note: The input linked list prior to the checking process should be identical to the list after the checking process has been completed.

CONSTRAINTS:
    1 <= n <= 500
    0 <= Node.value <= 9
    All the integers in nums are unique, except for one integer that will appear more than once.

SOLUTIONS:
reversing quick overview 

1. we need to store the link of curr, and curr.next, so next = curr.next if the linked list has b -> c -> a thus next = a
2. we need to have curr.next to point to prev curr.next = prev i.e. curr -> prev, c-> b link is formed
3. curr should now point previous so that next becomes the curr node prev = curr, prev is c
4. curr = next a is now current a -> c -> b

e.g. 
9 -> 7 -> 4 -> 2
curr = 9, next = null, prev = null
iterations:
    if curr = 9, then next = 7,     9 -> null, prev = 9, curr = 7
    if curr = 7, then next = 4,     7 -> 9   , prev = 7, curr = 4
    if curr = 4, then next = 2,     4 -> 7   , prev = 4, curr = 2
    if curr = 2, then next = null,  2 -> 4   , prev = 2, curr = null
    curr == null, exit loop 

1 -> 2 -> 3 -> 2 -> 1
- Have 2 pointers fast (moves at 2x speed) and slow(moves at 1x speed), and traverse them 
till you get the fast to the end of the LL
- The slow is pointing at the center when the fast has reached the end
- Using the slow pointer, reverse the latter half of the LL
- Then, compare the first half elems with the latter half, to determine if the list is palindrome
t = O(O(n) + O(n/2) + O(n/2)) = O(n) s = O(1)
 */

import LinkedList from "./linked_list.js"
import reverseLinkedList from "./linked_list_reversal.js"

export function palindrome(head){
    let slow = head,
        fast = head

    // by the end of this loop the slow pointer will be at the center of the list
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse last half of linked list
    let curr = slow, prev = null, next = null
    while (curr !== null) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    // we compare elements from head to midElem - 1 and midElem to end or end - 1
    while (prev!== null && head !== null) {
        if (prev.data !== head.data) return false
        prev = prev.next
        head = head.next
    }
    return true;
}
