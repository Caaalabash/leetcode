package problem0921

// 常规
func minAddToMakeValid(S string) int {
	var stack []byte

	for i := 0; i < len(S); i++ {
		if len(stack) != 0 && stack[len(stack)-1] == '(' && S[i] == ')' {
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, S[i])
		}
	}
	return len(stack)
}

func minAddToMakeValid1(S string) int {
	left, right := 0, 0
	for _, i := range S {
		if i == '(' {
			left++
		} else if i == ')' {
			if left > 0 {
				left--
			} else {
				right++
			}
		}
	}
	return left + right
}
