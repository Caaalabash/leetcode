package problem1081

// 和316题一样
func smallestSubsequence(s string) string {
	stack := make([]byte, 0)
	lastSeenMap := make(map[byte]int, 0)
	appearMap := make(map[byte]struct{}, 0)
	for i, b := range s {
		lastSeenMap[byte(b)] = i
	}
	for i, b := range s {
		value := byte(b)
		if _, ok := appearMap[value]; !ok {
			for len(stack) > 0 && value < stack[len(stack)-1] && i < lastSeenMap[stack[len(stack)-1]] {
				delete(appearMap, stack[len(stack)-1])
				stack = stack[:len(stack)-1]
			}
			stack = append(stack, value)
			appearMap[value] = struct{}{}
		}
	}
	return string(stack)
}
