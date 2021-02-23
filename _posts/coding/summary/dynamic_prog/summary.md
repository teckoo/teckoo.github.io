# What is Dynamic Programming? 
Dynamic Programming (DP) is an algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems and utilizing the fact that the optimal solution to the overall problem depends upon the optimal solution to its subproblems.

DP - for beginners

https://leetcode.com/discuss/general-discussion/662866/dp-for-beginners-problems-patterns-sample-solutions

## Characteristics of Dynamic Programming 
1. Overlapping Subproblems 
2. Optimal Substructure Property 
Any problem has optimal substructure property if its overall optimal solution can be constructed from the optimal solutions of its subproblems. 



# Dynamic Programming Methods #

## 1. Top-down with Memoization 
In this approach, we try to solve the bigger problem by recursively finding the solution to smaller sub-problems. Whenever we solve a sub-problem, we cache its result so that we don’t end up solving it repeatedly if it’s called multiple times. Instead, we can just return the saved result. This technique of storing the results of already solved subproblems is called **Memoization**.

## 2. Bottom-up with Tabulation 
Tabulation is the opposite of the top-down approach and avoids recursion. In this approach, we solve the problem “bottom-up” (i.e. by solving all the related sub-problems first). This is typically done by filling up an n-dimensional table. Based on the results in the table, the solution to the top/original problem is then computed.

We will always start with a brute-force recursive solution, which is the best way to start solving any DP problem! Once we have a recursive solution then we will apply Memoization and Tabulation techniques.

# Patterns

## 0/1 Knapsack
Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack which has a capacity ‘C’. The goal is to get the maximum profit from the items in the knapsack. Each item can only be selected once, as we don’t have multiple quantities of any item.

### Basic Solution 
```
for each item 'i' 
  create a new set which INCLUDES item 'i' if the total weight does not exceed the capacity, and 
     recursively process the remaining capacity and items
  create a new set WITHOUT item 'i', and recursively process the remaining items 
return the set from the above two sets with higher profit 
```

Here is a python solution:
```python
def solve_knapsack(profits, weights, capacity):
  return knapsack_recursive(profits, weights, capacity, 0)

def knapsack_recursive(profits, weights, capacity, currentIndex):
  # base checks
  if capacity <= 0 or currentIndex >= len(profits):
    return 0

  # recursive call after choosing the element at the currentIndex
  # if the weight of the element at currentIndex exceeds the capacity, we  shouldn't process this
  profit1 = 0
  if weights[currentIndex] <= capacity:
    profit1 = profits[currentIndex] + knapsack_recursive(
      profits, weights, capacity - weights[currentIndex], currentIndex + 1)

  # recursive call after excluding the element at the currentIndex
  profit2 = knapsack_recursive(profits, weights, capacity, currentIndex + 1)

  return max(profit1, profit2)

def main():
  print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 7))
  print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 6))

main()
```

The time complexity: O(2^n)

The space complexity: O(n)

### Top-down Dynamic Programming with Memoization
`c:4, i=3` has overlapping, therefore it can be solved in DP.

```python
def solve_knapsack(profits, weights, capacity):
  # create a two dimensional array for Memoization, each element is initialized to '-1'
  dp = [[-1 for x in range(capacity+1)] for y in range(len(profits))]
  return knapsack_recursive(dp, profits, weights, capacity, 0)


def knapsack_recursive(dp, profits, weights, capacity, currentIndex):

  # base checks
  if capacity <= 0 or currentIndex >= len(profits):
    return 0

  # if we have already solved a similar problem, return the result from memory
  if dp[currentIndex][capacity] != -1:
    return dp[currentIndex][capacity]

  # recursive call after choosing the element at the currentIndex
  # if the weight of the element at currentIndex exceeds the capacity, we
  # shouldn't process this
  profit1 = 0
  if weights[currentIndex] <= capacity:
    profit1 = profits[currentIndex] + knapsack_recursive(
      dp, profits, weights, capacity - weights[currentIndex], currentIndex + 1)

  # recursive call after excluding the element at the currentIndex
  profit2 = knapsack_recursive(
    dp, profits, weights, capacity, currentIndex + 1)

  dp[currentIndex][capacity] = max(profit1, profit2)
  return dp[currentIndex][capacity]


def main():
  print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 7))
  print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 6))


main()
```
* Time complexity will be O(N*C).
* Space complexity will be O(N*C) too.

