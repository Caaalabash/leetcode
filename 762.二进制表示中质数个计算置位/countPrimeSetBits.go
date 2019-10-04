package problem0762

// 0ms 2mb
func countPrimeSetBits(L int, R int) int {
	primeSet := [32]int8{0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1}
	var result int
	for i := L; i <= R; i++ {
		if primeSet[oneCount(i)] == 1 {
			result++
		}
	}
	return result
}

// 这样做似乎更快, 可是不好理解
func oneCount(num int) int {
	var result int
	for num > 0 {
		num &= num - 1
		result++
	}
	return result
}

// 最开始的做法20ms, 2mb
func countPrimeSetBits1(L int, R int) int {
	// 最多三十二位, 即32以内的质数
	m := map[int]struct{}{
		2:  struct{}{},
		3:  struct{}{},
		5:  struct{}{},
		7:  struct{}{},
		11: struct{}{},
		13: struct{}{},
		17: struct{}{},
		19: struct{}{},
		23: struct{}{},
		29: struct{}{},
		31: struct{}{},
	}
	var result int
	for i := L; i < R; i++ {
		if _, ok := m[oneCount1(i)]; ok {
			result++
		}
	}
	return result
}

// 工具函数, 计算bit位为1的个数
func oneCount1(num int) int {
	var result int
	for num != 0 {
		if num&1 == 1 {
			result += 1
		}
		num >>= 1
	}
	return result
}
