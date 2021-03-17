---
layout: leetcode
title: "297. Serialize and Deserialize Binary Tree" categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
| [Tree template](/template/tree)

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Solution:

Time: O(N)

- preorder, first node is root node.

```python
# Serialization 
class Codec:
    def serialize(self, root):
        """ Encodes a tree to a single string.
        :type root: TreeNode
        :rtype: str
        """
        def traverse(root, result):
            """ a recursive helper function for the serialize() function."""
            # check base case
            if root is None:
                result += 'None,'
            else:
                result += str(root.val) + ','
                result = traverse(root.left, result)
                result = traverse(root.right, result)
            return result
        
        return traverse(root, '')

# Deserialization 
class Codec:

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        :type data: str
        :rtype: TreeNode
        """
        def rdeserialize(l):
            """ a recursive helper function for deserialization."""
            if not l: return None
                
            val = l.pop(0)
            if val == 'None': return None
            root = TreeNode(val)
            root.left = rdeserialize(l)
            root.right = rdeserialize(l)
            return root

        data_list = data.split(',')
        root = rdeserialize(data_list)
        return root
```

- Post order, serialize is simple, deserialize is tricky
  
```python
# Serialization 
class Codec:
    def serialize(self, root):
        """ Encodes a tree to a single string.
        :type root: TreeNode
        :rtype: str
        """
        def traverse(root, result):
            """ a recursive helper function for the serialize() function."""
            # check base case
            if root is None:
                result += 'None,'
            else:
                result = traverse(root.left, result)
                result = traverse(root.right, result)
                result += str(root.val) + ','
            return result
        
        return traverse(root, '')

# Deserialization 
class Codec:
    def deserialize(self, data):
        """Decodes your encoded data to tree.
        :type data: str
        :rtype: TreeNode
        """
        def rdeserialize(l):
            """ a recursive helper function for deserialization."""
            if not l: return None
                
            val = l.pop(-1)
            if val == 'None': return None
            root = TreeNode(val)
            root.right = rdeserialize(l)  # RIGHT first
            root.left = rdeserialize(l)
            return root

        data_list = data.split(',')
        root = rdeserialize(data_list)
        return root

```

- BFS, level traverse

```python
def serialize(root):
    if not root: return None
    res = ""
    q = [root]
    while q:
        cur = q.pop(0)
        if not cur:
            res += "None,"
            continue
        res += f"{cur.val},"
        q.append(cur.left)
        q.append(cur.right)
    return res

def deserialize(data):
    if not data: return None
    nodes = data.split(',')
    root = TreeNode(nodes[0])
    q = [root]
    for i in range(1, len(nodes)):
        cur = q.pop(0)
        left = nodes[i]
        if left == 'None':
            cur.left = None
        else:
            cur.left = TreeNode(left)
            q.append(cur.left)
        i += 1

        right = nodes[i]
        if right == 'None':
            cur.right = None
        else:
            cur.right = TreeNode(right)
            q.append(cur.right)
        i += 1
    return root
```
