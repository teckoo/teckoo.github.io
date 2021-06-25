---
layout: leetcode
title: "2. Add Two Numbers"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/add-two-numbers/)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

```
Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

# Solution

```python
def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:

  pre_head = ListNode(0)
  cur = pre_head
  carry = 0
  while l1 or l2 or carry:
    if l1:
      carry += l1.val
      l1 = l1.next
    if l2:
      carry += l2.val
      l2 = l2.next
    carry, digit = divmod(carry, 10) 
    cur.next = ListNode(digit)
    cur = cur.next
  
  return pre_head.next
```