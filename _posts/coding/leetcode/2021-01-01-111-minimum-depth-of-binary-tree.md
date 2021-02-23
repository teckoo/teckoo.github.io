---
layout: leetcode
title: "111. Minimum Depth of Binary Tree"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
| [BFS template](/template/bfs)

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Solution: 

* BFS level traverse is generally faster than DFS
* but use more space O(N), leaf level is up to N/2
* DFS space is O(logn) for the tree depth

```python
def minDepth(self, root: TreeNode) -> int:
    if not root: return 0 
    que = collections.deque()
    que.append(root)
    depth = 1  # root init depth
    while que:
        sz = len(que)  # current level size
        for _ in range(sz):
            cur = que.popleft()
            if not cur.left and not cur.right:
                # find a leaf
                return depth
            if cur.left:
                # print(f"add val={cur.left.val}, {depth}")
                que.append(cur.left)
            if cur.right:
                # print(f"add val={cur.right.val}, {depth}")
                que.append(cur.right)
        depth += 1
    return depth
```
