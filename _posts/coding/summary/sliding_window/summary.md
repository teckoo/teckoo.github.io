# Sliding Window

In many problems dealing with an array (or a LinkedList), we are asked to find or calculate 
something among all the contiguous subarrays (or sublists) of a given size. 
For example, take a look at this problem:

```text
    Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
    e.g.
    Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
    Output: [2.2, 2.8, 2.4, 3.6, 2.8]
```

Brutal force solution is O(N*K). With sliding window, we can reuse the sum and make it O(N).

Window length can be fixed or flexible. 

Fixed length example: `Maximum Sum Subarray of Size K`

```text
Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
```

```python
def max_sub_array_of_size_k(k, arr):
  max_sum = 0
  window_sum = 0

  for i in range(len(arr) - k + 1):
    window_sum = 0
    for j in range(i, i+k):
      window_sum += arr[j]
    max_sum = max(max_sum, window_sum)
  return max_sum
```

Changing window length example: `Smallest Subarray with a given sum`

```text
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
```

```python
import math
def smallest_subarray_with_given_sum(s, arr):
  window_sum = 0
  min_length = math.inf
  window_start = 0

  for window_end in range(0, len(arr)):
    window_sum += arr[window_end]  # add the next element
    # shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while window_sum >= s:
      min_length = min(min_length, window_end - window_start + 1)
      window_sum -= arr[window_start]
      window_start += 1
  if min_length == math.inf:
    return 0
  return min_length
```

## LeetCode problems

```text
1176  Diet Plan Performance 54.0%  Easy  
1100  Find K-Length Substrings With No Repeated Characters 72.8%  Medium  
1151  Minimum Swaps to Group All 1's Together 59.6%  Medium  
1004  Max Consecutive Ones III  59.3%  Medium  
1052  Grumpy Bookstore Owner  55.3%  Medium  
1040  Moving Stones Until Consecutive II  52.9%  Medium  
1456  Maximum Number of Vowels in a Substring of Given Length  52.5%  Medium  
159  Longest Substring with At Most Two Distinct Characters 49.4%  Medium  
424  Longest Repeating Character Replacement  47.1%  Medium  
978  Longest Turbulent Subarray  46.7%  Medium  
567  Permutation in String  44.4%  Medium  
1423  Maximum Points You Can Obtain from Cards  43.0%  Medium  
1438  Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit  42.5%  Medium  
1208  Get Equal Substrings Within Budget  42.0%  Medium  
1498  Number of Subsequences That Satisfy the Given Sum Condition  36.8%  Medium  
3  Longest Substring Without Repeating Characters  30.5%  Medium  
1074  Number of Submatrices That Sum to Target  60.4%  Hard  
992  Subarrays with K Different Integers  48.8%  Hard  
995  Minimum Number of K Consecutive Bit Flips  46.9%  Hard  
1499  Max Value of Equation  44.4%  Hard  
340  Longest Substring with At Most K Distinct Characters 44.2%  Hard  
239  Sliding Window Maximum  43.2%  Hard  
727  Minimum Window Subsequence 41.8%  Hard  
480  Sliding Window Median  37.4%  Hard  
76  Minimum Window Substring  34.8%  Hard
```
