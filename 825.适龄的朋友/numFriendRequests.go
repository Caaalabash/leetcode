package problem0825

// 暴力会超时
// 由于年龄范围在[1, 120], 那么创建一个121的数组，索引等同于年龄
func numFriendRequests(ages []int) int {
	result := 0

	count := make([]int, 121)
	for _, age := range ages {
		count[age]++
	}

	for ageA := 1; ageA <= 120; ageA++ {
		for ageB := 1; ageB <= 120; ageB++ {
			if canAInviteB(ageA, ageB) {
				result += count[ageA] * count[ageB]
				if ageA == ageB {
					result -= count[ageA]
				}
			}
		}
	}

	return result
}

func canAInviteB(ageA, ageB int) bool {
	if ageA < ageB || (ageB > 100 && ageA < 100) || (float64(ageB) <= float64(ageA)*0.5+7) {
		return false
	}
	return true
}
