---
layout: leetcode
title: "450. Delete Node in a BST"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/delete-node-in-a-bst/)
| [Tree template](/template/tree)

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Follow up: Can you solve it with time complexity O(height of tree)?

Solution:

```python
  def successor(self, root):
    root = root.right
    while root.left:
      root = root.left
    return root.val

  def predecessor(self, root):
    root = root.left
    while root.right:
      root = root.right
    return root.val

  def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
    if not root:
      return None

    # delete from the right subtree
    if key > root.val:
      root.right = self.deleteNode(root.right, key)
    elif key < root.val:
      root.left = self.deleteNode(root.left, key)
    else: # found the node
      if not (root.left or root.right):
        # the node is a leaf
        root = None
      elif root.right:
        root.val = self.successor(root)
        root.right = self.deleteNode(root.right, root.val)
      else:
        root.val = self.predecessor(root)
        root.left = self.deleteNode(root.left, root.val)
    return root
```
