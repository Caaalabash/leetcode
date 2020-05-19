package problem0720

type TrieNode struct {
	end  bool
	next [26]*TrieNode
}

func (this *TrieNode) add(word string) {
	cur := this

	for _, c := range word {
		if cur.next[c-'a'] == nil {
			cur.next[c-'a'] = &TrieNode{}
		}
		cur = cur.next[c-'a']
	}

	cur.end = true
}

func (this *TrieNode) search(word string) bool {
	cur := this

	for _, c := range word {
		if cur.next[c-'a'] == nil {
			return false
		}
		if !cur.next[c-'a'].end {
			return false
		}
		cur = cur.next[c-'a']
	}

	return true
}

func longestWord(words []string) string {
	root := &TrieNode{}
	for _, word := range words {
		root.add(word)
	}

	res := ""

	for _, word := range words {
		if root.search(word) {
			if len(word) > len(res) || (len(word) == len(res) && res > word) {
				res = word
			}
		}
	}

	return res
}
