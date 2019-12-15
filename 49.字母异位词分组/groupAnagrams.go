package problem0049

import (
	"sort"
	"strings"
)

// 用质数表示26个字母，把字符串的各个字母相乘，这样可保证字母异位词的乘积必定是相等的
func groupAnagrams(strs []string) [][]string {
	var result [][]string
	m := make(map[string][]string)

	for _, str := range strs {
		v := handler(str)
		if _, ok := m[v]; !ok {
			m[v] = make([]string, 0)
		}
		m[v] = append(m[v], str)
	}
	for _, v := range m {
		result = append(result, v)
	}
	return result
}

func handler(str string) string {
	s := strings.Split(str, "")
	sort.Strings(s)
	return strings.Join(s, "")
}
