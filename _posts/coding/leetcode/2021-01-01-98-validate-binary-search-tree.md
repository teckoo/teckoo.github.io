---
layout: leetcode
title: "98. Validate Binary Search Tree"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/validate-binary-search-tree/)
| [Tree template](/template/tree)

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Solution:

* preorder recursion
 
```python
def isValidBST(self, root: TreeNode) -> bool:
    def is_valid(root, low, high):
        if not root: return True
        if root.val <= low or root.val >= high:
            return False
        return is_valid(root.left, low, root.val) \
            and is_valid(root.right, root.val, high)
    return is_valid(root, float("-inf"), float("inf"))
```

* follow up: if asked to write iteration version

```python
def isValidBST(self, root: TreeNode) -> bool:
    if root is None: return True

    stack = [(root, float("-inf"), float("inf")), ]
    while stack:
        root, lower, upper = stack.pop()
        if not root:
            continue
        val = root.val
        if val <= lower or val >= upper:
            return False
        stack.append((root.left, lower, val))
        stack.append((root.right, val, upper))
    return True
```        

# inorder is an idea of sorting traversal.

```python
def isValidBST(self, root: TreeNode) -> bool:
    stack, inorder = [], float("-inf")

    while stack or root:
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        # if next element in inorder traversal is smaller
        # then it is not BST
        if root.val <= inorder: return False
        inorder = root.val
        root = root.right
    return True
```