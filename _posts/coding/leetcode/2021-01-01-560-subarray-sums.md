---
layout: leetcode
title: "560. Subarray Sum Equals K"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/subarray-sum-equals-k/)

Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

```
# Examples
Input: nums = [1,1,1], k = 2, Output: 2, [1,1] and [1,1]

Input: nums = [1,2,3], k = 3, Output: 2, [1, 2], [3]
```

Solution: 
* `sum(nums[l:r]) == sum[r] - sum[l - 1]`
* `sum[r] - sum[l] == k` => `sum[l] == sum[r] - k` use `two-sum` hashmap trick to reduce to `O(N)`. 
* Time: `O(N)`, Space: `O(N)`

```python
def subarray_sum(nums, k):
  # map：前缀和 -> 该前缀和出现的次数
  pre_sum = {}  # (sum and count)
  # base case
  pre_sum[0] = 1

  ans, sum0_i = 0, 0
  for r in range(len(nums)):
      sum0_r += nums[r]
      # 这是我们想找的前缀和 nums[0..r]
      sum0_l = sum0_r - k
      # 如果前面有这个前缀和，则直接更新答案
      if sum0_l in pre_sum:
          ans += pre_sum[sum0_l]
      # 把前缀和 nums[0..i] 加入并记录出现次数
      pre_sum[sum0_r] = pre_sum.get(sum0_r, 0) + 1
  return ans
```
