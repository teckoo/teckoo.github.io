---
layout: leetcode
title: "438. Find All Anagrams in a String"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
| [Sliding window template](/template/sliding_window)

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

Example 1:

```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]
```

Solution: 

* Sliding window template. Time: O(S+T), Space: O(S+T). S: length of s, T: len(t).

```python
def findAnagrams(self, s: str, p: str) -> List[int]:

  window = {}  # char: count
  needs = collections.Counter(p)
  len_t = len(p)
  match = 0
  required = len(needs)
  l, r = 0, 0
  res = []
  while r < len(s):
    ch = s[r]
    if ch in needs:
        window[ch] = window.get(ch, 0) + 1
        if window[ch] == needs[ch]:
          match += 1
    r += 1

    while l < r and match == required:
      ch = s[l]
      if r - l == len_t: 
            res.append(l)
      if ch in needs:
        window[ch] -= 1
        if window[ch] < needs[ch]:
          match -= 1
      l += 1
  return res
```
