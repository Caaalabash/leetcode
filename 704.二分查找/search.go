package problem0704

func search(nums []int, target int) int {
	l, r := 0, len(nums)-1
	for l < r {
		mid := (l + r) >> 1
		if nums[mid] < target {
			l = mid + 1
		} else {
			r = mid
		}
	}
	if nums[l] != target {
		return -1
	}
	return l
}