### Bottom-up Dynamic Programming
The optimal solution will be maximum of the above two values:
```python
dp[i][c] = max (dp[i-1][c], profit[i] + dp[i-1][c-weight[i]]) 
```

Python implementation
```python
def solve_knapsack(profits, weights, capacity):
  # basic checks
  n = len(profits)
  if capacity <= 0 or n == 0 or len(weights) != n:
    return 0

  dp = [[0 for x in range(capacity+1)] for y in range(n)]

  # populate the capacity = 0 columns, with '0' capacity we have '0' profit
  for i in range(0, n):
    dp[i][0] = 0

  # if we have only one weight, we will take it if it is not more than the capacity
  for c in range(0, capacity+1):
    if weights[0] <= c:
      dp[0][c] = profits[0]

  # process all sub-arrays for all the capacities
  for i in range(1, n):
    for c in range(1, capacity+1):
      profit1, profit2 = 0, 0
      # include the item, if it is not more than the capacity
      if weights[i] <= c:
        profit1 = profits[i] + dp[i - 1][c - weights[i]]
      # exclude the item
      profit2 = dp[i - 1][c]
      # take maximum
      dp[i][c] = max(profit1, profit2)

  # maximum profit will be at the bottom-right corner.
  return dp[n - 1][capacity]

def main():
  print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 5))
  print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 6))
  print(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 7))

main()
```

Time and space complexity are both O(N*C). 

Even better solution with only O(C) space: 
```python
def solve_knapsack(profits, weights, capacity):
  # basic checks
  n = len(profits)
  if capacity <= 0 or n == 0 or len(weights) != n:
    return 0

  # we only need one previous row to find the optimal solution, overall we need '2' rows
  # the above solution is similar to the previous solution, the only difference is that
  # we use `i % 2` instead if `i` and `(i-1) % 2` instead if `i-1`
  dp = [[0 for x in range(capacity+1)] for y in range(2)]

  # if we have only one weight, we will take it if it is not more than the capacity
  for c in range(0, capacity+1):
    if weights[0] <= c:
      dp[0][c] = dp[1][c] = profits[0]

  # process all sub-arrays for all the capacities
  for i in range(1, n):
    for c in range(0, capacity+1):
      profit1, profit2 = 0, 0
      # include the item, if it is not more than the capacity
      if weights[i] <= c:
        profit1 = profits[i] + dp[(i - 1) % 2][c - weights[i]]
      # exclude the item
      profit2 = dp[(i - 1) % 2][c]
      # take maximum
      dp[i % 2][c] = max(profit1, profit2)

  return dp[(n - 1) % 2][capacity]


def main():
  print("Total knapsack profit: " +
        str(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 7)))
  print("Total knapsack profit: " +
        str(solve_knapsack([1, 6, 10, 16], [1, 2, 3, 5], 6)))


main()
```


## Unbounded Knapsack
The only difference between the 0/1 Knapsack problem and this problem is that we are allowed to use an unlimited quantity of an item.

### Problem Statement 
Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C’. We can assume an infinite supply of item quantities; therefore, each item can be selected multiple times.

### Basic Solution
```
for each item 'i' 
  create a new set which includes one quantity of item 'i' if it does not exceed the capacity, and 
     recursively call to process all items 
  create a new set without item 'i', and recursively process the remaining items 
return the set from the above two sets with higher profit 
```

Python implementation:

