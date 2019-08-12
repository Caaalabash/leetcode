package problem0003

// 给定一个字符串, 找出其中不含重复字符的最长子串的长度
// "abcabccbb" => 3
// 滑动窗口方式最简单的逻辑：
//   如果当前值在滑窗之中, 最左侧元素移出滑窗, 反之移进滑窗
// 12ms 2.7mb性能比较一般
func lengthOfLongestSubstring(s string) int {
	if length := len(s); length <= 1 {
		return length
	} else {
		set := make(map[uint8]struct{})
		byteS := []byte(s)
		var maxLen, curLen int

		for left, right := 0, 0; right < length; right++ {
			_, exist := set[byteS[right]]

			for exist {
				delete(set, s[left])
				left++
				curLen--
				_, exist = set[byteS[right]]
			}
			set[byteS[right]] = struct{}{}
			curLen++
			if curLen > maxLen {
				maxLen = curLen
			}
		}

		return maxLen
	}
}

// 优化的滑动窗口
// 设s[j]与s[i, j)有重复值j, 其索引为j', 那么左侧窗口应该直接移动到j' + 1的位置, 这样可以减少最坏情况的循环次数
// 例如 abcdd
// 当已循环了abcd时, 如果按照上面的做法, 接下来会判断bcd, bcd, cd, d, 这是多余的
// 8ms 3.2mb
func lengthOfLongestSubstringA(s string) int {
	var maxLen, curLen int
	m := map[uint8]int{}

	for i, j, lens := 0, 0, len(s); j < lens; j++ {
		if v, exist := m[s[j]]; exist && v > i {
			i = v
		}
		curLen = j - i + 1
		m[s[j]] = j + 1
		if curLen > maxLen {
			maxLen = curLen
		}
	}
	return maxLen
}

// 0ms 2.7mb
// 如果不使用byte(s): 4ms, 2.6mb
func lengthOfLongestSubstringB(s string) int {
	var maxLen, curLen int
	byteS := []byte(s)
	kvMap := make([]int, 128)

	for i, j, lens := 0, 0, len(s); j < lens; j++ {
		v := byteS[j]
		if kvMap[v] > i {
			i = kvMap[v]
		}
		curLen = j - i + 1
		kvMap[v] = j + 1
		if curLen > maxLen {
			maxLen = curLen
		}
	}
	return maxLen
}
