package problem0208

type Trie struct {
	node map[byte]*Trie
	end  bool
}

/** Initialize your data structure here. */
func Constructor() Trie {
	return Trie{node: make(map[byte]*Trie, 0), end: false}
}

// 向Trie树中插入word
func (this *Trie) Insert(word string) {
	root := this
	for i := 0; i < len(word); i++ {
		if trie, exist := root.node[word[i]]; exist {
			root = trie
		} else {
			root.node[word[i]] = &Trie{node: make(map[byte]*Trie, 0), end: false}
			root = root.node[word[i]]
		}
	}
	root.end = true
}

// 在Trie树中查找键
func (this *Trie) Search(word string) bool {
	root := this
	for i := 0; i < len(word); i++ {
		if trie, exist := root.node[word[i]]; exist {
			root = trie
		} else {
			return false
		}
	}
	return root.end == true
}

// 查找Trie树中的键前缀
func (this *Trie) StartsWith(prefix string) bool {
	root := this
	for i := 0; i < len(prefix); i++ {
		if trie, exist := root.node[prefix[i]]; exist {
			root = trie
		} else {
			return false
		}
	}
	return true
}