```python
def solve_knapsack(profits, weights, capacity):
  return solve_knapsack_recursive(profits, weights, capacity, 0)


def solve_knapsack_recursive(profits, weights, capacity, currentIndex):
  n = len(profits)
  # base checks
  if capacity <= 0 or n == 0 or len(weights) != n or currentIndex >= n:
    return 0

  # recursive call after choosing the items at the currentIndex, note that we recursive call on all
  # items as we did not increment currentIndex
  profit1 = 0
  if weights[currentIndex] <= capacity:
    profit1 = profits[currentIndex] + solve_knapsack_recursive(
      profits, weights, capacity - weights[currentIndex], currentIndex)

  # recursive call after excluding the element at the currentIndex
  profit2 = solve_knapsack_recursive(
    profits, weights, capacity, currentIndex + 1)

  return max(profit1, profit2)

def main():
  print(solve_knapsack([15, 50, 60, 90], [1, 3, 4, 5], 8))
  print(solve_knapsack([15, 50, 60, 90], [1, 3, 4, 5], 6))

main()
```
The time complexity is exponential O(2^{N+C}), where ‘N’ represents the total number of items. 

The space complexity will be O(N+C)

### Top-down Dynamic Programming with Memoization 
We will be using a two-dimensional array to store the results of solved sub-problems. We need to store results for every sub-array and for every possible capacity.

```python
def solve_knapsack(profits, weights, capacity):
  dp = [[-1 for _ in range(capacity+1)] for _ in range(len(profits))]
  return solve_knapsack_recursive(dp, profits, weights, capacity, 0)


def solve_knapsack_recursive(dp, profits, weights, capacity, currentIndex):
  n = len(profits)
  # base checks
  if capacity <= 0 or n == 0 or len(weights) != n or currentIndex >= n:
    return 0

  # check if we have not already processed a similar sub-problem
  if dp[currentIndex][capacity] == -1:
    # recursive call after choosing the items at the currentIndex, note that we
    # recursive call on all items as we did not increment currentIndex
    profit1 = 0
    if weights[currentIndex] <= capacity:
      profit1 = profits[currentIndex] + solve_knapsack_recursive(
        dp, profits, weights, capacity - weights[currentIndex], currentIndex)

    # recursive call after excluding the element at the currentIndex
    profit2 = solve_knapsack_recursive(
      dp, profits, weights, capacity, currentIndex + 1)

    dp[currentIndex][capacity] = max(profit1, profit2)

  return dp[currentIndex][capacity]


def main():
  print(solve_knapsack([15, 50, 60, 90], [1, 3, 4, 5], 8))
  print(solve_knapsack([15, 50, 60, 90], [1, 3, 4, 5], 6))


main()
```

The time complexity is O(N*C) 

The space complexity is O(N*C)

### Bottom-up Dynamic Programming
So for every possible capacity ‘c’ (0 <= c <= capacity), we have two options:

Exclude the item. In this case, we will take whatever profit we get from the sub-array excluding this item: dp[index-1][c]
Include the item if its weight is not more than the ‘c’. In this case, we include its profit plus whatever profit we get from the remaining capacity: profit[index] + dp[index][c-weight[index]]
Finally, we have to take the maximum of the above two values:

    dp[index][c] = max (dp[index-1][c], profit[index] + dp[index][c-weight[index]]) 

Python solutiopn:
```python
def solve_knapsack(profits, weights, capacity):
  n = len(profits)
  # base checks
  if capacity <= 0 or n == 0 or len(weights) != n:
    return 0

  dp = [[-1 for _ in range(capacity+1)] for _ in range(len(profits))]

  # populate the capacity=0 columns
  for i in range(n):
    dp[i][0] = 0

  # process all sub-arrays for all capacities
  for i in range(n):
    for c in range(1, capacity+1):
      profit1, profit2 = 0, 0
      if weights[i] <= c:
        profit1 = profits[i] + dp[i][c - weights[i]]
      if i > 0:
        profit2 = dp[i - 1][c]
      dp[i][c] = profit1 if profit1 > profit2 else profit2

  # maximum profit will be in the bottom-right corner.
  return dp[n - 1][capacity]


def main():
  print(solve_knapsack([15, 50, 60, 90], [1, 3, 4, 5], 8))
  print(solve_knapsack([15, 50, 60, 90], [1, 3, 4, 5], 6))


main()
```
The time complexity is O(N*C) 

