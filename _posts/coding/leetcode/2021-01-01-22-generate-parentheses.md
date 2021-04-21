---
layout: leetcode
title: "22. Generate Parentheses"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/generate-parentheses/)
| [Backtrack template](/template/backtrack)

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 
```
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
```

# Solution

* Backtrack, Time: O(2^N), Space: O(N)

```python
def generateParenthesis(n):
  if n <= 0: return []

  def backtrack(left, right, track):
    if left > right: return
    if left < 0 or right < 0: return 
    if left == 0 and right == 0:
      res.append(track)
      return

    # try '('
    track.append('(')
    backtrack(left - 1, right, track)
    track.pop()

    # try ')'
    track.append(')')
    backtrack(left, right - 1, track)
    track.pop()

  res = []
  track = ""
  backtrack(n, n, track)
  return res
```
