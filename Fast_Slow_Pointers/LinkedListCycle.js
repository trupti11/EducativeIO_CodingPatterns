/**
STATEMENT:
Check whether or not a linked list contains a cycle. If a cycle exists, return TRUE. Otherwise, return FALSE. The cycle means that at least one node can be reached again by traversing the next pointer.

CONSTRAINTS:
Let n be the number of nodes in a linked list.
    0 <= n <= 500
    -10^5 <= Node.data <= 10^5

SOLUTIONS:
    Brute force:  Visit each node, and add it to a HashSet, if the node is already visited and found in the Hashset return true, else return false
                 t = O(n), s = O(n) for the HashSet
 
    Two pointers: Initialize one pointer to n, and the other to sum of squares of all the digits in a number
                    -   slowPointer moves at Node.next speed
                    -   fastPointer moves at Node.next.next speed
                    -   we iterate until fastPointer !== 1 && slowPointer !== fastPointer
                    -   if the fastPointer === 1 by the end of this loop, we return true, else false
                  t = O(n), s = O(1)
 */

import LinkedList from "../linked_list.js"
import LinkedListNode from "../linked_list_node.js"

export function detectCycle(head){
    let slow = head,
        fast = head.next;
    
    while (slow !== fast && fast !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    if (fast == slow) {
        return true
    }
    return false;
}