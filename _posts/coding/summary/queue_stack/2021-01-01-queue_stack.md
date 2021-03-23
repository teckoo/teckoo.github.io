---
layout: leetcode
title: "Queue and Stack"
categories: [template]
---

# Template

[Explaination Details](./summary.md) | [Template Index](../template_list.md)

## Mono stack template

O(N) because every number at most push/pop once.
for loop starts from the end. 

```python
def next_grater_element(nums):
    res = []
    stack = collections.deque()
    for i in range(len(nums) - 1, -1, -1):
        while stack and stack[-1] <= nums[i]:
            s.pop()  # remove smaller numbers
        # some ops
        res[i] = s[-1] if stack else -1
        stack.append(nums[i])  # push
    return res
```

LC: 
[496 next greater element]
[503 next greater elem II]
[739 daily temperature]

## Monotonic queue template

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
        if (i < k - 1):  # initialize first (k-1)
            push_queue(i)
        else:  # move window
            push_queue(i)
            res.append(nums[window[0]])
    return res
```

LC:
[239 sliding window max]