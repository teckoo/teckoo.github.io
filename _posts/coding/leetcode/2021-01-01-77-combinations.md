---
layout: leetcode
title: "77. Combinations (M)"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/combinations/)
| [Backtrack template](/template/backtrack)

Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.
 
```
Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
Example 2:

Input: n = 1, k = 1
Output: [[1]]
 

Constraints:

1 <= n <= 20
1 <= k <= n
```

# Solution

* Backtrack 模板解法 T: O(2^N), S: O(N)

```python
def combine(n, k):
  if n <= 0 or k <=0: return []

  def backtrack(n, k, start, track):
    if k == len(track):
      res.append(track)
      return

    for i in range(start, n + 1):
      track.append(i)  # make choice
      backtrack(n, k, i+1, track)
      track.pop()  # undo choice

  res = []
  track = []
  backtrack(n, k, 1, track)
  return res


run simulation: 
res: 
[[1, 2]]
[[1, 2], [1, 3]]
[[1, 2], [1, 3], [1, 4]]
[[1, 2], [1, 3], [1, 4], [2, 3]]
[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4]]
[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
```
