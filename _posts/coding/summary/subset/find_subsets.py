def find_subsets(nums):
    subsets = []
    # start by adding an empty subset
    subsets.append([])
    for num in nums:
        n = len(subsets)
        for i in range(n):  # control the number of runs
            # otherwise, subsets will keep increasing
            s = list(subsets[i])  # make a new copy
            s.append(num)
            subsets.append(s)
    return subsets

def main():

  print("Here is the list of subsets: " + str(find_subsets([1, 3])))
  print("Here is the list of subsets: " + str(find_subsets([1, 5, 3])))


main()