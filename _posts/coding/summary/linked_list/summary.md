# Linked List

## Data Structure

```java
// Definition for singly-linked list.
public class SinglyListNode {
    int val;
    SinglyListNode next;
    SinglyListNode(int x) { val = x; }
}
```

## Add a node

1. add in the middle
2. add a head

Time: O(1)

## Delete a node

1. delete in the middle: O(N)
2. delete a head: O(1)

# Coding trick

<https://leetcode.com/problems/design-linked-list/solution/>

Sentinel nodes are widely used in the trees and linked lists as pseudo-heads, pseudo-tails, etc. They serve as the guardians, as the name suggests, and usually they do not hold any data.

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class MySingleLinkedList:
    def __init__(self):
        self.size = 0
        self.head = ListNode(0)  # sentinel node as pseudo-head

class MyDoubleLinkedList:
    def __init__(self):
        self.size = 0
        # sentinel nodes as pseudo-head and pseudo-tail
        self.head, self.tail = ListNode(0), ListNode(0) 
        self.head.next = self.tail
        self.tail.prev = self.head

```

## In-place reversal of a LinkedList

In a lot of problems, we are asked to reverse the links between a set of nodes of a LinkedList. Often, the constraint is that we need to do this in-place, i.e., using the existing node objects and without using extra memory.

```python
def reverse(head):
    """ remember only 4 lines in while block.
    There are other solutions, this one is simple and fast """
    prev = None
    while head:
        next = head.next
        head.next = prev
        prev = head
        head = next
    return prev
```

## Two-Pointer in Linked List

You might have come up with the solution using the `hash table`. But there is a more efficient solution using the `two-pointer` technique.

1. If there is no cycle, the fast pointer will stop at the end of the linked list.
2. If there is a cycle, the fast pointer will eventually meet with the slow pointer.

It is a safe choice to move the slow pointer *one step* at a time while moving the fast pointer *two steps* at a time. For each iteration, the fast pointer will move one extra step. If the length of the cycle is M, after M iterations, the fast pointer will definitely move one more cycle and catch up with the slow pointer.

```text
    What about other choices? Do they work? Would they be more efficient?
```

Here we provide a template for you to solve the two-pointer problem in the linked list.

```java
// Initialize slow & fast pointers
ListNode slow = head;
ListNode fast = head;
/**
 * Change this condition to fit specific problem.
 * Attention: remember to avoid null-pointer error
 **/
while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;           // move slow pointer one step each time
    fast = fast.next.next;      // move fast pointer two steps each time
    if (slow == fast) {         // change this condition to fit specific problem
        return true;
    }
}
return false;   // change return value to fit specific problem
```

LC: 141, 142, 160, 19
206, 203, 328

![comparison](linked-list-complexity.png)

# Tips

1. Going through some test cases will save you time.

    It is not easy to debug when using a linked list. Therefore, it is always useful to try several different examples on your own to validate your algorithm before writing code.

1. Feel free to use several pointers at the same time.

    Sometimes when you design an algorithm for a linked-list problem, there might be several nodes you want to track at the same time. You should keep in mind which nodes you need to track and feel free to use several different pointers to track these nodes at the same time.

    If you use several pointers, it will be better to give them suitable names in case you have to debug or review your code in the future.

1. In many cases, you need to track the previous node of the current node.

    You are not able to trace back the previous node in a singly linked list. So you have to store not only the current node but also the previous node. This is different in a doubly linked list which we will cover in the later chapter.