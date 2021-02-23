# Merge Intervals

This pattern describes an efficient technique to deal with overlapping intervals. In a lot of problems involving intervals, we either need to find overlapping intervals or merge intervals if they overlap.

Trick:
常见的排序方法就是按照区间起点排序，或者先按照起点升序排序，若起点相同，则按照终点降序排序。

```python
sorted(intervals, key = lambda k: (k[0], -k[1]))
```

Given two intervals (‘a’ and ‘b’), there will be six different ways the two intervals can relate to each other.

Our algorithm will look like this:

1. Sort the intervals on the start time to ensure a.start <= b.start
1. If ‘a’ overlaps ‘b’ (i.e. b.start <= a.end), we need to merge them into a new interval ‘c’ such that:

    ```python
        c.start = a.start
        c.end = max(a.end, b.end)
    ```

1. We will keep repeating the above two steps to merge ‘c’ with the next interval if it overlaps with ‘c’.

# Problems

* Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

    ```bash
    Intervals: [[1,4], [2,5], [7,9]]
    Output: [[1,5], [7,9]]
    Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].
    ```

* 

## LC

56, 986, 1288
