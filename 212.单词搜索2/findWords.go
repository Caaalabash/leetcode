package problem0212

type Trie struct {
	next [26]*Trie
	val  string
}

func (this *Trie) add(word string) {
	root := this
	for i := 0; i < len(word); i++ {
		if root.next[word[i]-'a'] == nil {
			root.next[word[i]-'a'] = &Trie{
				next: [26]*Trie{},
			}
		}
		root = root.next[word[i]-'a']
	}
	root.val = word
}

func findWords(board [][]byte, words []string) []string {
	// 构建前缀树
	trie := new(Trie)
	for _, word := range words {
		trie.add(word)
	}
	// 回溯
	var (
		row       = len(board)
		col       = len(board[0])
		result    []string
		backTrack func(board [][]byte, i int, j int, node *Trie)
	)
	backTrack = func(board [][]byte, i int, j int, node *Trie) {
		if i < 0 || i >= row || j < 0 || j >= col {
			return
		}
		c := board[i][j]
		if c == '.' || node.next[c-'a'] == nil {
			return
		}
		node = node.next[c-'a']
		if node.val != "" {
			result = append(result, node.val)
			node.val = ""
		}
		board[i][j] = '.'
		backTrack(board, i+1, j, node)
		backTrack(board, i-1, j, node)
		backTrack(board, i, j+1, node)
		backTrack(board, i, j-1, node)
		board[i][j] = c
	}
	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[0]); j++ {
			backTrack(board, i, j, trie)
		}
	}
	return result
}
