---
layout: leetcode
title: "222. Count Complete Tree Nodes"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/count-complete-tree-nodes/)
| [Tree template](/template/tree)

Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Solution:

Time: O(logN*logN)，

- Leetcode solution

```python
def compute_depth(self, node: TreeNode) -> int:
    """
    Return tree depth in O(d) time.
    """
    d = 0
    while node.left:
        node = node.left
        d += 1
    return d

def exists(self, idx: int, d: int, node: TreeNode) -> bool:
    """
    Last level nodes are enumerated from 0 to 2**d - 1 (left -> right).
    Return True if last level node idx exists. 
    Binary search with O(d) complexity.
    """
    left, right = 0, 2**d - 1
    for _ in range(d):
        pivot = left + (right - left) // 2
        if idx <= pivot:
            node = node.left
            right = pivot
        else:
            node = node.right
            left = pivot + 1
    return node is not None
    
def countNodes(self, root: TreeNode) -> int:
    # if the tree is empty
    if not root:
        return 0
    
    d = self.compute_depth(root)
    # if the tree contains 1 node
    if d == 0:
        return 1
    
    # Last level nodes are enumerated from 0 to 2**d - 1 (left -> right).
    # Perform binary search to check how many nodes exist.
    left, right = 1, 2**d - 1
    while left <= right:
        pivot = left + (right - left) // 2
        if self.exists(pivot, d, root):
            left = pivot + 1
        else:
            right = pivot - 1
    
    # The tree contains 2**d - 1 nodes on the first (d - 1) levels
    # and left nodes on the last level.
    return (2**d - 1) + left
```

- a simple solution works for **complete binary tree** only (left subtree is perfect complete, right subtree is not, but still complete)

```python
def countNodes(root):
  l, r = root, root
  hl, hr = 0, 0
  while l:
    l = l.left
    hl += 1

  while r:
    r = r.right
    hr += 1
  
  if hl == hr:
    return 2**hl - 1
  
  return 1 + countNodes(root.left) + countNodes(root.right)
```