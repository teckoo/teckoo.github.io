# Queue and BFS

One common application of Breadth-first Search (BFS) is to find the shortest path from the root node to the target node.

In Python, `collections.deque` serves both queue and stack.

* `append` and `pop` are for stack.
* `append` and `popleft` are for queue.

## BFS template 1

```python
def BFS(Node root, Node target):
    q = collections.deque()
    step = 0  # number of steps from root to current node
    q.append(root)
    # BFS
    while q:  # queue is not empty:
        step += 1
        # iterate the nodes which are already in the queue
        size = len(q)
        for node in q:
            Node cur = the first node in queue
            return step if cur is target
            for (Node next : the neighbors of cur):
                add next to queue
            
            remove the first node from queue
        }
    }
    return -1  # there is no path from root to target
```

## BFS template 2

Sometimes, it is important to make sure that we never visit a node twice. Otherwise, we might get stuck in an infinite loop, e.g. in _graph with cycle_. If so, we can add a hash set to the code above to solve this problem. Here is the pseudocode after modification:

```python 
def bfs_traversal(g, source):
    queue = collections.deque()
    visited = set()  # make a node visted when enque it.

    result = ""
    queue.append(source)
    visited.add(source)
    while queue:  # while queue is not empty
        cur_node = queue.popleft()
        return result if cur_node is target
        for next in cur_node.children:
            if(next is not in visited):
                queue.append(temp.data)
                visited.add(next)
    return result
```

Sometimes, it runs much faster if we can reduce duplication via a set.

```python
# LC Problem 279
def numSquares(self, n: int) -> int:
    # list of squre numbers < n
    square_nums = [i * i for i in range(1, int(n**0.5) + 1)]

    level = 0
    que = {n}
    while que:
        level += 1
        # important to use set() to remove redundency
        next_que = set()
        for remainder in que:
            if remainder in square_nums:
                return level  # find the node
            # construct the next level
            for square_num in square_nums:
                if remainder > square_num:
                    next_que.add(remainder - square_num)
        que = next_que
    return level
```

## Queue.Queue vs collections.deque

Queue.Queue and collections.deque serve different purposes. Queue.Queue is intended for allowing different threads to communicate using queued messages/data, whereas collections.deque is simply intended as a datastructure. That's why Queue.Queue has methods like put_nowait(), get_nowait(), and join(), whereas collections.deque doesn't. Queue.Queue isn't intended to be used as a collection, which is why it lacks the likes of the in operator.

## list vs collections.deque

The real differences between deques and list in terms of performance are: Deques have O(1) speed for appendleft() and popleft() while lists have O(n) performance for insert(0, value) and pop(0). List append performance is hit and miss because it uses realloc() under the hood.

# Stack

Stack data structure is easier than queue. It's essentially a dynamic array and many languages already have built-in class.

## DFS - Template I

```python
def DFS(Node cur, Node target, Set<Node> visited):
    return True if cur is target
    for next in each_neighbor_of_cur:
        if next not in visited:
            add next to visted
            return true if DFS(next, target, visited)
    return False
}
```

## DFS - Template II

```python
def DFS(root: int, target: int) --> bool:
    Set<Node> visited
    Stack<Node> stack
    add root to stack
    while s is not empty:
        Node cur = the top element in stack
        remove the cur from the stack
        return true if cur is target
        for (Node next : the neighbors of cur):
            if next not in visited: 
                add next to visited
                add next to stack
            }
        }
    }
    return False
```

# Problems
## BFS Queue: LC 
1. 622-design-circular-queue
1. 286-walls-and-gates 
1. 200-number-of-islands
1. 752-open-the-lock
1. 279-perfect-squares  # greedy + BFS 解法叹为观止

## Stack DFS: LC
1. 155-min-stack
1. 133-clone-graph
1. 494-target-sum
1. 94-binary-tree-inorder-traversal