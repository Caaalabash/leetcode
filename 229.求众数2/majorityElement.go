package problem0229

func majorityElement(nums []int) []int {
	var result []int
	m := make(map[int]int)

	for i, lens := 0, len(nums); i < lens; i++ {
		count, ok := m[nums[i]]
		if ok {
			count++
		} else {
			count = 1
		}
		m[nums[i]] = count
	}
	for k, v := range m {
		if v > len(nums)/3 {
			result = append(result, k)
		}
	}
	return result
}
