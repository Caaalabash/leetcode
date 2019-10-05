package problem0784

// Tips: 位运算转换字母大小写, 大小写字母二进制表示值相差32
// A(65): 0100 0001
// a(97): 0110 0001
// 可以观察出 A ^ 0010 0000 = a     a ^ 0010 0000 = A
// 回溯解决
func letterCasePermutation(S string) []string {
	var result []string
	backTracking(&result, []byte(S), 0)
	return result
}

func backTracking(result *[]string, s []byte, index int) {
	if index == len(s) {
		*result = append(*result, string(s))
		return
	}
	backTracking(result, s, index+1)
	if s[index] >= 65 {
		s[index] ^= 32
		backTracking(result, s, index+1)
	}
}
