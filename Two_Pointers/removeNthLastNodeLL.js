/**
STATEMENT:
Given a singly linked list, remove the nth node from the end of the list and return its head.

CONSTRAINTS:
    1 <= k <= 10^3
    -10^3 <= Node.value <= 10^3
    1 <= n <= k

SOLUTIONS:
    Brute force: Iterate twice through linkedlist, once to find length, then, second with 2 pointers to delete the element and link previous node properly
                 t = O(n + n) O(n), s = O(1)
 
    Two pointers: Move endNode pointer n places in the list, then initialize deletionNode to head, and iterate until endNode is null, delete the deletionNode pointer
                  t = O(n), s = O(1)
 */

import LinkedList from "./linked_list.js";
import LinkedListNode from "./linked_list_node.js";

function removeNthLastNode(head, n) {
    var endNode = head, deletionNode = head;
    while (n > 0) {
        endNode = endNode.next;
        n--;
    }

    if (!endNode) {
        return head.next;
    }

    while (endNode.next != null) {
        endNode = endNode.next;
        deletionNode = deletionNode.next;
    }

    deletionNode.next = deletionNode.next.next;

    return head;  
}

export { removeNthLastNode };