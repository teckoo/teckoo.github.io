---
layout: leetcode
title: "81. Search in Rotated Sorted Array II"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

 
```
Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104
 

Follow up: This problem is the same as Search in Rotated Sorted Array, where nums may contain duplicates. Would this affect the runtime complexity? How and why?
```

# Solution

```python
def search(self, nums, target):
  l, r = 0, len(nums) - 1
  while l <= r:
    m = (l + r) // 2
    if nums[m] == target:
      return True 
    elif nums[m] > nums[r]: 
      # 1st half is sorted
      if nums[l] <= target < nums[m]:
      # note <= and <
        r = m - 1
      else:
        l = m + 1
    elif nums[m] < nums[r]:
      if nums[m] < target <= nums[r]:
        # 2nd half is sorted
        l = m + 1
      else:
        r = m -1
    else:  # worst case
      r -= 1
  return nums[l] == target
```