The space complexity is O(N*C)

More questions: 
* rod cutting
* coin change
* minimum coin change
* maximum ribbon cut

## Fibonacci Numbers
Mathematically we can define the Fibonacci numbers as:

    Fib(n) = Fib(n-1) + Fib(n-2), for n > 1
    Given that: Fib(0) = 0, and Fib(1) = 1

### Basic Solution 
```python
def calculateFibonacci(n):
  if n < 2:
    return n

  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2)


def main():
  print("5th Fibonacci is ---> " + str(calculateFibonacci(5)))
  print("6th Fibonacci is ---> " + str(calculateFibonacci(6)))
  print("7th Fibonacci is ---> " + str(calculateFibonacci(7)))


main()
```
Time complexity is O(2^n). 

Space complexity is O(n).

## Top-down Dynamic Programming with Memoization
```python
def calculateFibonacci(n):
  memoize = [-1 for x in range(n+1)]
  return calculateFibonacciRecur(memoize, n)


def calculateFibonacciRecur(memoize, n):
  if n < 2:
    return n

  # if we have already solved this subproblem, simply return the result from the cache
  if memoize[n] >= 0:
    return memoize[n]

  memoize[n] = calculateFibonacciRecur(
    memoize, n - 1) + calculateFibonacciRecur(memoize, n - 2)
  return memoize[n]


def main():
  print("5th Fibonacci is ---> " + str(calculateFibonacci(5)))
  print("6th Fibonacci is ---> " + str(calculateFibonacci(6)))
  print("7th Fibonacci is ---> " + str(calculateFibonacci(7)))


main()
```
Time complexity is O(n). 

Space complexity is O(n).

### Bottom-up Dynamic Programming
```python
def calculateFibonacci(n):
  dp = [0, 1]
  for i in range(2, n + 1):
    dp.append(dp[i - 1] + dp[i - 2])

  return dp[n]


def main():
  print("5th Fibonacci is ---> " + str(calculateFibonacci(5)))
  print("6th Fibonacci is ---> " + str(calculateFibonacci(6)))
  print("7th Fibonacci is ---> " + str(calculateFibonacci(7)))


main()
```
Time complexity is O(n). 

Space complexity is O(n).

We can optimize the space to reach O(1). 

```python 
def calculateFibonacci(n):
  if n < 2:
    return n

  n1, n2, temp = 0, 1, 0
  for i in range(2, n + 1):
    temp = n1 + n2
    n1 = n2
    n2 = temp

  return n2


def main():
  print("5th Fibonacci is ---> " + str(calculateFibonacci(5)))
  print("6th Fibonacci is ---> " + str(calculateFibonacci(6)))
  print("7th Fibonacci is ---> " + str(calculateFibonacci(7)))


main()
```

## Palindromic Subsequence
### Problem Statement 
Given a sequence, find the length of its Longest Palindromic Subsequence (LPS). In a palindromic subsequence, elements read the same backward and forward.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

Example 1:

    Input: "abdbca"
    Output: 5
    Explanation: LPS is "abdba". remove 'c' from the sequence.

### Basic Solution 
We can start processing from the beginning and the end of the sequence. So at any step, we have two options:

If the element at the beginning and the end are the same, we increment our count by two and make a recursive call for the remaining sequence.
We will skip the element either from the beginning or the end to make two recursive calls for the remaining subsequence.
If option one applies then it will give us the length of LPS; otherwise, the length of LPS will be the maximum number returned by the two recurse calls from the second option.

