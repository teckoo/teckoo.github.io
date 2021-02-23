import collections


class Node:
  def __init__(self, d):
    self.data = d
    self.neighbors = []
  
def clone(root):
  if not root: return None

  nodes = {}  # key: original node, value: new node
  stack = collections.deque()
  stack.append(root)
  new_root = Node(root.data)
  nodes[root] = new_root
  while stack:
    node = stack.pop()
    new_node = nodes[node]
    for child in node.neighbors:
      if child and child not in nodes:
        stack.append(child)
        new_child = Node(child.data)
        nodes[child] = new_child
        new_node.neighbors.append(new_child)

  return new_root