def solution(A):
    result = 0
    cur_items = {}
    left, right = 0, len(A)
    cur = 0
    while cur < right:
        val = A[cur]
        cur_items[val] = cur_items.get(val, 0) + 1
        if len(cur_items) < 3:
            result = max(result, cur - left + 1)
        else:
            while len(cur_items) > 2:
                # print(f"A[{left}]={A[left]}, cnt={cur_items[A[left]]}")
                cur_items[A[left]] -= 1
                if cur_items[A[left]] < 1:
                    del cur_items[A[left]]
                left += 1
        cur += 1
    return result


def main():
    arr = [4, 2, 2, 4, 2]
    print(f"{arr} returns {solution(arr)} == 5")
    arr = [1, 2, 3, 2]
    print(f"{arr} returns {solution(arr)} == 3")
    arr = [0, 5, 4, 4, 5, 12]
    print(f"{arr} returns {solution(arr)} == 4")
    arr = [4, 4]
    print(f"{arr} returns {solution(arr)} == 2")
    arr = [1, 2, 1, 1, 3, 2, 1, 1, 1, 1]
    print(f"{arr} returns {solution(arr)} == 5")


if __name__ == "__main__":
    main()

