package problem1032

type Trie struct {
	next [26]*Trie
	end  bool
}

func (this *Trie) addReverse(word string) {
	root := this
	for i := len(word) - 1; i >= 0; i-- {
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

type StreamChecker struct {
	trie    *Trie
	history []byte
}

func Constructor(words []string) StreamChecker {
	streamChecker := StreamChecker{
		trie: &Trie{
			next: [26]*Trie{},
			end:  false,
		},
		history: nil,
	}
	for _, word := range words {
		streamChecker.trie.addReverse(word)
	}
	return streamChecker
}

func (this *StreamChecker) Query(letter byte) bool {
	this.history = append(this.history, letter)
	root := this.trie
	for i := len(this.history) - 1; i >= 0; i-- {
		if root.end {
			return true
		}
		if root.next[this.history[i]-'a'] == nil {
			return false
		}
		root = root.next[this.history[i]-'a']
	}
	return root.end
}