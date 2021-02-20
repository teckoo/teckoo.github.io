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
    "bfs":"",
    "dfs":"",
    "binary_search":"",
    "backtrack":"",
    "topo_sort":"",
    "cycle_sort":"",
    "quick_sort":"",
    "merge_sort":"",
    "reverse_list":"",
    "sliding_window":"",
};

var problems = {
    "1": {
        name: "1. Two Sum",
        tags: ["array"],
        keywords: ["two sum"],
        url: "https://github.com/somelink",
        notes: "quick note",
        templates: ["two pointers"],
        companies: ["bloomberg", "amazon"],
    },
    "2": {
        name: "2",
        tags: ["array", "string"],
        keywords: ["change coin"],
        url: "some link",
        notes: "quick note",
    },
    "3": {
        name: "3",
        tags: ["array", "string", "tree"],
        keywords: ["N queens"],
        url: "some link",
        notes: "quick note",
    },
    "4": {
        name: "4",
        tags: ["string", "tree"],
        keywords: ["two sum"],
        url: "some link",
        notes: "quick note",
    },
    "5": {
        name: "5",
        tags: ["tree"],
        keywords: ["two sum"],
        url: "some link",
        notes: "quick note",
    },
    "46": {
        name: "46. permutations",
        url: "/leetcode/46-permutations",
        tags: ["backtrack"],
        keywords: ["permutation"],
        template: ["backtrack"],
        notes: "Backtrack template. End condition: path=nums[:i]+nums[i+1]. res.append([nums[i]] + path]) Time: O(N!), Space: O(N!)",
    },
    "51": {
        name: "51. N queens",
        url: "/leetcode/51-n-queens",
        tags: ["backtrack"],
        keywords: ["N queens"],
        template: ["backtrack"],
        notes: "Backtrack template. bt(grid, 0). End condition: row==len(grid). grid[row][col]='Q';bt();grid[row][col]='.'. Time: O(N!), Space: O(N!)",
    },

    "111": {
        name: "111. Minimum Depth of Binary Tree",
        url: "/leetcode/111-minimum-depth-of-binary-tree",
        tags: ["bfs", "tree"],
        keywords: ["tree depth"],
        template: ["bfs"],
        notes: "BFS template. deque. level traverse. range(len(que)), add children to next level.",
    },

    "322": {
        name: "322. coin change",
        url: "/leetcode/322-coin-change",
        tags: ["dp"],
        keywords: ["coin change"],
        template: ["dp"],
        notes: "topdown: res = min(res,sub_res+1), bottomUp: dp[i]=min(dp[i],dp[i-coin]+1). Time: O(amount*N), Space: O(amount)",
    },
    "560": {
        name: "560. subarray sum equals k",
        tags: ["array", "hashmap", "prefix_sum"],
        keywords: ["subarray", "sum"],
        url: "/leetcode/560-subarray-sums",
        notes: "get prefix sum for array, use hashamp as two-sum searching presum[i]-k time: O(N)",
    },
};
