# Graph

A graph is `G = (V, E)` where `V` is set of vertices and `E` is set of edges. The two most common ways to represent a graph are:

* Adjacency Matrix
* Adjacency List
* Hashmap (easier in my mind)

For both BFS and DFS, this algorithm traverses the whole list once. 
Hence, it’s time complexity is O(V + E)

## BFS

1. Use a FIFO queue to put all children of each node at the end of queue. In this way, we can process the same level nodes first before children. 
2. Need to maintain a 'visited' set to avoid cyclic traveral. 
3. Process until queue is empty. 

Algorithm: 

```python
queue = MyQueue()
visited = set()
queue.enqueue(first_vertex)
visited.add(first_vertex)

while queue is not empty:
  current_node = queue.dequeue()
  do some process on current_node
  for child in current_node.children:
		if child and child not in visited:
    	queue.enqueue(child)
			visited.add(child)
return result
```

## DFS

1. use a stack to keep search children first
2. keep a 'visited' set to avoid cycle
3. process until the stack is empty.
4. 
```python
def dfs_traversal(g,source):
	result = "" #Append node values in string
	num_of_vertices = g.vertices
	# Write - Your - Code
	stack = MyStack()
	stack.push(source)
	visited = set()
	while not stack.is_empty():
		cur_node = stack.pop()
		if cur_node is not None and cur_node not in visited:
			visited.add(cur_node)
			result += str(cur_node)
			child = g.array[cur_node].get_head()
			print("processed {}, next child {}".format(cur_node,
					child.data if child is not None else 'None'))
			while child is not None:
				stack.push(child.data)
				child = child.next_element
	return result
```


## Make a graph for DFS

Quickly initialize a graph for DFS
and sort a list of connections with lower node first.

```python
n = 4
connections = [[0,1],[1,2],[2,0],[1,3]]

import collections
def makeGraph(connections):
	""" graph is an Adjacency List: {node:[neighbors...]"""
	graph = collections.defaultdict(list)
	for conn in connections:
			graph[conn[0]].append(conn[1])
			graph[conn[1]].append(conn[0])
	return graph

graph = makeGraph(connections)
connections = set(map(tuple, (map(sorted, connections))))
# or connections = set(map(tuple, sorted(connections)))
>>> graph
defaultdict(<class 'list'>, {1: [0, 2, 3], 0: [1, 2], 2: [1, 0], 3: [1]})
>>> connections
{(0, 1), (0, 2), (1, 2), (1, 3)}
```
