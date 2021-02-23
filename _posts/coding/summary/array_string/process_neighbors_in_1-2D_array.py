# 1D case: see ref LC 957

# 2D case: see ref LC 28
# Neighbors array to find 8 neighboring cells for a given cell
neighbors = [(1,0), (1,-1), (0,-1), (-1,-1), (-1,0), (-1,1), (0,1), (1,1)]

rows = len(board)
cols = len(board[0])

# Iterate through board cell by cell.
for row in range(rows):
    for col in range(cols):
        # For each cell count the number of live neighbors.
        live_neighbors = 0
        for neighbor in neighbors:

            # row and column of the neighboring cell
            r = (row + neighbor[0])
            c = (col + neighbor[1])
            # Check the validity of the neighboring cell and if it was originally a live cell.
            if (r < rows and r >= 0) and (c < cols and c >= 0) and abs(board[r][c]) == 1:
                live_neighbors += 1
