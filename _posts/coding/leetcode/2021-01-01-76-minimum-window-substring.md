---
layout: leetcode
title: "76. Minimum Window Substring"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/minimum-window-substring/)
| [Sliding window template](/template/sliding_window)

Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Example:

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
```

Solution: 

* Sliding window

```python
def minWindow(self, s, t):
  if not t or not s: return ""

  # Dictionary which keeps a count of all the unique characters in t.
  needs = collections.Counter(t)

  # Number of unique characters in t, which need to be present in the desired window.
  required = len(needs)

  # left and right pointer
  l, r = 0, 0

  # match is used to keep track of how many unique characters in t are present in the current window in its desired frequency.
  # e.g. if t is "AABC" then the window must have two A's, one B and one C. Thus match would be = 3 when all these conditions are met.
  match = 0

  # Dictionary which keeps a count of all the unique characters in the current window.
  window_counts = {}

  # ans tuple of the form (window length, left, right)
  ans = float("inf"), None, None

  while r < len(s):

    # Add one character from the right to the window
    ch = s[r]
    window_counts[ch] = window_counts.get(ch, 0) + 1

    # add to `match` when size matches, 
    # it can go beyong, but count only once.  
    if ch in needs and window_counts[ch] == needs[ch]:
      match += 1

    # increase right side, part 1 done
    r += 1

    # shrink the left side, part 2
    while l < r and match == required:
      ch = s[l]

      # update window size
      if r - l < ans[0]:
        ans = (r - l, l, r)

      window_counts[ch] -= 1
      if ch in needs and window_counts[ch] < needs[ch]:
        match -= 1  # extra counts don't count

      l += 1

  return "" if ans[0] == float("inf") else s[ans[1]: ans[2]]
```
