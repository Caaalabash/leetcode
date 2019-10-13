package problem0682

import "strconv"

func calPoints(ops []string) int {
	var stack []int
	for _, v := range ops {
		lastIndex := len(stack) - 1
		if v == "C" {
			stack = stack[:lastIndex]
		} else if v == "D" {
			stack = append(stack, int(stack[lastIndex])*2)
		} else if v == "+" {
			stack = append(stack, int(stack[lastIndex])+int(stack[lastIndex-1]))
		} else {
			t, _ := strconv.Atoi(v)
			stack = append(stack, t)
		}
	}
	var result int
	for _, v := range stack {
		result += v
	}
	return result
}
