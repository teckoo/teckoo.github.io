from collections import deque, defaultdict

def is_scheduling_possible(tasks, prerequisites):
    if tasks < 1: return False

    graph = defaultdict(list)
    in_degree = defaultdict(int)
    sortedOrder = []
    for i in range(tasks):  # count of incoming edges
        in_degree[i] = 0 
    for parent, child in prerequisites:  # O(N)
        graph[parent].append(child)
        in_degree[child] += 1
        
    sources = deque()
    [sources.append(key) for key in in_degree if in_degree[key] == 0]

    while sources:
        vertex = sources.popleft()
        sortedOrder.append(vertex)
        for child in graph[vertex]:
            in_degree[child] -= 1
            if in_degree[child] == 0:
                sources.append(child)
    return len(sortedOrder) == tasks

if __name__ == "__main__":
  print("Is scheduling possible: " +
        str(is_scheduling_possible(3, [[0, 1], [1, 2]])))
  print("Is scheduling possible: " +
        str(is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])))
  print("Is scheduling possible: " +
        str(is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])))
