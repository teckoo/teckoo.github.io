---
layout: leetcode
title: "496. Next Greater Element I"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/subarray-sum-equals-k/)

You are given two integer arrays nums1 and nums2 both of unique elements, where nums1 is a subset of nums2.

Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, return -1 for this number.

```
# Examples
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation:
For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
For number 1 in the first array, the next greater number for it in the second array is 3.
For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
```

Solution: 

```python
def next_greater_element(nums):
    res = []
    stack = collections.deque()
    for i in range(len(nums) - 1, -1, -1):
        while stack and stack[-1] <= nums[i]:
            stack.pop()  # remove smaller numbers
        # find next great number
        res[i] = stack[-1] if stack else -1
        stack.append(nums[i])  # push
    return res
```
