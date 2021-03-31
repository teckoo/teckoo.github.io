---
layout: leetcode
title: "92. Reverse Linked List II"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/reverse-linked-list-ii/) | [Linked list template](/template/linked_list)

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:

```
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
```

Example 2:

```
Input: head = [5], left = 1, right = 1
Output: [5]
```

Solution:

* Recursion: T: O(N), S: O(N)
 
```python
def reverseBetween(self, head: ListNode, m, n):
  if not head: return None

  successor = None
  def reverseN(head, n):
    if n == 1:
      successor = head.next
      return head
    last = reverseN(head, n - 1)
    head.next.next = head
    head.next = successor
    return last

  if m == 1:
    return reverseN(head, n)

  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
  
```

* Iteration: T: O(N), S: O(1)