Python solution:
```python
def find_LPS_length(st):
  return find_LPS_length_recursive(st, 0, len(st) - 1)


def find_LPS_length_recursive(st, startIndex, endIndex):
  if startIndex > endIndex:
    return 0

  # every sequence with one element is a palindrome of length 1
  if startIndex == endIndex:
    return 1

  # case 1: elements at the beginning and the end are the same
  if st[startIndex] == st[endIndex]:
    return 2 + find_LPS_length_recursive(st, startIndex + 1, endIndex - 1)

  # case 2: skip one element either from the beginning or the end
  c1 = find_LPS_length_recursive(st, startIndex + 1, endIndex)
  c2 = find_LPS_length_recursive(st, startIndex, endIndex - 1)
  return max(c1, c2)


def main():
  print(find_LPS_length("abdbca"))
  print(find_LPS_length("cddpd"))
  print(find_LPS_length("pqr"))


main()
```
Time: O(2^n)
Space: O(n)

### Top-down Dynamic Programming with Memoization
The two changing values to our recursive function are the two indexes, startIndex and endIndex. Therefore, we can store the results of all the subproblems in a two-dimensional array. (Another alternative could be to use a hash-table whose key would be a string (startIndex + “|” + endIndex))

Python solution:
```python
def find_LPS_length(st):
  n = len(st)
  dp = [[-1 for _ in range(n)] for _ in range(n)]
  return find_LPS_length_recursive(dp, st, 0, n - 1)


def find_LPS_length_recursive(dp, st, startIndex, endIndex):
  if startIndex > endIndex:
    return 0

  # every sequence with one element is a palindrome of length 1
  if startIndex == endIndex:
    return 1

  if (dp[startIndex][endIndex] == -1):
    # case 1: elements at the beginning and the end are the same
    if st[startIndex] == st[endIndex]:
      dp[startIndex][endIndex] = 2 + find_LPS_length_recursive(dp, st, startIndex + 1, endIndex - 1)
    else:
      # case 2: skip one element either from the beginning or the end
      c1 = find_LPS_length_recursive(dp, st, startIndex + 1, endIndex)
      c2 = find_LPS_length_recursive(dp, st, startIndex, endIndex - 1)
      dp[startIndex][endIndex] = max(c1, c2)

  return dp[startIndex][endIndex]


def main():
  print(find_LPS_length("abdbca"))
  print(find_LPS_length("cddpd"))
  print(find_LPS_length("pqr"))


main()
```
Time complexity: O(n^2)
Space complexity: O(n^2)

### Bottom-up Dynamic Programming 
Since we want to try all the subsequences of the given sequence, we can use a two-dimensional array to store our results. We can start from the beginning of the sequence and keep adding one element at a time. At every step, we will try all of its subsequences. So for every startIndex and endIndex in the given string, we will choose one of the following two options:

1. If the element at the `startIndex` matches the element at the `endIndex`, the length of LPS would be two plus the length of LPS till `startIndex+1` and `endIndex-1`.
2. If the element at the `startIndex` does not match the element at the `endIndex`, we will take the maximum LPS created by either skipping element at the `startIndex` or the `endIndex`.

So our recursive formula would be:

```python
if st[endIndex] == st[startIndex] 
  dp[startIndex][endIndex] = 2 + dp[startIndex + 1][endIndex - 1]
else 
  dp[startIndex][endIndex] = Math.max(dp[startIndex + 1][endIndex], dp[startIndex][endIndex - 1])
```

