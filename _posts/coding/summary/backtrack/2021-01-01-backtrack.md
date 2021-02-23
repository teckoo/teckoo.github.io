---
layout: leetcode
title: "Backtrack Template"
categories: [template]
---

# Template

[Explaination Details](./summary.md) | [Template Index](../template_list.md)

3 factors: 1: path, 2: choices, 3: end condition

```python

result = []
def backtrack(candidate_list, path):
    if meet_condition:
        result.add(list(path))
        return

    for choice in candidate_list:
        # make choice
        remove choice from candidate_list
        add choice to path
        backtrack(path, new_candidate_list)
        # restore choice
        remove choice from path
        add choice back to candidate_list

# 46. Permutations
# path: some items in track
# choices: nums, not containing items in track
# meet_condition: all items in track
def permute(nums):
    res = []
    def backtrack(nums, path):
        # meet condition
        if len(path) == len(nums):
            res.append(path)
            return
        for i in range(len(nums)):
            # use logic, no removing candidate from list
            if i in path: continue
            # make choice
            path.append(nums[i])
            backtrack(nums, path)
            # restore choice
            path.pop()
    track = []
    backtrack(nums, track)
    return res

# 78. Subset

# 77. combination

# 51. N Queens
# path: all rows < n have valid position for queens
# choice: every columns in current row
# meet condition: complete the last row
def backtrack(grid, row):
    # meet condition
    if row == len(grid): 
        make_solution()
        return
    for col in len(row):
        if not is_valid(grid, row, col): continue
        # make choice
        grid[row][col] = 'Q'
        backtrack(grid, row + 1)
        # restore choice
        grid[row][col] = '.'

# or games such as Sokudo, find one solution is good enough to return, 

    if meet_condition:
        make_solution()
        return True
    
        if backtrack(grid, row + 1):
            return True
    ...
    return False
    
```

LC:
* [46. Permutations](../../leetcode/46-permutations/description.md)
* [51. N queens](../../leetcode/51-n-queens/description.md)
* [797. All Paths From Source to Target](../../leetcode/797-all-paths-from-source-to-target/solution-backtrack.py)