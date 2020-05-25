package problem0745

// 后缀修饰的单词查找树
// 对于 apple 这个单词，我们可以在单词查找树插入每个后缀，后跟 “#” 和单词。
// 例如，我们将在单词查找树中插入 '#apple', 'e#apple', 'le#apple', 'ple#apple', 'pple#apple', 'apple#apple'。
// 然后对于 prefix = "ap", suffix = "le" 这样的查询，我们可以通过查询单词查找树找到 le#ap。
type WordFilter struct {
	weight   int
	children [27]*WordFilter
}

func (this *WordFilter) add(word string, weight int) {
	root := this
	for i := 0; i < len(word); i++ {
		if root.children[word[i]-'a'] == nil {
			root.children[word[i]-'a'] = &WordFilter{
				weight:   weight,
				children: [27]*WordFilter{},
			}
		}
		root = root.children[word[i]-'a']
		// 更新权重，因为可能出现重复的word，但是权重已经提升了
		root.weight = weight
	}
}

func Constructor(words []string) WordFilter {
	wf := WordFilter{
		weight:   0,
		children: [27]*WordFilter{},
	}
	for weight, word := range words {
		key := word + "{" + word
		for i := 0; i <= len(word); i++ {
			wf.add(key[i:], weight)
		}
	}
	return wf
}

func (this *WordFilter) F(prefix string, suffix string) int {
	root := this
	key := suffix + "{" + prefix
	for _, b := range key {
		if root.children[b-'a'] == nil {
			return -1
		}
		root = root.children[b-'a']
	}
	return root.weight
}