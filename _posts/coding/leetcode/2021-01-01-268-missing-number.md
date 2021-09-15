---
layout: leetcode
title: "268. Missing Number" 
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/missing-number/)
| [Template](/template/bit)

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

```
Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

```

# Solution

## XOR

Time: O(N), Space: O(1)

```python
def missingNumber(self, nums):
    missing = len(nums)
    for i, num in enumerate(nums):
        missing ^= i ^ num
    return missing
```

## Math

Time: O(N), Space: O(1)

If numbers are too large, sum might be overflow in Java/C. 
But `sum()` can be optimized to O(lgN) with parallel computing.

```python
def missingNumber(self, nums):
    n = len(nums)
    total = n * (n + 1) // 2
    return total - sum(nums)
```

## Hashset

If asked for any other solution, we can mention `Hashset`, and point out the space complexity takes O(N).

Note: I really met this problem in an interview. No need to coding, but discussed all three solutions for their pros and cons.