package problem0498

func findDiagonalOrder(matrix [][]int) []int {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return nil
	}
	M, N := len(matrix), len(matrix[0])
	m, n := 0, 0
	up := true
	result := make([]int, 0)

	for 0 <= m && m < M && 0 <= n && n < N {
		result = append(result, matrix[m][n])
		// 方向向上
		if up {
			// 依次检查右上角、正右、正下
			if 0 <= m-1 && m-1 < M && n+1 < N {
				m -= 1
				n += 1
			} else if n+1 < N {
				n += 1
				up = false
			} else if m+1 < M {
				m += 1
				up = false
			} else {
				break
			}
		} else {
			// 依次检查左下角、正下、正右
			if m+1 < M && 0 <= n-1 && n-1 < N {
				m += 1
				n -= 1
			} else if m+1 < M {
				m += 1
				up = true
			} else if n+1 < N {
				n += 1
				up = true
			} else {
				break
			}
		}
	}
	return result
}
