# Bitwise XOR

```text
A   B   A ^ B (XOR)
0   0   0
0   1   1
1   0   1
1   1   0
```

Important properties of XOR to remember #
Following are some important properties of XOR to remember:

* Taking XOR of a number with itself returns 0, e.g.,

    1 ^ 1 = 0
    29 ^ 29 = 0

* Taking XOR of a number with 0 returns the same number, e.g.,

    1 ^ 0 = 1
    31 ^ 0 = 31

* XOR is Associative & Commutative, which means:

    (a ^ b) ^ c = a ^ (b ^ c)
    a ^ b = b ^ a

AND operation

```text
A   B   A & B (AND)
0   0   0
0   1   0
1   0   0
1   1   1
```

Use AND operation, we can find any bit with "1" or "0",.

```python
def find_rightmost_1(number):
    if not number: return 0
    rightmost_set_bit = 1
    while (rightmost_set_bit & number) == 0:
        rightmost_set_bit = rightmost_set_bit << 1
    return rightmost_set_bit

def find_rightmost_0(number):
    if not number: return 0
    cnt = 0
    while (number & 1) == 1:
        number >>= 1
        cnt += 1
    return cnt  # or return 1 << cnt

    # result for reference
    (0, 0), (1, 1), (2, 0), (3, 2), (4, 0),
    (5, 1), (6, 0), (7, 3), (8, 0), (9, 1),
```

This can be used as a trick to separate numbers into two groups based this bit. E.g.

```python
    num1, num2 = 0, 0

    for num in nums:
        if (num & rightmost_set_bit) != 0:  # the bit is set
            num1 ^= num
        else:  # the bit is not set
            num2 ^= num
```

It is surprising to know the approaches that the XOR operator `^` enables us to solve certain problems. For example, let’s take a look at the following problem:

```text
Given an array of n-1 integers in the range from 1 to n, find the one number that is missing from the array.
```

Example:

```text
Input: 1, 5, 2, 6, 4
Answer: 3
```

Problem? If n is too large, the result might be overflow!
Check the solution in `find_missing_number.py`.

# Problems

## Single number

In a non-empty array of integers, every number appears twice except for one, find that single number.

```text
Example 1:

Input: 1, 4, 2, 1, 3, 2, 3
Output: 4

Example 2:

Input: 7, 9, 7
Output: 9
```

Solution:

```python
def find_single_number(arr):
  num = 0
  for i in arr:
      num ^= i
  return num

def main():
    arr = [1, 4, 2, 1, 3, 2, 3]
    print(find_single_number(arr))

main()
```

## Two missing numbers

In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once. Find the two numbers that appear only once.

```text
Example 1:

Input: [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]
Output: [4, 6]

Example 2:

Input: [2, 1, 3, 2]
Output: [1, 3]
```

Solution: The trick is to find a different bit "1" for the two numbers n1 and n2. Then split the numbers into two groups to put n1 and n2 into two groups.

```python
def find_single_numbers(nums):
    # get the XOR of the all the numbers
    n1xn2 = 0
    for num in nums:
        n1xn2 ^= num

    # get the rightmost bit that is '1'
    rightmost_set_bit = 1
    while (rightmost_set_bit & n1xn2) == 0:
        rightmost_set_bit = rightmost_set_bit << 1
    num1, num2 = 0, 0

    for num in nums:
        if (num & rightmost_set_bit) != 0:  # the bit is set
            num1 ^= num
        else:  # the bit is not set
            num2 ^= num

    return [num1, num2]


def main():
    print('Single numbers are:' +
          str(find_single_numbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])))
    print('Single numbers are:' + str(find_single_numbers([2, 1, 3, 2])))


main()
```

## Complement

For a given positive number N in base-10, return the complement of its binary representation as a base-10 integer.

```text
Example 1:

Input: 8
Output: 7
Explanation: 8 is 1000 in binary, its complement is 0111 in binary, which is 7 in base-10.
Example 2:

Input: 10
Output: 5
Explanation: 10 is 1010 in binary, its complement is 0101 in binary, which is 5 in base-10.
```