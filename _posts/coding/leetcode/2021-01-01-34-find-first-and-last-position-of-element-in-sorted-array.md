---
layout: leetcode
title: "704. Binary Search"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Example 1:

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

Solution: 

* Binary search template

```python
def searchRange(self, nums: List[int], target: int) -> List[int]:
  if not nums: return -1, -1

  def left_bound(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
      m = (l + r) // 2
      if nums[m] < target:
        l = m + 1
      else:
        r = m - 1
    # end condition: l == r + 1, check boundary
    return l if l < len(nums) and nums[l] == target else -1

  def right_bound(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
      m = (l + r) // 2
      if nums[m] <= target:
        l = m + 1
      else:
        r = m - 1
    # end condition: l == r + 1, check boundary
    return r if r >= 0 and nums[r] == target else -1
  return left_bound(nums, target), right_bound(nums, target)
```