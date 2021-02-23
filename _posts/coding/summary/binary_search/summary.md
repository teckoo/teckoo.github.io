# Terminology used in Binary Search

## Terms

* Target - the value that you are searching for
* Index - the current location that you are searching
* Left, Right - the indicies from which we use to maintain our search Space
* Mid - the index that we use to apply a condition to determine if we should search left or right

# Template

This article provides a very generic template that can solve many problems. It seems easier than the templates explained in LC Explore section.
<https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems>

```python
def binary_search(array) -> int:
    def condition(value) -> bool:
        pass

    left, right = 0, len(array)
    while left < right:
        mid = left + (right - left) // 2
        if condition(mid):
            right = mid
        else:
            left = mid + 1
    return left
```

LC: 278, 69, 35, 1011, 410, 875, 1482, 668, 719, 1201, 1283,

## Template 1

Template #1 is used to search for an element or condition which can be determined by accessing a single index in the array.

```python
def search(nums: List[int], target: int) -> int:
    if nums is None or len(nums)==0: return -1
    l, r = 0, len(nums) - 1
    while l <= r:
        m = (l + r) // 2
        if nums[m] < target:
            l = m + 1
        elif nums[m] > target:
            r = m - 1
        else:  # find target
            return m
    # End condition: left > right pointer
    return -1
```

LC: 69, 374, 33

## Template 2

Template #2 is an advanced form of Binary Search. It is used to search for an element or condition which requires accessing the current index and its immediate right neighbor's index in the array.

```python
def binarySearch(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if nums is None or len(nums) == 0:
        return -1

    left, right = 0, len(nums)  # no -1
    while left < right:  # no equal condition, ow, it might loop forever
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid

    # Post-processing:
    # End Condition: left == right
    if left != len(nums) and nums[left] == target:
        return left
    return -1
```

### Distinguishing Syntax

* Initial Condition: left = 0, right = length
* Termination: left == right
* Searching Left: right = mid
* Searching Right: left = mid+1

### Key Attributes

* An advanced way to implement Binary Search.
* Search Condition needs to access element's immediate right neighbor
* Use element's right neighbor to determine if condition is met and decide whether to go left or right
* Gurantees Search Space is at least 2 in size at each step
* Post-processing required. Loop/Recursion ends when you have 1 element left. Need to assess if the remaining element meets the condition.

LC:
278. First bad version - somehow my template 1 solution works just fine. 
162
153

## Template 3

Template #3 is another unique form of Binary Search. It is used to search for an element or condition which requires accessing the current index and its immediate left and right neighbor's index in the array.

```python
def binarySearch(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if len(nums) == 0:
        return -1

    left, right = 0, len(nums) - 1
    while left + 1 < right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid
        else:
            right = mid

    # Post-processing:
    # End Condition: left + 1 == right
    if nums[left] == target: return left
    if nums[right] == target: return right
    return -1
```

### Key Attributes

* An alternative way to implement Binary Search
* Search Condition needs to access element's immediate left and right neighbors
* Use element's neighbors to determine if condition is met and decide whether to go left or right
* Gurantees Search Space is at least 3 in size at each step
* Post-processing required. Loop/Recursion ends when you have 2 elements left. Need to assess if the remaining elements meet the condition.

### Distinguishing Syntax

* Initial Condition: left = 0, right = length-1
* Termination: left + 1 == right
* Searching Left: right = mid
* Searching Right: left = mid
