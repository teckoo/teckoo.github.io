---
layout: leetcode
title: "167. Two Sum II - Input array is sorted"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

Example 1:

```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
```
# Solution

* Two pointers

```python
def twoSum(self, numbers: List[int], target: int) -> List[int]:
  
  low, high = 0, len(numbers)-1
  while low < high:
    num = numbers[low] + numbers[high]
    if num == target:
      return (low+1, high+1)
    elif num < target:
      low += 1
    else:
      high -= 1
  return [-1, -1]
```
