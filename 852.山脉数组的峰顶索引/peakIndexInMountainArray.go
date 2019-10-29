package problem0852

// 标签是二分查找，首先用二分来做, 其他方法遍历一下即可
func peakIndexInMountainArray(A []int) int {
	left, right := 0, len(A)-1
	for left < right {
		mid := (left + right) >> 1
		// 整个数组先递增后递减, 只存在一个峰值
		// 比较A[mid-1], A[mid], A[mid+1]三者关系
		// 如果先增后减, 返回结果
		// 如果单增, 收缩左区间
		// 如果单减, 收缩右区间
		if A[mid-1] < A[mid] && A[mid] > A[mid+1] {
			return mid
		}
		if A[mid-1] < A[mid] && A[mid] < A[mid+1] {
			left = mid
		} else {
			right = mid
		}
	}
	return left
}

