---
layout: leetcode
title: "Sliding window"
categories: [template]
---

# Template

[Explaination Details](./sliding_window_summary) | [Template Index](/template/template_list)

```python
# for LC Problem 76
# window is [left, right) [close and open)
def sliding_window(s, t):
    """ s, t are iterable """
    need, window = {}, {}  # counters
    need = collections.Counter(t)
    # need = {A: 1, B: 1, C: 1}
    left = right = 0
    valid = 0
    while right < len(s):
        c = s[right]
        right += 1  # move right window
        # ... update window
        # e.g. window[c] += 1
        
        print(f"left={left}, right={right}")
        # check left window
        while window needs shrink:
            d = s[left]
            left += 1
            # ... update window
            # e.g. window[d] -= 1
```

LC: 76, 567, 438, 3