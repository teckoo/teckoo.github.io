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
        keywords: ["two sum"],
        url: "/leetcode/1-two-sum",
        notes: "hashmap, T: O(N), S: O(N)",
        templates: [],
        companies: ["bloomberg", "amazon"],
    },
    "2": {
        name: "2-test",
        tags: ["array", "string"],
        keywords: ["change coin"],
        url: "some link",
        notes: "quick note",
    },
    "3": {
        name: "3. Longest Substring Without Repeating Characters",
        url: "/leetcode/3-longest-substring-without-repeating-characters",
        tags: ["sliding_window"],
        keywords: ["longest string", "string", "hashmap"],
        template: ["sliding_window"],
        notes: "Sliding window template. update res while increase right. Time: O(N), Space: O(N)",
    },
    "34": {
        name: "34. Find First and Last Position of Element in Sorted Array",
        url: "/leetcode/34-find-first-and-last-position-of-element-in-sorted-array",
        tags: ["binary_search",],
        keywords: ["search range"],
        template: ["binary_search"],
        notes: "Binary search for boundary, check end condition",
    },
    "46": {
        name: "46. permutations",
        url: "/leetcode/46-permutations",
        tags: ["backtrack"],
        keywords: ["permutation"],
        template: ["backtrack"],
        notes: "Backtrack template. End condition: path=nums[:i]+nums[i+1:]. res.append([nums[i]] + path]) Time: O(N!), Space: O(N!)",
    },
    "51": {
        name: "51. N queens",
        url: "/leetcode/51-n-queens",
        tags: ["backtrack"],
        keywords: ["N queens"],
        template: ["backtrack"],
        notes: "Backtrack template. bt(grid, 0). End condition: row==len(grid). diag_l[row+col], diag_r[col-row+n-1], grid[row][col]='Q';bt();grid[row][col]='.'. Time: O(N!), Space: O(N!)",
    },
    "76": {
        name: "76. Minimum Window Substring",
        url: "/leetcode/76-minimum-window-substring",
        tags: ["sliding_window"],
        keywords: ["minimum window", "string"],
        template: ["sliding_window"],
        notes: "Sliding window template. while increase right, while shrink left. Time: O(S+T), Space: O(|S|)",
    },
    "100": {
        name: "100. Same Tree",
        url: "/leetcode/100-same-tree",
        tags: ["tree"],
        keywords: ["preorder"],
        template: ["tree"],
        notes: "Tree traverse template. Preorder, check both null, 1 null, compare 2 values.",
    },
    "111": {
        name: "111. Minimum Depth of Binary Tree",
        url: "/leetcode/111-minimum-depth-of-binary-tree",
        tags: ["bfs", "tree"],
        keywords: ["tree depth"],
        template: ["bfs"],
        notes: "BFS template. deque. level traverse. range(len(que)), add children to next level.",
    },
    "141": {
        name: "141. Linked List Cycle",
        url: "/leetcode/141-linked-list-cycle",
        tags: ["fast_slow_pointers", "linked_list"],
        keywords: ["cycle list"],
        template: ["fast_slow_pointers"],
        notes: "Fast/Slow pointers, T:O(N), S:O(1)",
    },
    "142": {
        name: "142. Linked List Cycle II",
        url: "/leetcode/142-linked-list-cycle-ii",
        tags: ["fast_slow_pointers", "linked_list"],
        keywords: ["cycle list"],
        template: ["fast_slow_pointers"],
        notes: "Fast/Slow pointers, 先找到meetpoint，再从头同步前进直到相遇。T:O(N), S:O(1)",
    },
    "146": {
        name: "146. LRU Cache",
        url: "/leetcode/146-lru-cache",
        tags: ["hashmap", "linked_list"],
        keywords: ["LRU", "double_linked_list"],
        template: [],
        notes: "OrderedDict, both get()/put(): move_to_end(). raw code, use head/tail dummy nodes; cache{key:Node}.",
    },
    "167": {
        name: "167. Two Sum II - Input array is sorted",
        tags: ["array", "two_pointers"],
        keywords: ["two sum", "sorted"],
        url: "/leetcode/167-two-sum-ii-input-array-is-sorted",
        notes: "Two pointers, T: O(N), S: O(N)",
        templates: ["two_pointers"],
        companies: ["bloomberg", "amazon"],
    }, 
    "322": {
        name: "322. coin change",
        url: "/leetcode/322-coin-change",
        tags: ["dp"],
        keywords: ["coin change"],
        template: ["dp"],
        notes: "topdown: res = min(res,sub_res+1), bottomUp: dp[i]=min(dp[i],dp[i-coin]+1). Time: O(amount*N), Space: O(amount)",
    },
    "438": {
        name: "438. Find All Anagrams in a String",
        url: "/leetcode/438-find-all-anagrams-in-a-string",
        tags: ["sliding_window"],
        keywords: ["minimum window", "string"],
        template: ["sliding_window"],
        notes: "Sliding window template. Time: O(S+T), Space: O(|S|)",
    },
    "460": {
        name: "460. LFU Cache",
        url: "/leetcode/460-lfu-cache",
        tags: ["hashmap", "linked_list"],
        keywords: ["LFU", "double_linked_list"],
        template: [],
        notes: "1 hashamp {key:Node}, 1 hashmap defaultdict(OrderedDict/DlinkedList) {freq:key_list}, min_freq",
    },
    
    "560": {
        name: "560. subarray sum equals k",
        tags: ["array", "hashmap", "prefix_sum"],
        keywords: ["subarray", "sum"],
        url: "/leetcode/560-subarray-sums",
        notes: "get prefix sum for array, use hashamp as two-sum searching presum[i]-k time: O(N)",
    },
    "704": {
        name: "704. Binary Search",
        url: "/leetcode/704-binary-search",
        tags: ["binary_search",],
        keywords: ["1 item"],
        template: ["binary_search"],
        notes: "Simplest binary search, one item, l<=r",
    },
    "752": {
        name: "752. Open the Lock",
        url: "/leetcode/752-open-the-lock",
        tags: ["bfs",],
        keywords: ["lock"],
        template: ["bfs"],
        notes: "BFS template. deque. level traverse. range(len(que)), add children to next level.",
    },
};
