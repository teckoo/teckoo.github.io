# Tree

- [Tree](#tree)
  - [Traverse Templates](#traverse-templates)
    - [Recursion traverse](#recursion-traverse)
    - [Iteration traverse](#iteration-traverse)
      - [BFS](#bfs)
      - [DFS](#dfs)
    - [Inorder traverse](#inorder-traverse)
    - [Morris Inorder Traversal](#morris-inorder-traversal)
  - [Search Templates](#search-templates)
    - [Recursion version](#recursion-version)
    - [Iteration version](#iteration-version)
  - [Insertion Templates](#insertion-templates)
    - [Recursion insertion](#recursion-insertion)
    - [Iteration insertion](#iteration-insertion)
  - [Deletion Templates](#deletion-templates)
  - [What is a Height-Balanced BST](#what-is-a-height-balanced-bst)

## Traverse Templates

### Recursion traverse

Generic format:

```python
nodes_sorted = []
def _inorder(root):
    if not root: return
    _inorder(root.left)
    nodes_sorted.append(root.val)
    _inorder(root.right)
```

Another simple version:

```python
def inorder(root):
    return inorder(root.left) + [root.val] + inorder(root.right) if root else []
```

Find succesor: one step right, and then left till you can

```python
def successor(root):
    root = root.right
    while root.left:
        root = root.left
    return root
```

Find predecessor: one step left, and then right till you can.

```python
def predecessor(root):
    root = root.left
    while root.right:
        root = root.right
    return root
```

Example for BST validation.

```python
def isValidBST(self, root: TreeNode) -> bool:
    def is_valid(root, lower, upper):
        if root is None: return True
        if root.val <= lower or root.val >= upper:
            return False

        return is_valid(root.left, lower, root.val) \
                and is_valid(root.right, root.val, upper)

    if root is None: return True

    return is_valid(root, float("-inf"), float("inf"))
```

### Iteration traverse

The time complexity is O(N), and the space complexity is O(N).

#### BFS

```python
def traverse(root):
    result = {}
    queue = deque([(root, 0)])
    while queue:
        node, level = queue.popleft()
        queue.append((node.left, level + 1))
        queue.append((node.right, level + 1))
        result.setdefault(level, []).append(node.val)
    return result
```

#### DFS

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

### Inorder traverse

For BFS, use queue; while for DFS, use stack.

![Tree Traversal order](tree_traverse.png)

```python
def isValidBST(self, root: TreeNode) -> bool:
    stack, inorder = [], float("-inf")

    while stack or root:
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        # only next line is not in generic
        if root.val <= inorder: return False

        inorder = root.val
        root = root.right
    return True
```

### Morris Inorder Traversal

Morris inorder traversal is simple: to use no space but to traverse the tree.
The idea of Morris algorithm is to set the temporary link between the node and its predecessor: `predecessor.right = root`. So one starts from the node, computes its predecessor and verifies if the link is present.

[Leetcode: inorder traversal](https://leetcode.com/articles/recover-binary-search-tree/)

* Traverse: LC 98, 285, 510

## Search Templates

### Recursion version

```python
def searchBST(self, root: TreeNode, val: int) -> TreeNode:
    if not root: return None
    if root.val == val: return root
    elif val < root.val: return self.searchBST(root.left, val)
    return self.searchBST(root.right, val)
```

### Iteration version

```python
def searchBST(self, root: TreeNode, val: int) -> TreeNode:
    if not root: return None
    while root and root.val != val:
        if val < root.val:
            root = root.left
        else:
            root = root.right
    return root
```

LC Problems

* Search: LC 700

## Insertion Templates

### Recursion insertion

```python
class Solution:
    def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
        if not root: return TreeNode(val)
        if val < root.val:
            root.left = self.insertIntoBST(root.left, val)
        else:
            root.right = self.insertIntoBST(root.right, val)
        return root
```

### Iteration insertion

```python
class Solution:
    def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
        node = root
        while node:
            # insert into the right subtree
            if val > node.val:
                # insert right now
                if not node.right:
                    node.right = TreeNode(val)
                    return root
                else:
                    node = node.right
            # insert into the left subtree
            else:
                # insert right now
                if not node.left:
                    node.left = TreeNode(val)
                    return root
                else:
                    node = node.left
        return TreeNode(val)
```

## Deletion Templates

* <https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/141/basic-operations-in-a-bst/1025/>
* <https://leetcode.com/problems/delete-node-in-a-bst/solution/>

```python

```

## What is a Height-Balanced BST

Terminology used in trees:

* Depth of node - the number of edges from the tree's root node to the node
* Height of node - the number of edges on the longest path between that node and a leaf
* Height of Tree - the height of its root node
