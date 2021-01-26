package problem1491

func average(salary []int) float64 {
	sum := 0
	min, max := salary[0], salary[1]
	if salary[0] > salary[1] {
		min, max = max, min
	}
	for _, money := range salary[2:] {
		if money > max {
			sum += max
			max = money
		} else if money < min {
			sum += min
			min = money
		} else {
			sum += money
		}
	}
	return float64(sum) / float64(len(salary)-2)
}
