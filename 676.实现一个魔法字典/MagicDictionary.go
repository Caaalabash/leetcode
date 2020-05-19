package problem0676

type MagicDictionary struct {
	next map[byte]*MagicDictionary
	end  bool
}

func Constructor() MagicDictionary {
	return MagicDictionary{
		next: map[byte]*MagicDictionary{},
		end:  false,
	}
}

func (this *MagicDictionary) BuildDict(dict []string) {
	for _, s := range dict {
		root := this
		for i := 0; i < len(s); i++ {
			if _, ok := root.next[s[i]]; !ok {
				root.next[s[i]] = &MagicDictionary{
					next: map[byte]*MagicDictionary{},
					end:  false,
				}
			}
			root = root.next[s[i]]
		}
		root.end = true
	}
}

func (this *MagicDictionary) Search(word string) bool {
	root := this

	for i := 0; i < len(word); i++ {
		for k, _ := range root.next {
			if k == word[i] {
				continue
			}
			if this.searchStrict(word[:i] + string(k) + word[i+1:]) {
				return true
			}
		}
		if _, ok := root.next[word[i]]; ok {
			root = root.next[word[i]]
		}
	}
	return false
}

func (this *MagicDictionary) searchStrict(word string) bool {
	root := this

	for i := 0; i < len(word); i++ {
		if _, ok := root.next[word[i]]; ok {
			root = root.next[word[i]]
		} else {
			return false
		}
	}

	return root.end == true
}
