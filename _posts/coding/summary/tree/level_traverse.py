from collections import deque
def level_travel(root):
    """ output by level order:
    [[1], [2, 3], [4, 5, 6, 7]]
    """
    if not root: return []
    result = []
    queue = deque([root])
    while queue:
        level_size = len(queue)
        level = []
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            if not node.left:
                queue.append(node.left)
            if not node.right:
                queue.append(node.right)
        result.append(level)
    return result

def reverse_level_travel(root):
    """ output by level order:
    [[1], [2, 3], [4, 5, 6, 7]]
    """
    if not root: return []
    result = deque() 
    queue = deque([root])
    while queue:
        level_size = len(queue)
        level = []
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            if not node.left:
                queue.append(node.left)
            if not node.right:
                queue.append(node.right)
        result.appendleft(level)
    return result
