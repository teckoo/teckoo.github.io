---
layout: leetcode
title: "704. Binary Search"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/binary-search/)

Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

Solution: 

* Binary search template

```python
def search(self, nums: List[int], target: int) -> int:
  if not nums: return -1
  l, r = 0, len(nums) - 1
  while l <= r:
    m = (l + r) // 2
    if nums[m] == target:
      return m
    elif nums[m] < target: 
      l = m + 1
    else:
      r = m - 1
  return -1
```