package problem0996

import (
	"sort"
)

// 约等于46、47题
func numSquarefulPerms(A []int) int {
	var (
		count     int
		used      = make([]bool, len(A))
		backTrack func(path []int)
	)
	backTrack = func(path []int) {
		if len(path) == len(A) {
			count++
			return
		}
		for i := 0; i < len(A); i++ {
			if used[i] {
				continue
			}
			if i > 0 && A[i] == A[i-1] && !used[i-1] {
				continue
			}
			if len(path) > 0 && !isPerfectSquare(A[i]+path[len(path)-1]) {
				continue
			}
			path = append(path, A[i])
			used[i] = true
			backTrack(path)
			used[i] = false
			path = path[:len(path)-1]
		}
	}
	sort.Ints(A)
	backTrack([]int{})
	return count
}

// 367题
func isPerfectSquare(num int) bool {
	l, r := 0, num
	for l < r {
		mid := (l + r) >> 1
		if mid*mid < num {
			l = mid + 1
		} else {
			r = mid
		}
	}
	return l*l == num
}
