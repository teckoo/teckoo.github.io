import unittest


class AverageTest(unittest.TestCase):
    def test_find_average(self):
        result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
        self.assertTrue(len(result) == 5)
        self.assertEqual(result, [2.2, 2.8, 2.4, 3.6, 2.8])

    def test_second(self):
        assert False


if __name__ == "__main__":
    unittest.main()
