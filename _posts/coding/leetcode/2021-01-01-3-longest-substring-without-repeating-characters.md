---
layout: leetcode
title: "3. Longest Substring Without Repeating Characters"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
| [Sliding window template](/template/sliding_window)

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

```

Solution: 

* Sliding window

```python
def lengthOfLongestSubstring(self, s: str) -> int:
  if not s: return 0 

  window = {}
  l, r = 0, 0
  res = 0
  while r < len(s):
    ch = s[r]
    window[ch] = window.get(ch, 0) + 1 
    r += 1

    while window[ch] > 1:
      l_ch = s[l]
      window[l_ch] -= 1
      l += 1
    res = max(r - l, res)
  return res
```
