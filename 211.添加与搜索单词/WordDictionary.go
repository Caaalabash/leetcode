package problem0211

// 使用[26]*WordDictionary相比于map[byte]*WordDictionary占用内存多一点，但是更快
type WordDictionary struct {
	next [26]*WordDictionary
	end  bool
}

func Constructor() WordDictionary {
	return WordDictionary{
		next: [26]*WordDictionary{},
		end:  false,
	}
}

// 字典树基本操作
func (this *WordDictionary) AddWord(word string) {
	root := this
	for i := 0; i < len(word); i++ {
		if root.next[word[i]-'a'] == nil {
			root.next[word[i]-'a'] = &WordDictionary{
				next: [26]*WordDictionary{},
				end:  false,
			}
		}
		root = root.next[word[i]-'a']
	}
	root.end = true
}

// 核心在于.的判断，剩余两个分支以及最终return都是字典树的基本操作
func (this *WordDictionary) Search(word string) bool {
	root := this

	for i := 0; i < len(word); i++ {
		if word[i] == '.' {
			// 回溯
			for _, c := range root.next {
				if c != nil && c.Search(word[i+1:]) {
					return true
				}
			}
			return false
		} else if root.next[word[i]-'a'] == nil {
			return false
		} else {
			root = root.next[word[i]-'a']
		}
	}

	return root.end
}
