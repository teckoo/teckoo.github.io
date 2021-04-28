---
layout: leetcode
title: "170. Two Sum III - Data structure design"
categories: [leetcode]
---

[Leetcode Link]https://leetcode.com/problems/two-sum-iii-data-structure-design/)

Design a data structure that accepts a stream of integers and checks if it has a pair of integers that sum up to a particular value.

Implement the TwoSum class:

* TwoSum() Initializes the TwoSum object, with an empty array initially.
* void add(int number) Adds number to the data structure.
* boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.

Example 1:

```
Input
["TwoSum", "add", "add", "add", "find", "find"]
[[], [1], [3], [5], [4], [7]]
Output
[null, null, null, null, true, false]

Explanation
TwoSum twoSum = new TwoSum();
twoSum.add(1);   // [] --> [1]
twoSum.add(3);   // [1] --> [1,3]
twoSum.add(5);   // [1,3] --> [1,3,5]
twoSum.find(4);  // 1 + 3 = 4, return true
twoSum.find(7);  // No two integers sum up to 7, return false
 

Constraints:

-105 <= number <= 105
-231 <= value <= 231 - 1
At most 5 * 104 calls will be made to add and find.
```

# Solution: 

* Hashmap, `add` is O(1), `find` is O(N).

```python
class TwoSum(object):

  def __init__(self):
    """
    Initialize your data structure here.
    """
    self.num_counts = {}


  def add(self, number):
    self.num_counts[number] = self.num_counts.get(number, 0) + 1

  def find(self, value):
      """
      Find if there exists any pair of numbers which sum is equal to the value.
      :type value: int
      :rtype: bool
      """
      for num in self.num_counts.keys():
          comple = value - num
          if num != comple:
              if comple in self.num_counts:
                  return True
          elif self.num_counts[num] > 1:
              return True
      
      return False
```

There can be follow up:

1. what if there are many `find()`, fewer `add()` calls?

In this case, we can optimize `find()` with `hashmap`. `find` is O(1), `add` is O(N)

```python
def __init__(self):
  self.sum = set()
  self.nums = []

def add(self, number):
  for num in nums:
    self.sum.add(num + number)
def find(self, value):
  return value in sum
```