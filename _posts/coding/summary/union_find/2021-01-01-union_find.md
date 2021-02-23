---
layout: leetcode
title: "Union and find"
categories: [template]
---

# Union Find Template

[Explaination Details](./summary.md) | [Template Index](../template_list.md)

* Time complexity: union O(1), find O(1)
* Space complexity: O(N)

```python
class UnionFind:
    def __init__(self):
        self.parent = {}
        self.size_of_set = {}
        self.num_of_set = 0
    
    def add(self, x):
        if x in self.parent: return

        # initialize parent
        self.parent[x] = None
        self.num_of_set += 1
        self.size_of_set[x] = 1
    
    def merge(self, x, y):
        # find 2 nodes's root
        root_x, root_y = self.find(x), self.find(y)

        # merge if not the same root
        if root_x != root_y:
            self.parent[root_x] = root_y
            self.num_of_set -= 1
            self.size_of_set[root_y] += self.size_of_set[root_x]
    
    def find(self, x):
        # root point to x, keep searching root's parents till find x's parent
        root = x
        while self.parent[root] != None:
            root = self.parent[root]
        # set all nodes to point to the same root
        while x != root:
            origin_parent = self.parent[x]
            self.parent[x] = root
            x = origin_parent
        return root
    
    def is_connected(self, x, y):
        return self.find(x) == self.find(y)

```
