# Python3 program of Quick Select 

# Standard partition process of QuickSort(). 
# It considers the last element as pivot 
# and moves all smaller element to left of 
# it and greater elements to right 
def partition(arr, l, r): 
	
	x = arr[r] 
	cur = l 
	for i in range(l, r): 
		if arr[i] <= x: 
			arr[cur], arr[i] = arr[i], arr[cur] 
			cur += 1
			
	arr[cur], arr[r] = arr[r], arr[cur] 
	return cur

# finds the kth position (of the sorted array) 
# in a given unsorted array i.e this function 
# can be used to find both kth largest and 
# kth smallest element in the array. 
# ASSUMPTION: all elements in arr[] are distinct 
def kthSmallest(arr, l, r, k): 

	# if k is smaller than number of 
	# elements in array 
	if (k > 0 and k <= r - l + 1): 

		# Partition the array around last 
		# element and get position of pivot 
		# element in sorted array 
		index = partition(arr, l, r) 

		# if position is same as k 
		if (index - l == k - 1): 
			return arr[index] 

		# If position is more, recur 
		# for left subarray 
		if (index - l > k - 1): 
			return kthSmallest(arr, l, index - 1, k) 

		# Else recur for right subarray 
		return kthSmallest(arr, index + 1, r, 
							k - index + l - 1) 
	return INT_MAX 

# Driver Code 
arr = [ 10, 4, 5, 11, 6, 26, 8 ] 
n = len(arr) 
k = 3
print("K-th smallest element is ", end = "") 
print(kthSmallest(arr, 0, n - 1, k)) 
