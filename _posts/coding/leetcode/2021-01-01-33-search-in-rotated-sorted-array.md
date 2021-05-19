---
layout: leetcode
title: "33. Search in Rotated Sorted Array"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/search-in-rotated-sorted-array/)

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 
```
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104
```

# Solution

## method 1. intuition

* find the pivot index
* check which part the target belongs to
* perform regular binary search on the half.

```python
def search(self, nums, target):
  def find_pivot(left, right):
    if nums[left] < nums[right]: return 0
    while left <= right:
      mid = (left + right) // 2
      if nums[mid] > nums[mid + 1]: 
        return mid + 1
      else:
        if nums[mid] < nums[left]:
          right = mid - 1
        else:
          left = mid + 1
    return -1

  if not nums: return -1
  n = len(nums)
  if n == 1: 
    return 0 if nums[0] == target else -1
  if nums[-1] < nums[0]:
    pv_idx = find_pivot(0, n)
    if target < nums[0]:
      return binary_search(pv_idx, n-1)
    else:
      return binary_search(0, pv_idx-1)
  else:
    return binary_search(0, n-1)
```
## method 2. 

If the follow-up question is to find a one-pass solution, need to first check `mid` is in the 1st ascending part, or the 2nd half. Then compare target with (start, mid, end). Use the sorted half to check target.

```python
def search(self, nums, target):
  start, end = 0, len(nums) - 1
  while start <= end:
    mid = (start + end) // 2
    if nums[mid] == target:
      return mid
    elif nums[mid] >= nums[start]: 
      # 1st half is sorted
      if nums[start] <= target < nums[mid]:
      # note <= and <
        end = mid - 1
      else:
        start = mid + 1
    else:
      if nums[mid] < target <= nums[end]:
        # 2nd half is sorted
        start = mid + 1
      else:
        end = mid -1
  return -1
```