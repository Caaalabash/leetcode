package problme1512

func numIdenticalPairs(nums []int) int {
	result := 0
	m := make(map[int]int, 0)
	for i := 0; i < len(nums); i++ {
		m[nums[i]]++
	}
	for _, v := range m {
		result += v * (v + 1) / 2
	}
	return result
}
