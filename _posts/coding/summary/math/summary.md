# Math topic

## Random number generation rand_N to rand_M

The key is to make generation evenly distributed. 

```python
E.g. use rand7() (generates [1, 7] evenly) to generate rand10()
x = (rand7() - 1) * 7  # create [0, 7, 14, 21, 28, 35, 42] evenly
y = rand7()  # create [1..7] evenly
n = x + y  # create [1..49] evenly
while n > 40:
  n = f()  # re-create a new number
result = 1 + n % 10  # make it from [0..9] to [1..10]
```
