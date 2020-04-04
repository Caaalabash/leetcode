package problem0763

// 将字符串划分成尽可能多的片段，同一个字母只会出现在其中的一个片段
// 对于当前字母S[i], 向后寻找同样的字母
// 用lastIndexList记录26个字母最后位置的索引
func partitionLabels(S string) []int {
	lastIndexList := make([]int, 26)
	for i, v := range S {
		lastIndexList[int(v-'a')] = i
	}
	result := make([]int, 0)
	start, end := 0, 0
	for i := 0; i < len(S); i++ {
		end = max(lastIndexList[S[i]-'a'], end)
		if i == end {
			result = append(result, end-start+1)
			start = end + 1
		}
	}
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
