package problem0724

func pivotIndex(nums []int) int {
	sum := 0
	for _, num := range nums {
		sum += num
	}
	temp := 0
	for index, num := range nums {
		if temp*2 == sum-num {
			return index
		}
		temp += num
	}
	return -1
}
