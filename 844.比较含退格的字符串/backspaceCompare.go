package problem0844

func backspaceCompare(S string, T string) bool {
	return parse(S) == parse(T)
}

func parse(s string) string {
	var stack []byte
	for _, v := range s {
		if byte(v) == '#' {
			if len(stack) > 0 {
				stack = stack[:len(stack)-1]
			}
		} else {
			stack = append(stack, byte(v))
		}
	}
	return string(stack)
}
