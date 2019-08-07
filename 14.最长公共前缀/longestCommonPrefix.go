package problem0014

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	res := strs[0]
	for _, v := range strs[1:] {
		var i int
		for ; i < len(v) && i < len(res); i++ {
			if res[i] != v[i] {
				break
			}
		}
		res = res[:i]
		if res == "" {
			return res
		}
	}
	return res
}
