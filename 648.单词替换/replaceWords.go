package problem0648

import "strings"

type Trie struct {
	end bool
	// 使用[26]*Trie耗时更少，内存稍多
	next map[byte]*Trie
}

func (this *Trie) add(word string) {
	root := this
	for i := 0; i < len(word); i++ {
		if _, ok := root.next[word[i]]; !ok {
			root.next[word[i]] = &Trie{false, map[byte]*Trie{}}
		}
		root = root.next[word[i]]
	}
	root.end = true
}

func (this *Trie) search(word string) (valid bool, match string) {
	root := this
	for i := 0; i < len(word); i++ {
		if _, ok := root.next[word[i]]; ok {
			root = root.next[word[i]]
		} else {
			return false, ""
		}
		if root.end {
			return true, word[:i+1]
		}
	}
	return false, ""
}

func replaceWords(dict []string, sentence string) string {
	trie := &Trie{false, map[byte]*Trie{}}
	for _, str := range dict {
		trie.add(str)
	}

	list := strings.Split(sentence, " ")
	for index, str := range list {
		if valid, match := trie.search(str); valid {
			list[index] = match
		}
	}
	return strings.Join(list, " ")
}
