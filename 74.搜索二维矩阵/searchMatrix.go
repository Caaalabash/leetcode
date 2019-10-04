package problem0074

// 两次二分即可 4ms 3.8mb
func searchMatrix(matrix [][]int, target int) bool {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return false
	}

	l, r := 0, len(matrix)-1
	for l < r {
		mid := (l + r + 1) >> 1
		if matrix[mid][0] > target {
			r = mid - 1
		} else {
			l = mid
		}
	}
	if matrix[l][0] > target {
		return false
	}

	array := matrix[l]
	l, r = 0, len(array)-1
	for l < r {
		mid := (l + r) >> 1
		if array[mid] < target {
			l = mid + 1
		} else {
			r = mid
		}
	}
	return array[l] == target
}
