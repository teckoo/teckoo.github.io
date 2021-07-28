---
layout: leetcode
title: "23. Merge k Sorted Lists"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/merge-k-sorted-lists/)


You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

```
Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
```

# Solution

The idea is useful when sorting or finding the median value of multiple disks which cannot be loaded into memory.

```python
import heapq

def mergeKLists(self, lists: List[ListNode]) -> ListNode:
    h = [(head.val, idx, head) for idx, head in enumerate(lists) if head]
    heapq.heapify(h)
    dummy = ListNode()
    last = dummy
    while h:
        val, idx, node = heapq.heappop(h)
        last.next = node
        last = last.next
        if node.next:
            heapq.heappush(h, (node.next.val, idx, node.next))
    return dummy.next
```
