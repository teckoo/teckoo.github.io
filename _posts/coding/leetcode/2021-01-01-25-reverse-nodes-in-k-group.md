---
layout: leetcode
title: "25. Reverse Nodes in k-Group"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/reverse-nodes-in-k-group/) | [Linked list template](/template/linked_list)

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

Follow up:

Could you solve the problem in O(1) extra memory space?
You may not alter the values in the list's nodes, only nodes itself may be changed.

```
Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

Example 3:
Input: head = [1,2,3,4,5], k = 1
Output: [1,2,3,4,5]

Example 4:
Input: head = [1], k = 1
Output: [1]
```

Solution:

* Recursion: T: O(N), S: O(N)
 
```python
def reverseKGroup(self, head: ListNode, k: int):
  if not head: return None

  def reverseN(a, b):
    prev, curr = None, a
    while curr != b:
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    return prev

  a, b = head, head
  for i in range(k):
    if not b: return head  # not enough k
    b = b.next

  new_head = reverse(a, b)
  a.next = reverseKGroup(b, k)
  return new_head
```