Python solution:
```python
def find_LPS_length(st):
  n = len(st)
  # dp[i][j] stores the length of LPS from index 'i' to index 'j'
  dp = [[0 for _ in range(n)] for _ in range(n)]

  # every sequence with one element is a palindrome of length 1
  for i in range(n):
    dp[i][i] = 1

  for startIndex in range(n - 1, -1, -1):
    for endIndex in range(startIndex + 1, n):
      # case 1: elements at the beginning and the end are the same
      if st[startIndex] == st[endIndex]:
        dp[startIndex][endIndex] = 2 + dp[startIndex + 1][endIndex - 1]
      else:  # case 2: skip one element either from the beginning or the end
        dp[startIndex][endIndex] = max(
          dp[startIndex + 1][endIndex], dp[startIndex][endIndex - 1])

  return dp[0][n - 1]


def main():
  print(find_LPS_length("abdbca"))
  print(find_LPS_length("cddpd"))
  print(find_LPS_length("pqr"))


main()
```
Time complexity: O(n^2)
Space complexity: O(n^2)

## Longest Common Substring
### Problem Statement 
Given two strings ‘s1’ and ‘s2’, find the length of the longest substring which is common in both the strings.

Example 1:

    Input: s1 = "abdca"
        s2 = "cbda"
    Output: 2
    Explanation: The longest common substring is "bd".

### Basic solution
A basic brute-force solution could be to try all substrings of ‘s1’ and ‘s2’ to find the longest common one. We can start matching both the strings one character at a time, so we have two options at any step:

If the strings have a matching character, we can recursively match for the remaining lengths and keep a track of the current matching length.
If the strings don’t match, we start two new recursive calls by skipping one character separately from each string and reset the matching length.
The length of the Longest Common Substring (LCS) will be the maximum number returned by the three recurse calls in the above two options.

```python
def find_LCS_length(s1, s2):
  return find_LCS_length_recursive(s1, s2, 0, 0, 0)


def find_LCS_length_recursive(s1, s2, i1, i2, count):
  if i1 == len(s1) or i2 == len(s2):
    return count

  if s1[i1] == s2[i2]:
    count = find_LCS_length_recursive(s1, s2, i1 + 1, i2 + 1, count + 1)

  c1 = find_LCS_length_recursive(s1, s2, i1, i2 + 1, 0)
  c2 = find_LCS_length_recursive(s1, s2, i1 + 1, i2, 0)

  return max(count, max(c1, c2))


def main():
  print(find_LCS_length("abdca", "cbda"))
  print(find_LCS_length("passport", "ppsspt"))


main()
```
Time complexity: O(3^(m+n))

Space complexity: O(m+n)
### Top-down Dynamic Programming with Memoization
We can use an array to store the already solved subproblems.

The three changing values to our recursive function are the two indexes (i1 and i2) and the ‘count’. Therefore, we can store the results of all subproblems in a three-dimensional array. (Another alternative could be to use a hash-table whose key would be a string (i1 + “|” i2 + “|” + count)).

Code 
```python
def find_LCS_length(s1, s2):
  n1, n2 = len(s1), len(s2)
  maxLength = min(n1, n2)
  dp = [[[-1 for _ in range(maxLength)] for _ in range(n2)]
        for _ in range(n1)]
  return find_LCS_length_recursive(dp, s1, s2, 0, 0, 0)


def find_LCS_length_recursive(dp, s1, s2, i1, i2, count):
  if i1 == len(s1) or i2 == len(s2):
    return count

  if dp[i1][i2][count] == -1:
    c1 = count
    if s1[i1] == s2[i2]:
      c1 = find_LCS_length_recursive(
        dp, s1, s2, i1 + 1, i2 + 1, count + 1)
    c2 = find_LCS_length_recursive(dp, s1, s2, i1, i2 + 1, 0)
    c3 = find_LCS_length_recursive(dp, s1, s2, i1 + 1, i2, 0)
    dp[i1][i2][count] = max(c1, max(c2, c3))

  return dp[i1][i2][count]


def main():
  print(find_LCS_length("abdca", "cbda"))
  print(find_LCS_length("passport", "ppsspt"))


main()
```

### Bottom-up Dynamic Programming 