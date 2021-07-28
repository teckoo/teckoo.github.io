---
layout: leetcode
title: "706. Design HashMap"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/design-hashmap/)

Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

* MyHashMap() initializes the object with an empty map.
* void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
* int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
* void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 
```
Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
 

Constraints:

0 <= key, value <= 106
At most 104 calls will be made to put, get, and remove.
```

# Solution

```python
  def __init__(self):
      """
      Initialize your data structure here.
      """
      self.cnt = 1000
      self.bucket = [None] * self.cnt

  def put(self, key: int, value: int) -> None:
      """
      value will always be non-negative.
      """
      idx = key % self.cnt
      item = self.bucket[idx]
      if item is None:
          self.bucket[idx] = [[key, value]]
      else:
          for i in item:
              if key == i[0]:
                  i[1] = value
                  return
          item.append([key, value])

  def get(self, key: int) -> int:
      """
      Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
      """
      idx = key % self.cnt
      item = self.bucket[idx]
      if item:
          for k, v in item:
              if k == key: return v
      return -1

  def remove(self, key: int) -> None:
      """
      Removes the mapping of the specified value key if this map contains a mapping for the key
      """
      idx = key % self.cnt
      item = self.bucket[idx]
      if item:
          for pos, i in enumerate(item):
              if i[0] == key: 
                  del item[pos]
                  return
```
