---
layout: leetcode
title: "224. Basic Calculator"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/basic-calculator/)

Given a string s representing an expression, implement a basic calculator to evaluate it.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 
```
Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
```

Constraints:

* 1 <= s.length <= 3 * 10^5
* s consists of digits, '+', '-', '(', ')', and ' '.
* s represents a valid expression.

# Solution

Use [monotonic queue template](/template/queue_stack/#monotonic-queue-template). 

1. handle string to integer conversion

```python
s = "123"
n = 0
for c in s:
    n = n * 10 + (ord(c) - ord('0'))
```

2. handle addition/substraction, put to sign/number into a stack

```python
def calculate(s):
    stack = []
    num = 0
    sign = '+'
    for i in range(len(s)):
        ch = s[i]
        if ch.isdigit():
            num = num * 10 + (ord(ch) - ord('0'))
        elif not ch.isdigit() and ch != ' ' or i == len(s) - 1:
            if sign == '+':
                stack.append(num)
            elif sign == '-':
                stack.append(-num)
            elif sign == '*':
                stack[-1] *= num
            elif sign == '/':  # != stack[-1]//num
                stack[-1] = int(stack[-1]/num)
            sign = ch
            num = 0
    # calculate the stack
    res = 0
    while stack:
        res += stack.pop()
    return res
```

3. handle paranthesis with recursive calls, complete solution:

```python
def calculate(s: str):
    def helper(s: List):
        stack = []
        sign = '+'
        num = 0
        while s:
            c = s.pop(0)
            if c.isdigit():
                num = num * 10 + int(c)
            
            if c == '(':
                num = helper(s)
            elif c == ')':
                break

            if not c.isdigit() and c != ' ' or len(s) == 0:
                if sign == '+':
                    stack.append(num)
                elif sign == '-':
                    stack.append(-num)
                elif sign == '*':
                    stack[-1] *= num
                elif sign == '/':
                    stack[-1] = int(stack[-1] / num)
                sign = c
                num = 0
        return sum(stack)    

    return helper(list(s))
```
