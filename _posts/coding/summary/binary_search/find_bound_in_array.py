# return the lower_bound/upper_bound of a val in a sorted array
# lower_bound(x): first index of i, such that A[i] >= x
# upper_bound(x): first index of i, such that A[i] > x
#
# python -m unittest find_bound_in_array

import unittest

def lower_bound(A, val):
    def _lb(A, val, l, r):
        while l < r: 
            m = l + (r - l) // 2
            if A[m] >= val: # g(m)
                r = m
            else: 
                l = m + 1
        return l
    return _lb(A, val, 0, len(A))


def upper_bound(A, val):
    def _ub(A, val, l, r):
        while l < r: 
            m = l + (r - l) // 2
            if A[m] > val: # g(m)
                r = m
            else:
                l = m + 1
        return l
    return _ub(A, val, 0, len(A))


class SolutionTest(unittest.TestCase):
    def test_lower_bound(self):
        A = [1, 2, 2, 2, 4, 4, 5]
        # case 1:
        result = lower_bound(A, 2)
        self.assertEqual(result, 1) 
        # case 2:
        result = lower_bound(A, 3)
        self.assertEqual(result, 4) 

    def test_upper_bound(self):
        A = [1, 2, 2, 2, 4, 4, 5]
        # case 1:
        result = upper_bound(A, 2)
        self.assertEqual(result, 4) 
        # case 2:
        result = upper_bound(A, 5)
        self.assertEqual(result, 7) 


if __name__ == "__main__":
    unittest.main()
