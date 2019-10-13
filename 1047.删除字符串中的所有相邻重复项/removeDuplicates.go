package problem1047

func removeDuplicates(S string) string {
	var stack []byte

	for _, v := range S {
		if len(stack) > 0 && byte(v) == stack[len(stack)-1] {
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, byte(v))
		}
	}
	return string(stack[:])
}
