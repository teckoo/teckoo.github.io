# Subsets

A huge number of coding interview problems involve dealing with Permutations and Combinations of a given set of elements. This pattern describes an efficient Breadth First Search (BFS) approach to handle all these problems.

To generate all subsets of the given set, we can use the Breadth First Search (BFS) approach. We can start with an empty set, iterate through all numbers one-by-one, and add them to existing sets to create new subsets.

## Problems

### Generate subsets

Given a set with distinct elements, find all of its distinct subsets.

```text
Example 1:
Input: [1, 3]
Output: [], [1], [3], [1,3]

Example 2:
Input: [1, 5, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
```

Solution:

```python
def find_subsets(nums):
    subsets = []
    # start by adding an empty subset
    subsets.append([])
    for num in nums:
        n = len(subsets)
        for i in range(n):  # control the number of runs
            # otherwise, subsets will keep increasing
            s = list(subsets[i])  # make a new copy
            s.append(num)
            subsets.append(s)
    return subsets

def main():

  print("Here is the list of subsets: " + str(find_subsets([1, 3])))
  print("Here is the list of subsets: " + str(find_subsets([1, 5, 3])))

main()

```

```python
def subsets(nums: List[int]) -> List[List[int]]:
    n = len(nums)
    output = []

    for i in range(2**n, 2**(n+1)):
        # generate bitmask from 000 to 111
        bitmask = bin(i)[3:]  # skip '0b1', get the last 3 bits

        # append subset corresponding to that bitmask
        output.append([nums[j] for j in range(n) if bitmask[j]=='1'])

    return output
```

Time complexity: O(N*2^N)
Space complexity: O(2^N)
