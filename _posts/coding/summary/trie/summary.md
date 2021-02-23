# TRIE - 'Prefix Tree'. 
Trie is a special 'Prefix Tree' (wording from 'retrieval') in dictionary word searches, auto-suggestions, and IP routing. 

LC summary:

https://leetcode.com/discuss/general-discussion/680706/article-on-trie-general-template-and-list-of-problems

## Common use cases
* Autocomplete words - efficiently reduce overall cost of performance
* Spell-checking - helpful when user does not know the exact spelling of a word. 
* Searching for a phone contact - auto-suggestion based on the combination of letters that we enter, better than hash table

```python
class TrieNode:
  def __init__(self, char = ''):
    self.children = [None] * 26 #Total size of the English alphabet
    self.is_end_word = False #will be true if the node represents the end of word
    self.char = char #To store the value of a particular key
  
  #Function to mark the currentNode as Leaf
  def mark_as_leaf(self):
    self.is_end_word = True
    
  #Function to unMark the currentNode as Leaf  
  def unmark_as_Leaf(self):
    self.is_end_word = False
    
trie_node = TrieNode('a')
print(trie_node.char)


# A typical trie class looks like this in Python:
class Trie:
  def __init__(self):
    self.root = TrieNode() #Root node

  #Function to get the index of a character 't'
  def get_index(self,t):
    return ord(t) - ord('a') #
    #ord(): Given a string of length one,
    #returns an integer representing the Unicode code of the character.

  #Function to insert a key in the Trie
  def insert(self,key):
    pass

  #Function to search a given key in Trie
  def search(self,key):
    return False

  #Function to delete given key from Trie
  def delete(self,key):
    pass

trie = Trie()
print(trie.get_index('f'))
```

* For insert/search/delete a key, see trie_demo.py

## Execise

1. Given a root TrieNode, count how many words are in the tree.

```python
#TrieNode => {children, is_end_word, char,
#mark_as_leaf(), unmark_as_leaf()}
def total_words(root):
  # Write - Your - Code
  if root is None: return 0
  result = 1 if root.is_end_word else 0
  result += sum(total_words(child) for child in root.children)
  return result
```

2. Given a root TrieNode, print out all words.
Essentially, it's a DFS. The output is in alphabetic order. 
```python
def find_words(root):
    """ print out all words in trie """
    result = []
    def find_words_path(node, path):
        if node is None: return
        if node.is_end_word: result.append(path + node.char)
        if node.char is not None: path += node.char
        for child in node.children:
            find_words_path(child, path)
    if root is None: return []
    if root.is_end_word: return [root.char]
    find_words_path(root, "")
    return result
```

3. Find a combined word in a dictionary. 
<pre>
For example: 
dictionary = ["the", "hello", "there", "answer", "any",
                     "by", "world", "their","abc"]
word = "helloworld"
Output: True
</pre>

```python
def is_formation_possible(dictionary,word):
  # Write your code here
  def check_word(trie, word):
    if word is None or len(word)==0: return True
    for i in range(1, len(word) + 1):
      if trie.search(word[:i]) and check_word(trie, word[i:]):
          return True
    return False

  trie = Trie()
  for w in dictionary:
    trie.insert(w)

  return check_word(trie, word)
```
