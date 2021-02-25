---
layout: leetcode
title: "46. Permutations"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/permutations/)
| [Backtrack template](/template/backtrack)

Given a collection of distinct integers, return all possible permutations.

Example:

```
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

Solution: 

* Backtrack 有模板解法，这个稍微简洁一些，参数也不一样。

```python
def backtrack(nums):
  if not nums: return []
  if len(nums) == 1: return [nums]
  result = []
  for i in range(len(nums)):
    new_candidates = nums[:i] + nums[i+1:]
    for path in backtrack(new_candidates):
      # path: [2, 3], new_candidates: [[2, 3], [3, 2]]
      result.append([nums[i]] + path)  # [1] + [2, 3]
    # no restoration
  print(f"input={nums}, result={result}")
  return result

assert backtrack([]) == [] 
assert backtrack([1]) == [[1]] 
assert backtrack([1, 2]) == [[1,2], [2, 1]]
assert len(backtrack([1, 2, 3])) == 6
```
