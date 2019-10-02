package problem0017

// 键盘映射表
var phoneMap = map[byte]string{
	'2': "abc",
	'3': "def",
	'4': "ghi",
	'5': "jkl",
	'6': "mno",
	'7': "pqrs",
	'8': "tuv",
	'9': "wxyz",
}

func letterCombinations(digits string) []string {
	return dfs(digits, 0, "", []string{})
}

// Depth-First-Search
// @param digits - 包含数字2-9的字符串
// @param index - 索引
// @param temp - 临时记录的序列字符串
// @param result - 结果列表
// 递归的终止条件: index索引值超过了字符串的长度
// 递归返回给上一级的信息: 返回结果数组
// 本级递归做的事情: 遍历对应按键中的字母, 递归！
func dfs(digits string, index int, temp string, result []string) []string {
	if index >= len(digits) {
		if temp != "" {
			result = append(result, temp)
		}
		return result
	}
	option := phoneMap[digits[index]]
	for i := 0; i < len(option); i++ {
		result = dfs(digits, index+1, temp+string(option[i]), result)
	}
	return result
}
