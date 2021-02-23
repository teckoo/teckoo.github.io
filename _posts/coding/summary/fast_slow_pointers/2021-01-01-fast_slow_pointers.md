---
layout: leetcode
title: "Fast and slow pointers"
categories: [template]
---

# Template

[Explaination Details](./summary.md) | [Template Index](../template_list.md)

```python
def meet(self, head):
    """ check whether there is a cycle """
    if not head: return None
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast: return slow
    return None

def detect_cycle(self, head):
    """ if there is a cycle, return the node that cycle begins """
    fast = self.meet(head)
    if not fast: return None
    slow = head
    while slow != fast:
        if not fast or not fast.next: 
            return None
        slow = slow.next
        fast = fast.next
    return slow
```