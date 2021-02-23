# Some heap API usage

```python
# Python code to demonstrate working of 
# heapify(), heappush() and heappop() 

# importing "heapq" to implement heap queue 
import heapq 
# initializing list 
li = [5, 7, 9, 1, 3] 

# using heapify to convert list into heap 
heapq.heapify(li) 

# printing created heap 
print ("The created heap is : ", end="", list(li)) 

# using heappush() to push elements into heap 
# pushes 4 
heapq.heappush(li,4) 

# printing modified heap 
print ("The modified heap after push is : ",end="", list(li)) 

# using heappop() to pop smallest element 
print ("The popped and smallest element is : ",end="", heapq.heappop(li)) 

#295-find-median-from-data-stream/two-heap.py
heappush(self.large, -heappushpop(self.small, -num))
```
