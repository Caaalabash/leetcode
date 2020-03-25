package problem1282

// groupSizes包含每位用户所属用户组的大小，返回分组情况
func groupThePeople(groupSizes []int) [][]int {
	result, temp := make([][]int, 0), make([][]int, len(groupSizes)+1)
	for i := 0; i < len(groupSizes); i++ {
		temp[groupSizes[i]] = append(temp[groupSizes[i]], i)
		if len(temp[groupSizes[i]]) == groupSizes[i] {
			result = append(result, temp[groupSizes[i]])
			temp[groupSizes[i]] = nil
		}
	}
	return result
}
