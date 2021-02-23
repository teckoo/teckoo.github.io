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


def find_rightmost_zero(number):
    if not number: return 0
    rightmost = 1
    cnt = 0
    while (number & rightmost) == rightmost:  # can be overflow in Java or C!
        rightmost <<= 1
        cnt += 1
    return cnt  # or return 1 << cnt

print([(i, find_rightmost_0(i)) for i in range(10)])    
print([(i, find_rightmost_zero(i)) for i in range(10)])    