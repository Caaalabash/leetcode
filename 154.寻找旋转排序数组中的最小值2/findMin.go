package problem0154

// 和上一题相比，多了重复元素
// [0,1,2,2,2] => [2,2,0,1,2]
// 那么nums[mid] == nums[j]的时候,j--即可
func findMin(nums []int) int {
	i, j := 0, len(nums)-1
	for i < j {
		mid := int(uint(i+j) >> 1)
		if nums[mid] > nums[j] {
			i = mid + 1
		} else if nums[mid] < nums[j] {
			j = mid
		} else {
			j--
		}
	}
	return nums[i]
}
