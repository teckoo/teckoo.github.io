---
layout: leetcode
title: "142. Linked List Cycle II"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/linked-list-cycle-ii/)

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

# Fast/Slow pointers

先找到meetpoint，再从头同步前进直到相遇。

```python
def meet(self, head: ListNode) -> ListNode:
  if not head: return None
  slow = head
  fast = head
  while fast and fast.next:
    slow = slow.next 
    fast = fast.next.next 
    # print(slow.val, fast.val)
    if slow == fast: return slow
  return None

def detectCycle(self, head: ListNode) -> ListNode:
  fast = self.meet(head)
  if not fast: return None
  slow = head
  while slow != fast:
    # print(slow.val, fast.val)
    if not fast or not fast.next: return None
    slow = slow.next
    fast = fast.next

  return slow
```

如果被问还有没有其它解法，可以用Hashset, Time: O(N), but Space is O(N). 