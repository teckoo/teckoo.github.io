# Two pointers

In problems where we deal with sorted arrays (or LinkedLists) and need to find a set of elements that fulfill certain constraints, the Two Pointers approach becomes quite useful. The set of elements could be a pair, a triplet or even a subarray.

Time complexity can reduce from O(N^2) to O(N).

## Problems

* Given an array of **sorted numbers** and a target sum, find a pair in the array whose sum is equal to the given target.

* Given an array of **sorted numbers**, remove all duplicates from it. You should **not use any extra space**; after removing the duplicates **in-place** return the length of the subarray that has no duplicate in it.
Example:

```text
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
```

* Given a sorted array, create a new array containing **squares of all the number** of the input array in the **sorted order**. Example:

```bash
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
```

## LC problems

19, 141, 142, 167, 344
