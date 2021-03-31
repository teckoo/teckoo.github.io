---
layout: leetcode
title: "234. Palindrome Linked List"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/palindrome-linked-list/) | [Linked list template](/template/linked_list)

Given the head of a singly linked list, return true if it is a palindrome.

Example 1:

```
Input: head = [1,2,2,1]
Output: true
```

Example 2:

```
Input: head = [1,2]
Output: false
```

# Fast/Slow pointers

```python
def isPalindrome(self, head: ListNode) -> bool:
  if not head: return True
  # now head is not NULL

  def end_of_1st_half(head):
    slow, fast = head, head
    while fast and fast.next:
      slow = slow.next
      fast = fast.next.next
    return slow
  
  def reverse_list(head):
    prev = None
    curr = head
    while curr:
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    return prev

  first_half_end = end_of_1st_half(head)
  second_half_start = reverse_list(first_half_end.next)

  # compare 2 halves
  result = True
  pos_1, pos_2 = head, second_half_start

  while result and pos_2:
    if pos_1.val != pos_2.val:
      result = False  # don't return here, need to reverse the 2nd half
    pos_1, pos_2 = pos_1.next, pos_2.next
  
  first_half_end.next = reverse_list(second_half_start)
  return result
```

Other solutions all have same Time: O(N), but Space is O(N). 