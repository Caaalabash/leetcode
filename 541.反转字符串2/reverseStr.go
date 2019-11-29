package problem0541

// string -> []byte
// func reverseInPlace
// 每次取出长度为2k的子串, 进行反转
// 长度不足k时，全部反转
// 长度小于2k时，反转前k
func reverseStr(s string, k int) string {
	var sList = []byte(s)
	var sLen = len(sList)

	var reverseInPlace func(start int, end int)
	reverseInPlace = func(start int, end int) {
		i, j := start, end
		for i < j {
			sList[i], sList[j] = sList[j], sList[i]
			i++
			j--
		}
	}

	i := 0
	for sLen >= 2*k {
		reverseInPlace(i, i+k-1)
		i += 2 * k
		sLen -= 2 * k
	}
	if sLen < k {
		reverseInPlace(i, len(sList)-1)
	} else if sLen < 2*k {
		reverseInPlace(i, i+k-1)
	}
	return string(sList)
}
