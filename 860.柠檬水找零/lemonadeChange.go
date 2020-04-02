package problem0860

// 找零钱游戏，20是找不出去的，所以只记录5和10的数量
func lemonadeChange(bills []int) bool {
	five, ten := 0, 0
	for _, v := range bills {
		if v == 5 {
			five++
		} else if v == 10 {
			if five == 0 {
				return false
			}
			five--
			ten++
		} else if v == 20 {
			if five == 0 || (ten == 0 && five < 3) {
				return false
			}
			if ten > 0 {
				ten--
				five--
			} else {
				five -= 3
			}
		}
	}
	return true
}
