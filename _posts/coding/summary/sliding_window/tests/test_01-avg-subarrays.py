"""
    Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
    e.g.
    Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
    Output: [2.2, 2.8, 2.4, 3.6, 2.8]
"""
import unittest
import pytest


def find_averages_of_subarrays(K, arr):
    if not arr or len(arr) < K: return []
    total = sum(arr[0:K])
    result = [total / K]
    for i in range(K, len(arr), 1):
        total = total - arr[i - K] + arr[i]
        result.append(total / K)
    return result


def main():
    result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
    print("Averages of subarrays of size K: " + str(result))


class AverageTest(unittest.TestCase):
    def test_find_average(self):
        result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
        self.assertTrue(len(result) == 5)
        self.assertEqual(result, [2.2, 2.8, 2.4, 3.6, 2.8])

    def test_second(self):
        assert False


if __name__ == "__main__":
    unittest.main()
