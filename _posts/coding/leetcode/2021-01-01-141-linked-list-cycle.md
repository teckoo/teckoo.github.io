---
layout: leetcode
title: "141. Linked List Cycle"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/linked-list-cycle/)

Given head, the head of a linked list, determine if the linked list has a cycle in it.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

# Fast/Slow pointers

```python
def hasCycle(self, head: ListNode) -> bool:
   if not head:
     return False
   slow = head
   fast = head.next
   while slow != fast:
     # print(fast.val, slow.val)
     if not fast or not fast.next:
       return False
     slow = slow.next
     fast = fast.next.next
   return True
```

如果被问还有没有其它解法，可以用Hashset, Time: O(N), but Space is O(N). 