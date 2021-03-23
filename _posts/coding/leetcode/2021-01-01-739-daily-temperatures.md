---
layout: leetcode
title: "739. Daily Temperatures"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/daily-temperatures/)

Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].



Solution: 

Mono stack template. O(N)

```python
def dailyTemperature(nums):
    res = []  # store index, not items
    stack = collections.deque()
    for i in range(len(nums) - 1, -1, -1):
        while stack and nums[stack[-1]] <= nums[i]:
            stack.pop()  # remove smaller numbers
        # find next great number
        res[i] = stack[-1] - i if stack else 0 
        stack.append(i)  # push index
    return res
```
