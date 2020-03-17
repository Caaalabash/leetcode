package problem0526

// 初始化一个option数组，长度为N+1
// 回溯退出的条件为：填满
func countArrangement(N int) int {
	var (
		result    int
		visit     = make([]bool, N+1)
		backTrack func(pos int)
	)
	backTrack = func(pos int) {
		if pos > N {
			result++
			return
		}
		for i := 1; i < N+1; i++ {
			if !visit[i] && (pos%i == 0 || i%pos == 0) {
				visit[i] = true
				backTrack(pos + 1)
				visit[i] = false
			}
		}
	}
	backTrack(1)
	return result
}
