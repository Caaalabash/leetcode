package problem0004

// 两个大小为m和n的正序数组nums1, nums2，寻找这两个正序数组的中位数，要求时间复杂度为O(log(m+n))
// 归并法时间空间都是O(m+n), 虽然不满足要求, 二分法实属整不清楚
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	// 组合两个数组，这里可以参考21题
	combine := make([]int, 0)
	i, j := 0, 0
	for i < len(nums1) && j < len(nums2) {
		if nums1[i] < nums2[j] {
			combine = append(combine, nums1[i])
			i++
		} else {
			combine = append(combine, nums2[j])
			j++
		}
	}
	if i < len(nums1) {
		combine = append(combine, nums1[i:]...)
	}
	if j < len(nums2) {
		combine = append(combine, nums2[j:]...)
	}
	if len(combine)&1 == 1 {
		return float64(combine[len(combine)/2]+combine[len(combine)/2-1]) / 2
	} else {
		return float64(combine[len(combine)/2])
	}
}
