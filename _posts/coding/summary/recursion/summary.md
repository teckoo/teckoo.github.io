# Recursion summary

## Recursion properties

A recursive function should have the following properties so that it does not result in an infinite loop:

1. A simple base case (or cases) — a terminating scenario that does not use recursion to produce an answer.
2. A set of rules, also known as recurrence relation that reduces all other cases towards the base case.

LC problems:

* 206-reverse-linked-list
* 700-search-in-a-binary-search-tree

## Time Complexity - Recursion

Given a recursion algorithm, its time complexity O(T) is typically the product of the number of recursion invocations (denoted as R) and the time complexity of calculation (denoted as O(s)) that incurs along with each recursion call:

```bash
    O(T) = R * O(s)
```

## Execution Tree

Execution tree, is a tree that is used to denote the execution flow of a recursive function in particular. Each node in the tree represents an invocation of the recursive function. Therefore, the total number of nodes in the tree corresponds to the number of recursion calls during the execution.

## Memoization

In the previous chapter, we discussed the technique of memoization that is often applied to optimize the time complexity of recursion algorithms. By caching and reusing the intermediate results, memoization can greatly reduce the number of recursion calls, i.e. reducing the number of branches in the execution tree. One should take this reduction into account when analyzing the time complexity of recursion algorithms with memoization.

## Recursion Related Space

The recursion related space refers to the memory cost that is incurred directly by the recursion, i.e. the stack to keep track of recursive function calls. In order to complete a typical function call, the system allocates some space in the stack to hold three important pieces of information:

The returning address of the function call. Once the function call is completed, the program must know where to return to, i.e. the line of code after the function call.
The parameters that are passed to the function call.
The local variables within the function call.
This space in the stack is the minimal cost that is incurred during a function call. However, once the function call is done, this space is freed.

## Non-Recursion Related Space

As suggested by the name, the non-recursion related space refers to the memory space that is not directly related to recursion, which typically includes the space (normally in heap) that is allocated for the global variables.

Recursion or not, you might need to store the input of the problem as global variables, before any subsequent function calls. And you might need to save the intermediate results from the recursive calls as well. The latter is also known as memoization as we saw in the previous chapters. For example, in the recursive algorithm with memoization to solve the Fibonacci number problem, we used a map to keep track of all intermediate Fibonacci numbers that occurred during the recursive calls. Therefore, in the space complexity analysis, we must take the space cost incurred by the memoization into consideration.  

## Tail recursion

Tail recursion is a recursion where the recursive call is the final instruction in the recursion function. And there should be only **one** recursive call in the function.

The benefit of having tail recursion is that it could avoid the accumulation of stack overheads during the recursive calls, since the system could reuse a fixed amount space in the stack for each recursive call.

Example: Reverse String

```python
def sum_non_tail_recursion(ls):
    """
    :type ls: List[int]
    :rtype: int, the sum of the input list.
    """
    if len(ls) == 0:
        return 0

    # not a tail recursion because it does some computation after the recursive call returned.
    return ls[0] + sum_non_tail_recursion(ls[1:])


def sum_tail_recursion(ls):
    """
    :type ls: List[int]
    :rtype: int, the sum of the input list.
    """
    def helper(ls, acc):
        if len(ls) == 0:
            return acc
        # this is a tail recursion because the final instruction is a recursive call.
        return helper(ls[1:], ls[0] + acc)

    return helper(ls, 0)
```

## Tips

1. When in doubt, write down the recurrence relationship.

Sometimes, at a first glance it is not evident that a recursion algorithm can be applied to solve a problem. However, it is always helpful to deduct some relationships with the help of mathematical formulas, since the recurrence nature in recursion is quite close to the mathematics that we are familiar with. Often, they can clarify the ideas and uncover the hidden `recurrence relationship`.

1. Whenever possible, apply memoization.

When drafting a recursion algorithm, one could start with the most naive strategy. Sometimes, one might end up with the situation where there might be `duplicate calculation` during the recursion, e.g. Fibonacci numbers.

1. When stack overflows, tail recursion might come to help.

## Divide and Conquer

### Template

There are in general three steps that one can follow in order to solve the problem in a divide-and-conquer manner.

1. Divide. Divide the problem {S}S into a set of subproblems: {S_1, S_2, ... S_n} where n≥2, i.e. there are usually more than one subproblem.

2. Conquer. Solve each subproblem recursively.

3. Combine. Combine the results of each subproblem.

We can summarize the above steps in the following pseudocode template.

```python
def divide_and_conquer( S ):
    # (1). Divide the problem into a set of subproblems.
    [S1, S2, ... Sn] = divide(S)

    # (2). Solve the subproblem recursively,
    #   obtain the results of subproblems as [R1, R2... Rn].
    rets = [divide_and_conquer(Si) for Si in [S1, S2, ... Sn]]
    [R1, R2,... Rn] = rets

    # (3). combine the results from the subproblems.
    #   and return the combined result.
    return combine([R1, R2,... Rn])
```
