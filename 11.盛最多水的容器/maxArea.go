package problem0011

// 双指针法
// 20ms 5.9mb
func maxAreaA(height []int) int {
	var area int
	left, right, temp := 0, len(height)-1, 0

	for left != right {
		width := right - left
		if height[left] >= height[right] {
			temp = width * height[right]
			right--
		} else {
			temp = width * height[left]
			left++
		}
		if temp > area {
			area = temp
		}
	}
	return area
}
