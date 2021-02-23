# Backtrack

[Template](./template.md)

## Tricks

1. Generate grid

```python
grid = [['.'] * for _ in range(n)]
columns = [1] * n 
m = n * 2 -1  # number of diagonals
diagonals = [1] * m
antis = [1] * m
# check diagonals
diagonals[row + col] and antis[col - row + n-1]
# check columns
columns[col]
```

## LC problems

* [46 Permutation](../../leetcode/46-permutations/solution-backtrack.py)
* [51 N queens](../../leetcode/51-n-queens/solution.py)
* [22](../../leetcode//solution.py)
* [37](../../leetcode//solution.py)
* [77](../../leetcode//solution.py)
* [78](../../leetcode//solution.py)
