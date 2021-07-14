var tag_list = [
    ["array", "Array"],
    ["string", "String"],
    ["queue_stack", "Queue/Stack"],
    ["heap", "Heap"],
    ["linked_list", "Linked list"],
    ["binary_search", "Binary search"],
    ["sort", "Sort"],
    ["graph", "Graph"],
    ["hashmap", "Hashmap"],
    ["backtrack", "Backtrack"],
    ["dfs", "DFS"],
    ["bfs", "BFS"],
    ["tree", "Tree"],
    ["trie", "Trie"],
    ["two_pointers", "Two pointers"],
    ["fast_slow_pointers", "Fast/Slow pointers"],
    ["sliding_window", "Sliding window"],
    ["prefix_sum", "Prefix sum"],
    ["bit", "Bit manipulation"],
    ["dp", "Dynamic programming"],
    ["union_find", "Union find"],
    ["topo_sort", "Topological sort"],
    ["segment_tree", "Segment tree"],
    ["line_sweep", "Line sweep"]
];

var templates = {
    "bfs": "/template/bfs",
    "dfs": "/template/dfs",
    "binary_search": "/template/binary_search",
    "backtrack": "/template/backtrack",
    "topo_sort": "/template/topo_sort",
    "cycle_sort": "/template/cycle_sort",
    "quick_sort": "/template/quick_sort",
    "merge_sort": "/template/merge_sort",
    "sliding_window": "/template/sliding_window",
};

