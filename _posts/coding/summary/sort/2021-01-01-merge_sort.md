---
layout: leetcode
title: "Merge sort"
categories: [template]
---

```python
# sort an array list
def merge(nums):
    if len(nums) < 2: return nums  # handle empty and single item
    pivot = len(nums) // 2
    # actually pivot decides left_lst size is <= right_lst
    left_lst = merge(nums[:pivot])
    right_lst = merge(nums[pivot:])
    return merge_sort(left_lst, right_lst)


def merge_sort(left_lst, right_lst):
    result = []
    lft_idx, rgt_idx = 0, 0
    while lft_idx < len(left_lst) and rgt_idx < len(right_lst):
        if left_lst[lft_idx] < right_lst[rgt_idx]:
            result.append(left_lst[lft_idx])
            lft_idx += 1
        else:
            result.append(right_lst[rgt_idx])
            rgt_idx += 1
    result.extend(left_lst[lft_idx:])
    result.extend(right_lst[rgt_idx:])
    return result

def test_merge():
    nums = [1, 5, 3, 2, 8, 7, 6, 4]
    expect = [1, 2, 3, 4, 5, 6, 7, 8]
    result = merge(nums)
    assert result == expect

if __name__ == "__main__":
    """ run command
    pytest <this file>
    python -m pytest merge_sort_array.py
    """
    import pytest
    pytest.main()
```