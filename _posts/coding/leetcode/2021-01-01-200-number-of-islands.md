---
layout: leetcode
title: "200. Number of Islands"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/number-of-islands/) | [Union Find template](/template/union_find)

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 
```
Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

# Solution

## DFS

T: O(m*n), S:O(m*n)

```python
def numIslands(self, grid: List[List[str]]) -> int:
  if not grid: return 0
  m, n = len(grid), len(grid[0])

  def dfs(r, c):
    if r < 0 or c < 0 or r >= m or c >= n or grid[r][c] != '1':
      return
    grid[r][c] = '0'
    for x, y in ((r-1, c), (r+1, c), (r, c-1), (r, c+1)):
      dfs(x, y)

  res = 0
  for i in range(m):
    for j in range(n):
      if grid[i][j] == '1':
        dfs(i, j)
        res += 1
  return res
```

## BFS

T: O(m*n), S:O(m*n)

```python
def numIslands(self, grid: List[List[str]]) -> int:
  if not grid: return 0
  m, n = len(grid), len(grid[0])

  def bfs(row, col):
    q = collections.deque([(row, col)])
    while q:
      r, c = q.popleft()
      if r < 0 or c < 0 or r >= m or c >= n or grid[r][c] != '1':
        continue
      grid[i][j] = '0'
      for x, y in (r-1, c), (r+1, c), (r, c-1), (r, c+1):
        q.append((x, y))

  res = 0
  for i in range(m):
    for j in range(n):
      if grid[i][j] == '1':
        res += 1
        grid[i][j] == '0':
        bfs(i, j)
  return res
```

## Union Find (Disjoint Set)

```python
def numIslands(self, grid):
  if not grid: return 0
  rows, cols = len(grid), len(grid[0])

  self.count = sum(grid[i][j] == '1' 
                    for i in range(rows) for j in range(cols))
  parent = list(range(rows * cols))  # set parent to itself
  rank = [1] * (rows * cols)

  def find(x: int) -> int:
    # This is called path compression. 
    # every call to `find` will do path compression,
    # eventuall it makes the tree height <= 3, then 
    # makes this method to be O(1).
    while parent[x] != x:
      parent[x] = parent[parent[x]]
      x = parent[x]
    return parent[x]

  def union(x, y):
    xroot, yroot = find(x), find(y)
    if xroot == yroot: return
    # merge the smaller one into the bigger to make it balance
    if rank[xroot] < rank[yroot]:
      # if xroot is smaller, switch x and y
      xroot, yroot = yroot, xroot

    parent[yroot] = xroot  # make the bigger one as new parent
    rank[xroot] += rank[yroot]
    self.count -= 1 
  
  # actual iteration
  for i in range(row):
    for j in range(col):
      if grid[i][j] == '0': continue
      index = i * col + j

      if j < col - 1 and grid[i][j+1] == '1':
        # merge the right
        union(index, index + 1)
      if i < row - 1 and grid[i+1][j] == '1':
        # merge the below
        union(index, index + col)

  return self.count
```