---
layout: leetcode
title: "Intervals"
categories: [template]
---

# Intervals merge/intersect

[Explaination Details](./summary.md) | [Template Index](../template_list.md)

```python
def removeCoveredIntervals(intvs):
    # 按照起点升序排列，起点相同时降序排列
    intvs.sort(key=lambda x: (x[0], -x[1]))
    # 记录合并区间的起点和终点
    left = intvs[0][0]
    right = intvs[0][1]

    res = 0
    for x, y in range(intv[1:]):
        # 情况一，找到覆盖区间
        if left <= x and y <= right:
            res += 1
        # 情况二，找到相交区间，合并
        if right >= x and right <= y:
            right = y
        # 情况三，完全不相交，更新起点和终点
        if right < x:
            left = x
            right = y

    return len(intvs) - res
```
