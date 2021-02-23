# Template

[Explaination Details](./summary.md) | [Template Index](../template_list.md)

## Top-down approach

```python
def coin_change(coins, amount):
  """ time: N * K, N is amount, K is the size of coins """
  memo = {}

  def dp(n):
    # check memo for result
    if n in memo: return memo[n]

    # base case
    if n == 0: return 0
    if n < 0: return -1
    
    # find minimal
    res = float("inf")
    for coin in coins:
      subproblem = dp(n - coin)
      if subproblem == -1: continue
      res = min(res, subproblem + 1)
    
    # store result to memo
    memo[n] = res if res != float("inf") else -1  
    return memo[n]
  return dp(amount)
```

## Bottom up approach

Comparing to top-down approach, `base/choice/state` are still the same. The difference is `dp[]` uses `i` as index, instead of argument in `dp()`. 

```python
    def coinChange(self, coins: List[int], amount: int) -> int:
        # plus base, make array as `size + 1`
        dp = [float("inf")] * (amount + 1)
        # base case
        dp[0] = 0
        # iterate all states
        for i in range(len(dp)):
            # go over each choice
            for coin in coins:
                # skip invalid sub problem
                if (i - coin) < 0: continue
                # check optimal sub-problem   
                dp[i] = min(dp[i], dp[i - coin] + 1)
        return dp[amount] if dp[amount] != float("inf") else -1
```

LC: 
[322. coin change](../../leetcode/322-coin-change/description.md)