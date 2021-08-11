---
layout: leetcode
title: "207. Course Schedule"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/course-schedule/) | [Topo_sort Template](/template/topo_sort)

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 
```
Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false

```

# Solution
Similar to DFS graph search, avoid loop.

Time: O(E+V), Space: O(E+V)

```python
def canFinish(self, numCourses, preq):
    graph = [[] for _ in xrange(numCourses)]
    visit = [0 for _ in xrange(numCourses)]
    # build graph
    for x, y in preq:
        graph[x].append(y)

    def dfs(i):
        if visit[i] == -1: # detect a loop
            return False
        if visit[i] == 1:  # already visited, skip
            return True
        # backtrack, lable it as being visited
        visit[i] = -1
        # visit all neighbors 
        for j in graph[i]:
            if not dfs(j):
                return False
        # restore, mark it visited
        visit[i] = 1
        return True
    for i in xrange(numCourses):
        if not dfs(i):
            return False
    return True
```

BFS 

```python
def canFinish(self, n, preq):
  graph = [[] for _ in range(n)]
  degree = [0] * n
  for _to, _from in preq:
    graph[_from].append(_to)
    degree[_to] += 1
  bfs = [i for i in range(n) if degree[i] == 0]
  for i in bfs:
    for j in graph[i]:
      degree[j] -= 1
      if degree[j] == 0:
        bfs.append(j)
  return len(bfs) == n
```