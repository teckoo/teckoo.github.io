---
layout: leetcode
title: "Quick sort"
categories: [template]
---

```python
import random
def quick_sort(arr):
    def qsort(arr, l, r):
        if l < r:
            p = partition(arr, l, r)
            qsort(arr, l, p - 1)
            qsort(arr, p + 1, r)

    def partition(arr, l, r):
        # simple solution
        # pv = arr[r]

        # this solution avoid almost sorted array 
        # which causes poor performance
        index = random.randint(l, r)
        pv = arr[index]
        arr[index], arr[r] = arr[r], arr[index]

        cur = l
        for i in range(l, r):
            if arr[i] < pv:
                arr[i], arr[cur] = arr[cur], arr[i]
                cur += 1
        arr[cur], arr[r] = arr[r], arr[cur]
        return cur

    qsort(arr, 0, len(arr) - 1)
    return arr

def test_quick_sort():
    data = [1, 3, 2, 5, 4]
    ret = quick_sort(data) 
    # print(ret)
    assert ret == [1, 2, 3, 4, 5]

if __name__ == "__main__":
    """ from terminal, run
    pytest this_file.py
    """
    #import pytest
    #pytest.main()
    test_quick_sort()
```