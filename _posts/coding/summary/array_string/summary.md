# Two pointers Summary

This is a very common scenario of using the two-pointer technique when you need:

```text
    One slow-runner and one fast-runner at the same time.
```

The key to solving this kind of problems is to

```text
    Determine the movement strategy for both pointers.
```

Similar to the previous scenario, you might sometimes need to sort the array before using the two-pointer technique. And you might need a greedy thought to determine your movement strategy.

LC: 27, 485, 487,

## Coding tricks

## get the columns of a 2-d array

```python
board = [
    ['a', 'b', 'c'],
    ['d', 'e', 'g']
]
for col in zip(*board):
    print(col)

>>>
('a', 'd')
('b', 'e')
('c', 'g')
```
