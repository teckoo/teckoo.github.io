def find_missing_number(arr):
  n = len(arr) + 1
  # x1 represents XOR of all values from 1 to n
  x1 = 1
  for i in range(2, n+1):
    x1 = x1 ^ i

  # x2 represents XOR of all values in arr
  #x2 = arr[0]
  for i in range(0, n-1):
    x1 = x1 ^ arr[i]
  
  # missing number is the xor of x1 and x2
  return x1

def main():
  arr = [1, 5, 2, 6, 4] 
  print('Missing number is:' + str(find_missing_number(arr)))

main()
