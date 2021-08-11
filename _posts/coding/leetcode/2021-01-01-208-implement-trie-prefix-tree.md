---
layout: leetcode
title: "208. Implement Trie (Prefix Tree)"
categories: [leetcode]
---

[Leetcode Link](https://leetcode.com/problems/implement-trie-prefix-tree/)

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

* Trie() Initializes the trie object.
* void insert(String word) Inserts the string word into the trie.
* boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
* boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

 
```
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
```

# Solution


```python
class TrieNode:
  # Initialize your data structure here.
  def __init__(self):
    self.children = collections.defaultdict(TrieNode)
    self.is_word = False


class Trie:

  def __init__(self):
    self.root = TrieNode()

  def insert(self, word):
    """ T: O(m) """
    current = self.root
    for letter in word:
        current = current.children[letter]
    current.is_word = True

  def search(self, word):
    """ T: O(m) """
    current = self.root
    for letter in word:
        if letter not in current.children:
            return False
        current = current.children[letter]
    return current.is_word

  def startsWith(self, prefix):
    """ T: O(m) """
    current = self.root
    for letter in prefix:
        current = current.children.get(letter)
        if current is None:
            return False
    return True
```