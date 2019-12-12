package problem0657

func judgeCircle(moves string) bool {
	a, b := 0, 0
	for i := 0; i < len(moves); i++ {
		if moves[i] == 'L' {
			a++
		} else if moves[i] == 'R' {
			a--
		} else if moves[i] == 'U' {
			b++
		} else if moves[i] == 'D' {
			b--
		}
	}
	return a == 0 && b == 0
}
