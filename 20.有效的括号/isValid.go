package problem0020

// 栈 + 遍历
// 当为 ( [ { 时, 入栈
// 当栈不为空且为 ) ] } 时, 和栈顶元素比较, 同则出栈
func isValid(s string) bool {
	var stack []string
	m := map[string]string{
		"(": ")",
		"[": "]",
		"{": "}",
	}
	for _, v := range s {
		strV := string(v)
		if strV == "{" || strV == "(" || strV == "[" {
			stack = append(stack, strV)
		} else if len(stack) != 0 && strV == m[stack[len(stack)-1]] {
			stack = stack[:len(stack)-1]
		} else {
			return false
		}
	}
	return len(stack) == 0
}
