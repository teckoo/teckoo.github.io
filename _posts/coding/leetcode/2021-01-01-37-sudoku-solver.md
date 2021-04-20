---
layout: leetcode
title: "37: Sudoku Solver"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/sudoku-solver/)
| [Backtrack template](/template/backtrack)

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

```
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]]

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit or '.'.
It is guaranteed that the input board has only one solution.
```

# Solution

* Backtrack, Time: O(9^M), Space: O(N)

```python
# 判断 board[i][j] 是否可以填入 n
def isValid(board, r, c, n):
  for i in range(9):
    if (board[r][i] == n) return False
    if (board[i][c] == n) return False
    # 判断 3x3 方框是否存在重复
    if board[r//3*3 + i//3][c//3*3 + i%3] == n:
      return False
  }
  return True

def backtrack(board, i, j):
  m, n = 9, 9
  if j == n:
    # 穷举完最后一列, 换到下一行
    return backtrack(board, i + 1, 0)
  if i == m:
    # 找到一个可行解，触发 base case
    return True

  if board[i][j] != '.':
    # 有预设数字，skip
    return backtrack(board, i, j + 1)

  for ch in '123456789':
    if not isValid(board, i, j, ch):
      continue

    board[i][j] = ch
    # 如果找到一个可行解，立即结束
    if (backtrack(board, i, j + 1)) {
        return True;
    }
    board[i][j] = '.'
  # 穷举完 1~9，依然没有找到可行解，此路不通
  return False
```
