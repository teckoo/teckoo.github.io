---
layout: leetcode
title: "701. Insert into a Binary Search Tree"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/insert-into-a-binary-search-tree/)
| [Tree template](/template/tree)

You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

Solution:

```python
def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
    if not root: return TreeNode(val)
    if val < root.val:
        root.left = self.insertIntoBST(root.left, val)
    elif val > root.val:
        root.right = self.insertIntoBST(root.right, val)
    return root
```

Iteration

```python
def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
    node = root
    while node:
        if val > node.val:
            # insert right leaf
            if not node.right:
                node.right = TreeNode(val)
                return root
            else:
                node = node.right
        else:
            # insert left leaf
            if not node.left:
                node.left = TreeNode(val)
                return root
            else:
                node = node.left
    return TreeNode(val)
```