package problem0744

func nextGreatestLetter(letters []byte, target byte) byte {
	// 二分法寻找右中位数的索引
	l, r := 0, len(letters)-1
	for l < r {
		mid := (l + r + 1) >> 1
		if letters[mid] > target {
			r = mid - 1
		} else {
			l = mid
		}
	}
	// letters[l] <= target相等，则其下一位是比目标值大的最小字母
	if letters[l] <= target {
		// 溢出返回首位
		if l == len(letters)-1 {
			return letters[0]
		} else {
			return letters[l+1]
		}
	} else {
		return letters[l]
	}
}
