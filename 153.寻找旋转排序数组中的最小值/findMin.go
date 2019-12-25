package problem0153

// 升序数组在某个点上进行了旋转，找出其中最小的元素
// [0,1,2,3,4,5] => [3,4,5,0,1,2]
func findMin(nums []int) int {
	i, j := 0, len(nums)-1
	for i < j {
		mid := int(uint(i+j) >> 1)
		if nums[mid] > nums[j] {
			i = mid + 1
		} else {
			j = mid
		}
	}
	return nums[i]
}
