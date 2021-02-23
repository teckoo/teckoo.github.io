---
layout: leetcode
title: "Binary Search"
categories: [template]
---

# Binary search template

[Explaination Details](./summary.md) | [Template Index](../template_list.md)

```python
def binarySearch(nums, target):
    left = 0, right = len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] < target:
            left = mid + 1
        elif nums[mid] > target:
            right = mid - 1
        else:  # check meet_condition():
            # return mid      # search a value
            # right = mid -1  # search left boundary
            # left = mid + 1  # search right boundary
    # ending value: left = right + 1, e.g. [3, 2]
    # need to check index and boundary,
    # search left bound
    if left >= len(nums) || nums[left] != target:
        return -1
    return left
    # or search right bound
    if right < 0 || nums[right] != target:
        return -1
    return right
```

Notes:

1. search **ONE item**, use `[left, right]`
2. search **a range**, use `[left, right)`

```python
# return the lower_bound/upper_bound of a val in a sorted array
# lower_bound(x): first index of i, such that A[i] >= x
# upper_bound(x): first index of i, such that A[i] > 
def lower_bound(A, val):
    def _lb(A, val, l, r):
        while l < r: 
            m = l + (r - l) // 2
            if A[m] >= val: # >= condition
                r = m
            else: 
                l = m + 1
        return l
    return _lb(A, val, 0, len(A))


def upper_bound(A, val):
    def _ub(A, val, l, r):
        while l < r: 
            m = l + (r - l) // 2
            if A[m] > val: # NO = 
                r = m
            else:
                l = m + 1
        return l
    return _ub(A, val, 0, len(A))
```
