---
layout: leetcode
title: "239. Sliding Window Maximum"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/sliding-window-maximum/)

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example 1:

```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

Solution: 

Use [monotonic queue template](/template/queue_stack/#monotonic-queue-template). 

```python
def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
    def push_queue(i):
        if window and window[0] == i-k:
            window.popleft()

        while window and nums[i] > nums[window[-1]]:
            window.pop()
        window.append(i)
        
    window = collections.deque()
    res = []
    for i in range(len(nums)):
        # initialize first (k-1)
        push_queue(i)
        if i >= k:  # move window
            res.append(nums[window[0]])
    return res

```
