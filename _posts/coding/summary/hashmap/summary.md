# The Principle of Hash Table

The key idea of Hash Table is to `use a hash function to map keys to buckets`. To be more specific,

* When we insert a new key, the hash function will decide which bucket the key should be assigned and the key will be stored in the corresponding bucket;
* When we want to search for a key, the hash table will use the same hash function to find the corresponding bucket and search only in the specific bucket.

## Complexity Analysis
If there are M keys in total, we can achieve the space complexity of O(M) easily when using a hash table.

However, you might have noticed that the time complexity of hash table has a strong relationship with the design.

Most of us might have used an array in each bucket to store values in the same bucket. Ideally, the bucket size is small enough to be regarded as a constant. The time complexity of both insertion and search will be O(1).

But in the worst case, the maximum bucket size will be N. And the time complexity will be O(1) for insertion but O(N) for search.

 

## The Principle of Built-in Hash Table
The typical design of built-in hash table is:

 The key value can be any hashable type. And a value which belongs to a hashable type will have a hashcode. This code will be used in the mapping function to get the bucket index.
 Each bucket contains an array to store all the values in the same bucket initially.
 If there are too many values in the same bucket, these values will be maintained in a height-balanced binary search tree instead.
The average time complexity of both insertion and search is still O(1). And the time complexity in the worst case is O(logN) for both insertion and search by using height-balanced BST. It is a trade-off between insertion and search.


## Hashset
### LC
* 705, 706, 136, 349, 202

Common Usage:

```python
# 1. initialize the hash set
hashset = set() 
# 2. add a new key
hashset.add(3)
hashset.add(2)
hashset.add(1)
# 3. remove a key
hashset.remove(2)
# 4. check if the key is in the hash set
if (2 not in hashset):
    print("Key 2 is not in the hash set.")
# 5. get the size of the hash set
print("Size of hashset is:", len(hashset)) 
# 6. iterate the hash set
for x in hashset:
    print(x, end=" ")
print("are in the hash set.")
# 7. clear the hash set
hashset.clear()                         
print("Size of hashset:", len(hashset))
```

## Hashmap
Common usage: 

```python
# 1. initialize a hash map
hashmap = {0 : 0, 2 : 3}
# 2. insert a new (key, value) pair or update the value of existed key
hashmap[1] = 1
hashmap[1] = 2
# 3. get the value of a key
print("The value of key 1 is: " + str(hashmap[1]))
# 4. delete a key
del hashmap[2]
# 5. check if a key is in the hash map
if 2 not in hashmap:
    print("Key 2 is not in the hash map.")
# 6. both key and value can have different type in a hash map
hashmap["pi"] = 3.1415
# 7. get the size of the hash map
print("The size of hash map is: " + str(len(hashmap)))
# 8. iterate the hash map
for key in hashmap:
    print("(" + str(key) + "," + str(hashmap[key]) + ")", end=" ")
print("are in the hash map.")
# 9. get all keys in hash map
print(hashmap.keys())
# 10. clear the hash map
hashmap.clear();
print("The size of hash map is: " + str(len(hashmap)))
```

### LC
1, 


Scenario II - Aggregate by Key
Another frequent scenario is to `aggregate all the information by key`. We can also use a hash map to achieve this goal.

 

An Example
Here is an example:

    Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

A simple way to solve this problem is to `count the occurrence` of each character first. And then go through the results to find out the first unique character.

Therefore, we can maintain a hashmap whose key is the character while the value is a counter for the corresponding character. Each time when we iterate a character, we just add the corresponding value by 1.

 

What's more
The key to solving this kind of problem is to `decide your strategy when you encounter an existing key`.

In the example above, our strategy is to count the occurrence. Sometimes, we might sum all the values up. And sometimes, we might replace the original value with the newest one. The strategy depends on the problem and practice will help you make a right decision.

## Practical Application - Design the Key
Another problem you might encounter is that when you meet some problems which you thought can be solved by a hash table, you are not able to `figure out a proper key`.

Here are some takeaways about how to design the key for you.

1. When the order of each element in the string/array doesn't matter, you can use the sorted string/array as the key.

2. If you only care about the offset of each value, usually the offset from the first value, you can use the offset as the key. `(0, x1-x0, x2-x1, ...)`

3. In a tree, you might want to directly use the `TreeNode` as key sometimes. But in most cases, the `serialization of the subtree` might be a better idea.

4. In a matrix, you might want to use the `row` index or the `column` index as key. 

5. In a Sudoku, you can combine the row index and the column index to identify which block this element belongs to. `row // 3 * 3, col // 3 * 3

6. Sometimes, in a matrix, you might want to aggregate the values in the same diagonal line. 
diagonal line `i+j`, back diagonal line `i-j`.