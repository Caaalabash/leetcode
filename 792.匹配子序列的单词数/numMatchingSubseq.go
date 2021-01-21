package problem0792

// 求words[i]中是S的子序列的单词个数
// 为了效率，需要对S做一些处理
func numMatchingSubseq(S string, words []string) int {
	count := 0
	// 遍历一次S，构建一个二维数组arr[x][y]，第一维代表26个字母，第二维代表对应字母出现的索引
	var arr [26][]int
	for i, b := range S {
		arr[b-'a'] = append(arr[b-'a'], i)
	}
	// 遍历每个单词
OUTER:
	for _, word := range words {
		prevIndex := -1
		// 遍历字母
		for _, w := range word {
			hasNext := false
			for j := 0; j < len(arr[w-'a']); j++ {
				if arr[w-'a'][j] > prevIndex {
					hasNext = true
					prevIndex = arr[w-'a'][j]
					break
				}
			}
			if !hasNext {
				continue OUTER
			}
		}
		count++
	}
	return count
}
