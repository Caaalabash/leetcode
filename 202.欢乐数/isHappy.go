package problem0202

// 标签哈希表, 每次循环都将各位数字的和记录在哈希表中, 一旦某次循环的和已经存在于哈希表中, 即死循环
func isHappy(n int) bool {
	historyMap := make(map[int]struct{})

	for {
		n = getCount(n)
		if n == 1 {
			return true
		}
		if _, ok := historyMap[n]; ok {
			return false
		}
		historyMap[n] = struct{}{}
	}
}

func getCount(n int) int {
	count := 0
	for n > 0 {
		count += (n % 10) * (n % 10)
		n = n / 10
	}
	return count
}
