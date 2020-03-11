package problem0131

func partition(s string) [][]string {
	var (
		result    [][]string
		backTrack func(path []string, start int)
	)
	backTrack = func(path []string, start int) {
		if start == len(s) {
			temp := make([]string, len(path))
			copy(temp, path)
			result = append(result, temp)
			return
		}
		for i := start; i < len(s); i++ {
			if !check(s, start, i) {
				continue
			}
			path = append(path, s[start:i+1])
			backTrack(path, i+1)
			path = path[:len(path)-1]
		}
	}
	backTrack([]string{}, 0)
	return result
}

func check(s string, start int, end int) bool {
	for i, j := start, end; i <= j; i, j = i+1, j-1 {
		if s[i] != s[j] {
			return false
		}
	}
	return true
}
