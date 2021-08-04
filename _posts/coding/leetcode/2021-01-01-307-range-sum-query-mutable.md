---
layout: leetcode
title: "307. Range Sum Query - Mutable" 
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/range-sum-query-mutable/)
| [Tree template](/template/segment_tree)

Given an integer array nums, handle multiple queries of the following types:

* Update the value of an element in nums.
* Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.

Implement the NumArray class:

* NumArray(int[] nums) Initializes the object with the integer array nums.
* void update(int index, int val) Updates the value of nums[index] to be val.
* int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 
```
Example 1:

Input
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8]

Explanation
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
0 <= index < nums.length
-100 <= val <= 100
0 <= left <= right < nums.length
At most 3 * 104 calls will be made to update and sumRange.
```

# Solution

Segment tree is a very flexible data structure, because it is used to solve numerous **range query problems** like finding minimum, maximum, sum, greatest common divisor, least common denominator in array in logarithmic time.

The idea here is to build a segment tree. Each node stores the left and right
endpoint of an interval and the sum of that interval. All of the leaves will store
elements of the array and each internal node will store sum of leaves under it.
Creating the tree takes O(n) time. Query and updates are both O(log n).

Time: O(logN)


```python

class Node(object):
  def __init__(self, start, end):
    self.start = start
    self.end = end
    self.total = 0
    self.left = None
    self.right = None

class NumArray(object):
  def __init__(self, nums):
    def build_tree(nums, l, r):
      # base case
      if l > r: return None
      # leaf node
      if l == r:
        n = Node(l, r)
        n.total = nums[l]
        return n
      mid = (l + r) // 2
      root = Node(l, r)
      root.left = build_tree(l, mid)
      root.right = build_tree(mid + 1, r)
      root.total = root.left.total + root.right.total
      return root

    self.root = build_tree(nums, 0, len(nums) - 1)

  def update(self, i, val):
    def update_val(root, i, val):
      # base case, update a leaf, then update upward
      if root.start == root.end:
        root.total = val
        return val
      
      mid = (root.start + root.end) // 2
      if i <= mid:
        update_val(root.left, i, val)
      else:
        update_val(root.right, i, val)
      
      root.total = root.left.total + root.right.total
      return root.total
    return update_val(self.root, i, val)

  def sumRange(self, i, j):
    def sum_range(root, i, j):
      if root.start == i and root.end == j:
        return root.total
      mid = (root.left + root.right) // 2
      if j <= mid:
        return sum_range(root.left, i, j)
      elif i > mid:
        return sum_range(root.right, i, j)
      else:
        return sum_range(root.left, i, mid) + sum_range(root.right, mid + 1, j)
    return sum_range(self.root, i, j)
```