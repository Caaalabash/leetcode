package problem1002

func counter(str string) map[byte]int {
	m := make(map[byte]int)
	for _, w := range str {
		m[byte(w)]++
	}
	return m
}

func getIntersectionMap(m map[byte]int, n map[byte]int) map[byte]int {
	for k, mVal := range m {
		if nVal, ok := n[k]; ok {
			if nVal < mVal {
				m[k] = nVal
			}
		} else {
			delete(m, k)
		}
	}
	return m
}

// 哈希表的典型思路: 使用counter统计字符出现次数, 通过求交集排除一些字符, 最后转为数组输出
func commonChars(A []string) []string {
	m := counter(A[0])
	for _, v := range A[1:] {
		m = getIntersectionMap(m, counter(v))
		if len(m) == 0 {
			return []string{}
		}
	}

	var result []string
	for k, v := range m {
		for v > 0 {
			result = append(result, string(k))
			v--
		}
	}
	return result
}

// 另外一种思路, 使用数组, 其他过程和上面的方法一样
func commonChars1(A []string) []string {
	arrMap := [26]int{}
	for _, v := range A[0] {
		arrMap[v-'a']++
	}
	for _, word := range A[1:] {
		t := [26]int{}
		for _, v := range word {
			t[v-'a']++
		}
		for k := range t {
			if t[k] < arrMap[k] {
				arrMap[k] = t[k]
			}
		}
	}
	res := make([]string, 0, 26)
	for i := 0; i < len(arrMap); i++ {
		for arrMap[i] != 0 {
			res = append(res, string('a'+byte(i)))
			arrMap[i]--
		}
	}
	return res
}
