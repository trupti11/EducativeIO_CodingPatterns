/**
STATEMENT:
Given the head of a singly linked list, return the middle node of the linked list. 
If the number of nodes in the linked list is even, there will be two middle nodes, so return the second one.

CONSTRAINTS:
Let n be the number of nodes in a linked list.
    1 <= n <= 100
    1 <= Node.data <= 100
    head != null

SOLUTIONS:
    Brute force: Iterate through the list, and get the list size as size.
                -   Initialize pointer named "middle"
                -   Iterate middle size / 2 times to get to the middle
                - return middle
                 t = O(n), s = O(1) for the HashSet
 
    Two pointers: Initialize one pointer to n, and the other to sum of squares of all the digits in a number
                    -   slowPointer moves at Node.next speed
                    -   fastPointer moves at Node.next.next speed, if fastPointer.next is null break out of the loop
                    -   we iterate until fastPointer !== null
                    -   return the slow pointer as the middle element
                  t = O(n/2) = O(n), s = O(1)
 */

import LinkedList from "./linked_list.js"
import LinkedListNode from "./linked_list_node.js"

// The code in "linked_list.js" can be used to create a linked list out of a list. 
// The code in "linked_list_traversal.js" can be used to traverse the linked list.
// The code in "linked_list_reversal.js" can be used to reverse the linked list.

export function getMiddleNode(head){
    let slow = head,
        fast = head.next;

    while (fast !== null) {
        slow = slow.next;

        if (fast.next === null) break;
        fast = fast.next.next;
    }

    return slow;
}