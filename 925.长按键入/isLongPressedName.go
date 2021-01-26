package problem0925

func isLongPressedName(name string, typed string) bool {
	if len(name) > len(typed) {
		return false
	}
	i, j := 0, 0
	for j < len(typed) {
		if i < len(name) && name[i] == typed[j] {
			i++
			j++
		} else if j > 0 && typed[j] == typed[j-1] {
			j++
		} else {
			return false
		}
	}
	return i == len(name)
}
