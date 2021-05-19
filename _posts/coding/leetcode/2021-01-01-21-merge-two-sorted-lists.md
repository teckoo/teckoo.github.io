---
layout: leetcode
title: "21. Merge Two Sorted Lists"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/merge-two-sorted-lists/)

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 
```
Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
```

# Solution

## Iteration

T: O(m + n), S:O(1)

```python
def mergeTwoLists(self, l1, l2):
  prehead = ListNode(-1)

  curr = prehead
  while l1 and l2:
    if l1.val < l2.val:
      curr.next = l1
      l1 = l1.next
    else:
      curr.next = l2
      l2 = l2.next
    curr = curr.next
  curr.next = l1 or l2

  return prehead.next
```

## Recursion

T: O(m + n), S:O(m + n)
```python
def mergeTwoList(self, l1, l2):
  if not l1: return l2
  if not l2: return l1

  if l1.val < l2.val:
    l1.next = self.mergeTwoList(l1.next, l2)
    return l1
  else:
    l2.next = self.mergeTwoList(l1, l2.next)
    return l2
```