---
layout: leetcode
title: "236. Lowest Common Ancestor of a Binary Tree"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
| [Tree template](/template/tree)

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Solution:

- post order traverse
 
```python
def lowestCommonAncestor(root, p, q):
    if not root: return None
    if root == p or root == q: return root

    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)

    # p, q in different sub-tree
    if left and right: return root
    # p, q are not in either side
    if not left and not right: return None
    # p, q are on the same side
    return left or right  # left if left else right
```

- idea: for p, q, get the path from parent in a list/array, compare the last item in common
