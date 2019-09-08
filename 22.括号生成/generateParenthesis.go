package problem0022

// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
func generateParenthesis(n int) []string {
	res := make([]string, 0)
	gene(&res, "", n, n)
	return res
}

func gene(res *[]string, str string, left, right int) {
	if left == 0 { // 此时表明left已经出栈完毕，需要把right中的全部出栈
		for i := 0; i < right; i++ {
			str += ")"
		}
		*res = append(*res, str)
		return
	}
	gene(res, str+"(", left-1, right)
	if left < right {
		gene(res, str+")", left, right-1)
	}
}
