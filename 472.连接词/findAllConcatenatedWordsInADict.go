package problem0472

type Trie struct {
	next [26]*Trie
	end  bool
}

func (this *Trie) add(word string) {
	root := this
	for i := 0; i < len(word); i++ {
		if root.next[word[i]-'a'] == nil {
			root.next[word[i]-'a'] = &Trie{
				next: [26]*Trie{},
				end:  false,
			}
		}
		root = root.next[word[i]-'a']
	}
	root.end = true
}

func findAllConcatenatedWordsInADict(words []string) []string {
	//  建立Trie，注意这里和下面都需要判断word的长度，因为测试用例用空字符串
	trie := new(Trie)
	for _, word := range words {
		if len(word) != 0 {
			trie.add(word)
		}
	}
	var (
		result = make([]string, 0)
		dfs    func(word string, index int) bool
	)
	// 回溯含义：是否能正确分解word，当遇到root.end时，进行分解
	// 在如果能正确分解word，返回true，否则返回false，回溯后继续向下
	dfs = func(word string, index int) bool {
		root := trie
		for i := index; i < len(word); i++ {
			if root.next[word[i]-'a'] == nil {
				return false
			}
			root = root.next[word[i]-'a']
			if root.end && dfs(word, i+1) {
				return true
			}
		}
		// index != 0 过滤基础节点比如cat/dog/cats
		return root.end && index != 0
	}

	for _, word := range words {
		if len(word) != 0 && dfs(word, 0) {
			result = append(result, word)
		}
	}
	return result
}
