package problem0167

// 双指针对撞 4ms 3mb, 二分法不适合
func twoSum(numbers []int, target int) []int {
	left, right := 0, len(numbers)-1

	for left < right {
		if sum := numbers[left] + numbers[right]; sum < target {
			left++
		} else if sum > target {
			right--
		} else {
			return []int{left + 1, right + 1}
		}
	}
	return []int{-1, -1}
}
