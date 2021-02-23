# Cycle Sort

This pattern describes an interesting approach to deal with problems involving arrays containing numbers in a given range. For example, take the following problem:

```text
You are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means that some numbers will be missing. Find all the missing numbers.
```

The solution is to iterate the array one number at a time, and if the current number we are iterating is not at the correct index, we swap it with the number at its correct index. This way we will go through all numbers and place them in their correct indices, hence, sorting the whole array.

The trick is:
    We'll **not move** on to the next number until we have a correct number at 'start'.

```python
def find_missing_number(nums):
  i, n = 0, len(nums)
  while i < n:
    j = nums[i]
    if nums[i] < n and nums[i] != nums[j]:
      nums[i], nums[j] = nums[j], nums[i]  # swap
    else:
      i += 1

  # find the first number missing from its index, that will be our required number
  for i in range(n):
    if nums[i] != i:
      return i

  return n


def main():
  print(find_missing_number([4, 0, 3, 1]))
  print(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1])
```