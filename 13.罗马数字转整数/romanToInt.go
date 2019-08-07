package problem0013

// 将所有可能存储在Map中
// 两位键的优先级要大于一位键
func romanToInt(s string) int {
	var ans int
	m := map[string]int{
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
		"IV": 4,
		"IX": 9,
		"XL": 40,
		"XC": 90,
		"CD": 400,
		"CM": 900,
	}
	for i := 0; i < len(s); {
		if i + 1 < len(s) && m[s[i: i + 2]] > 0 {
			ans += m[s[i: i + 2]]
			i += 2
		} else if value, ok := m[string(s[i])]; ok {
			ans += value
			i += 1
		}
	}
	return ans
}
