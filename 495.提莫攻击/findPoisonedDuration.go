package problem0495

// 第一个参数是攻击时间，第二个参数是持续时间
func findPoisonedDuration(timeSeries []int, duration int) int {
	if len(timeSeries) < 1 {
		return 0
	}
	result := duration

	for i := 0; i < len(timeSeries)-1; i++ {
		if timeSeries[i]+duration <= timeSeries[i+1] {
			result += duration
		} else {
			result += timeSeries[i+1] - timeSeries[i]
		}
	}
	return result
}