var problems = {
    "1": {
        name: "1. Two Sum",
        tags: ["array", "hashmap"],
        keywords: ["sum", "two sum", "lv_1"],
        url: "/leetcode/1-two-sum",
        notes: "hashmap, T: O(N), S: O(N)",
        templates: [],
        companies: ["bloomberg", "amazon"],
    },
    "2": {
        name: "2. Add Two Numbers",
        url: "/leetcode/2-add-two-numbers",
        tags: ["linked_list"],
        keywords: ["add numbers", "lv_1"],
        templates: [],
        notes: "Loop 2 linked lists, carry bit",
    },
    "3": {
        name: "3. Longest Substring Without Repeating Characters",
        url: "/leetcode/3-longest-substring-without-repeating-characters",
        tags: ["sliding_window", "string"],
        keywords: ["longest string", "hashmap", "lv_1"],
        templates: ["sliding_window"],
        notes: "Sliding window template. update res while increase right. Time: O(N), Space: O(N)",
    },
    "15": {
        name: "15. 3Sum",
        tags: ["array", "hashmap"],
        keywords: ["sum", "lv_2"],
        url: "/leetcode/15-3sum",
        notes: "hashmap, T: O(N^2), S: O(N)",
        templates: [],
    },
    "18": {
        name: "18. 4Sum",
        tags: ["array", "hashmap"],
        keywords: ["sum", "lv_2"],
        url: "/leetcode/18-4sum",
        notes: "hashmap, T: O(N^3), S: O(N)",
        templates: [],
    },
    "21": {
        name: "21. Merge Two Sorted Lists",
        url: "/leetcode/21-merge-two-sorted-lists",
        tags: ["sort", "linked_list"],
        keywords: ["merge_sort", "lv_1"],
        templates: ["merge_sort"],
        notes: "Use dummy head",
    },
     "22": {
        name: "22. Generate Parentheses",
        url: "/leetcode/22-generate-parentheses",
        tags: ["backtrack", "array"],
        keywords: ["parentheses", "lv_3"],
        templates: ["backtrack"],
        notes: "Backtrack template. convert to validate the combinations of (). ",
    },
    "25": {
        name: "25. Reverse Nodes in k-Group",
        url: "/leetcode/25-reverse-nodes-in-k-group",
        tags: ["linked_list"],
        keywords: ["reverse", "lv_2"],
        templates: ["linked_list"],
        notes: "Recursive reverse N node. T:O(N), S:O(1)",
    },
    "33": {
        name: "33. Search in Rotated Sorted Array",
        url: "/leetcode/33-search-in-rotated-sorted-array",
        tags: ["binary_search", "array"],
        keywords: ["search 1 item", "rotated sorted array", "lv_1"],
        templates: ["binary_search"],
        notes: "Binary search, one item, l<=r",
    },
    "34": {
        name: "34. Find First and Last Position of Element in Sorted Array",
        url: "/leetcode/34-find-first-and-last-position-of-element-in-sorted-array",
        tags: ["binary_search",],
        keywords: ["search range", "lv_2"],
        templates: ["binary_search"],
        notes: "Binary search for boundary, check end condition",
    },
    "37": {
        name: "37. Sudoku Solver (H)",
        url: "/leetcode/37-sudoku-solver",
        tags: ["backtrack", "array"],
        keywords: ["sudoku", "lv_3"],
        templates: ["backtrack"],
        notes: "Backtrack template. if j==n, move to (i+1, 0). skip invalid ",
    },
    "46": {
        name: "46. Permutations",
        url: "/leetcode/46-permutations",
        tags: ["backtrack"],
        keywords: ["permutation", "lv_1"],
        templates: ["backtrack"],
        notes: "Backtrack template. End condition: path=nums[:i]+nums[i+1:]. res.append([nums[i]] + path]) Time: O(N!), Space: O(N!)",
    },
    "51": {
        name: "51. N queens (M)",
        url: "/leetcode/51-n-queens",
        tags: ["backtrack"],
        keywords: ["N queens", "lv_1"],
        templates: ["backtrack"],
        notes: "Backtrack template. bt(grid, 0). End condition: row==len(grid). diag_l[row+col], diag_r[col-row+n-1], grid[row][col]='Q';bt();grid[row][col]='.'. Time: O(N!), Space: O(N!)",
    },
    "53": {
        name: "53. maximum-subarray",
        tags: ["array", "prefix_sum"],
        keywords: ["subarray", "sum", "lv_1"],
        url: "/leetcode/53-maximum-subarray",
        notes: "Kadane's algorithm. Or get prefix sum for array, convert to buy/sell stock problem",
    },
    "75": {
        name: "75. Sort Colors",
        tags: ["array", "two_pointers"],
        keywords: ["dutch national flag", "lv_1"],
        url: "/leetcode/75-sort-colors",
        notes: "Two pointers, T: O(N), S: O(1)",
        templates: ["two_pointers"],
    },
    "76": {
        name: "76. Minimum Window Substring",
        url: "/leetcode/76-minimum-window-substring",
        tags: ["sliding_window", "string"],
        keywords: ["minimum window", "lv_2"],
        templates: ["sliding_window"],
        notes: "Sliding window template. while increase right, while shrink left. Time: O(S+T), Space: O(|S|)",
    },
    "77": {
        name: "77. Combinations (M)",
        url: "/leetcode/77-combinations",
        tags: ["backtrack"],
        keywords: ["combinations", "lv_1"],
        templates: ["backtrack"],
        notes: "Backtrack template. Use 'start' to filter previous items, check len(path) == len(nums) to add to result",
    },
    "78": {
        name: "78. Subsets (M)",
        url: "/leetcode/78-subsets",
        tags: ["backtrack", "array"],
        keywords: ["subsets", "lv_1"],
        templates: ["backtrack"],
        notes: "Backtrack template. Use 'start' to filter, add 'track' to result",
    },
    "81": {
        name: "81. Search in Rotated Sorted Array II",
        url: "/leetcode/81-search-in-rotated-sorted-array-ii",
        tags: ["binary_search", "array"],
        keywords: ["search 1 item", "rotated sorted array", "lv_1"],
        templates: ["binary_search"],
        notes: "Binary search, one item, split",
    },
    "92": {
        name: "92. Reverse Linked List II",
        url: "/leetcode/92-reverse-linked-list-ii",
        tags: ["linked_list"],
        keywords: ["reverse", "lv_2"],
        templates: ["linked_list"],
        notes: "Recursive find the first position, reverse N node. T:O(N), S:O(1)",
    },
    "98": {
        name: "98. Validate binary search tree",
        url: "/leetcode/98-validate-binary-search-tree",
        tags: ["tree"],
        keywords: ["preorder", "lv_2"],
        templates: ["tree"],
        notes: "Tree traverse template. Preorder, valid (root, low, high), then recursion (left, low, root) && (right, root, high)",
    },
    "100": {
        name: "100. Same Tree",
        url: "/leetcode/100-same-tree",
        tags: ["tree"],
        keywords: ["preorder", "lv_2"],
        templates: ["tree"],
        notes: "Tree traverse template. Preorder, check both null, 1 null, compare 2 values.",
    },
    "111": {
        name: "111. Minimum Depth of Binary Tree",
        url: "/leetcode/111-minimum-depth-of-binary-tree",
        tags: ["bfs", "tree"],
        keywords: ["tree depth", "lv_2"],
        templates: ["bfs"],
        notes: "BFS template. deque. level traverse. range(len(que)), add children to next level.",
    },
    "141": {
        name: "141. Linked List Cycle",
        url: "/leetcode/141-linked-list-cycle",
        tags: ["fast_slow_pointers", "linked_list"],
        keywords: ["cycle list", "lv_2"],
        templates: ["fast_slow_pointers"],
        notes: "Fast/Slow pointers, T:O(N), S:O(1)",
    },
    "142": {
        name: "142. Linked List Cycle II",
        url: "/leetcode/142-linked-list-cycle-ii",
        tags: ["fast_slow_pointers", "linked_list"],
        keywords: ["cycle list", "lv_3"],
        templates: ["fast_slow_pointers"],
        notes: "Fast/Slow pointers, 先找到meetpoint，再从头同步前进直到相遇。T:O(N), S:O(1)",
    },
    "146": {
        name: "146. LRU Cache",
        url: "/leetcode/146-lru-cache",
        tags: ["hashmap", "linked_list"],
        keywords: ["LRU", "double_linked_list", "lv_1"],
        templates: [],
        notes: "OrderedDict, both get()/put(): move_to_end(). raw code, use head/tail dummy nodes; cache{key:Node}.",
    },
    "167": {
        name: "167. Two Sum II - Input array is sorted",
        tags: ["array", "two_pointers"],
        keywords: ["two sum", "sorted", "lv_3"],
        url: "/leetcode/167-two-sum-ii-input-array-is-sorted",
        notes: "Two pointers, T: O(N), S: O(N)",
        templates: ["two_pointers"],
        companies: ["bloomberg", "amazon"],
    },
    "170": {
        name: "170. Two Sum III - Data structure design",
        tags: ["array", "hashmap"],
        keywords: ["two sum", "lv_3"],
        url: "/leetcode/170-two-sum-iii-data-structure-design",
        notes: "hashmap, T: O(N), S: O(N)",
        companies: ["bloomberg", "amazon"],
    },
    "200": {
        name: "200. Number of Islands",
        url: "/leetcode/200-number-of-islands",
        tags: ["array", "bfs", "dfs", "union_find"],
        keywords: ["grid", "lv_1"],
        notes: "BFS/DFS/Union Find",
    },
    "208": {
        name: "208. Implement Trie (Prefix Tree)",
        url: "/leetcode/208-implement-trie-prefix-tree",
        tags: ["array", "trie"],
        keywords: ["search", "insert", "lv_1"],
        notes: "Trie",
    },
    "222": {
        name: "222. Count Complete Tree Nodes",
        url: "/leetcode/222-count-complete-tree-nodes",
        tags: ["tree"],
        keywords: ["BST", "count", "lv_3"],
        templates: ["tree"],
        notes: "Tree template. Time: O(lgN*lgN), only 1 side recursive",
    },
    "224": {
        name: "224. Basic Calculator",
        url: "/leetcode/224-basic-calculator",
        tags: ["string", "queue_stack"],
        keywords: ["stack", "lv_2"],
        templates: ["queue_stack"],
        notes: "Using stack, divide into sub-problems",
    },
    "234": {
        name: "234. Palindrome Linked List",
        url: "/leetcode/234-palindrome-linked-list",
        tags: ["linked_list"],
        keywords: ["palindrome", "lv_2"],
        templates: ["linked_list"],
        notes: "Find the middle node, reverse the 2nd half to compare with 1st half, reverse it back at the end. T:O(N), S:O(1)",
    },
    "236": {
        name: "236. Lowest Common Ancestor of a Binary Tree",
        url: "/leetcode/236-lowest-common-ancestor-of-a-binary-tree",
        tags: ["tree"],
        keywords: ["tree", "common ancestor", "lv_2"],
        templates: ["tree"],
        notes: "Tree template. check left and right",
    },
    "239": {
        name: "239. Sliding Window Maximum",
        url: "/leetcode/239-sliding-window-maximum",
        tags: ["array", "queue_stack"],
        keywords: ["mono queue", "lv_2"],
        templates: ["queue_stack"],
        notes: "Mono queue template, pop(i - k + 1)",
    },
    "297": {
        name: "297. Serialize and Deserialize Binary Tree",
        url: "/leetcode/297-serialize-and-deserialize-binary-tree",
        tags: ["tree"],
        keywords: ["tree", "serialize", "lv_1"],
        templates: ["tree"],
        notes: "Tree template. Preorder, must have separator and null char. Post-order is harder, inorder impossible",
    },
    "307": {
        name: "307. Range Sum Query - Mutable",
        url: "/leetcode/307-range-sum-query-mutable",
        tags: ["segment_tree"],
        keywords: ["array", "binary_search", "lv_1"],
        templates: ["segment_tree"],
        notes: "Segment Tree template. O(logN) ",
    },
    "322": {
        name: "322. coin change",
        url: "/leetcode/322-coin-change",
        tags: ["dp"],
        keywords: ["coin change", "lv_3"],
        templates: ["dp"],
        notes: "topdown: res = min(res,sub_res+1), bottomUp: dp[i]=min(dp[i],dp[i-coin]+1). Time: O(amount*N), Space: O(amount)",
    },
    "438": {
        name: "438. Find All Anagrams in a String",
        url: "/leetcode/438-find-all-anagrams-in-a-string",
        tags: ["sliding_window", "string"],
        keywords: ["minimum window", "lv_3"],
        templates: ["sliding_window"],
        notes: "Sliding window template. Time: O(S+T), Space: O(|S|)",
    },
    "450": {
        name: "450. Delete Node in a BST",
        url: "/leetcode/450-delete-node-in-a-bst",
        tags: ["tree"],
        keywords: ["BST", "lv_3"],
        templates: ["tree"],
        notes: "Tree template delete.",
    },
    "460": {
        name: "460. LFU Cache",
        url: "/leetcode/460-lfu-cache",
        tags: ["hashmap", "linked_list"],
        keywords: ["LFU", "double_linked_list", "lv_1"],
        templates: [],
        notes: "1 hashamp {key:Node}, 1 hashmap defaultdict(OrderedDict/DlinkedList) {freq:key_list}, min_freq",
    },
    "496": {
        name: "496. Next Greater Element I",
        url: "/leetcode/496-next-greater-element-i",
        tags: ["array", "queue_stack"],
        keywords: ["mono stack", "lv_3"],
        templates: ["queue_stack"],
        notes: "Mono stack template, loop from end, use map for result",
    },
    "503": {
        name: "503. Next Greater Element II",
        url: "/leetcode/503-next-greater-element-ii",
        tags: ["array", "queue_stack"],
        keywords: ["mono stack", "circular array", "lv_3"],
        templates: ["queue_stack"],
        notes: "Mono stack template, loop from end, array length 2*n-1",
    },
    "560": {
        name: "560. subarray sum equals k",
        tags: ["array", "hashmap", "prefix_sum"],
        keywords: ["subarray", "sum", "lv_2"],
        url: "/leetcode/560-subarray-sums",
        notes: "get prefix sum for array, use hashamp as two-sum searching presum[i]-k time: O(N)",
    },
    "701": {
        name: "701. Insert into a Binary Search Tree",
        url: "/leetcode/701-insert-into-a-binary-search-tree",
        tags: ["tree"],
        keywords: ["BST", "lv_3"],
        templates: ["tree"],
        notes: "Tree traverse template.",
    },
    "704": {
        name: "704. Binary Search",
        url: "/leetcode/704-binary-search",
        tags: ["binary_search", "tree"],
        keywords: ["search 1 item", "lv_1"],
        templates: ["binary_search"],
        notes: "Simplest binary search, one item, l<=r",
    },
    "739": {
        name: "739. Daily Temperatures",
        url: "/leetcode/739-daily-temperatures",
        tags: ["array", "queue_stack"],
        keywords: ["mono stack", "temperature", "lv_3"],
        templates: ["queue_stack"],
        notes: "Mono stack template, loop from end, store index",
    },
    "752": {
        name: "752. Open the Lock",
        url: "/leetcode/752-open-the-lock",
        tags: ["bfs",],
        keywords: ["lock", "lv_3"],
        templates: ["bfs"],
        notes: "BFS template. deque. level traverse. range(len(que)), add children to next level.",
    },
    "773": {
        name: "773. Sliding Puzzle",
        url: "/leetcode/773-sliding-puzzle",
        tags: ["bfs",],
        keywords: ["game", "lv_3"],
        templates: ["bfs"],
        notes: "BFS template. ",
    },
    "912": {
        name: "912. Sort an Array",
        url: "/leetcode/912-sort-an-array",
        tags: ["sort", "array"],
        keywords: ["quick_sort", "merge_sort", "lv_1"],
        templates: ["quick_sort", "merge_sort"],
        notes: "Sort templates: quick sort, merge sort",
    },
    "969": {
        name: "969. Pancake Sorting",
        tags: ["array",],
        keywords: ["sort", "lv_3"],
        url: "/leetcode/969-pancake-sorting",
        notes: "T: O(N^2), S: O(N)",
        templates: []
    },
};
